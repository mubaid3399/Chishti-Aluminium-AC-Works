// =====================================================================
// Converts all PNG/JPEG images in src/assets to WebP siblings.
// - Skips _original-* backup folders
// - Skips files where a .webp already exists with newer mtime
// - Resizes anything wider than MAX_WIDTH down to MAX_WIDTH
// - Quality tuned for photo (q=72) vs logo/screenshot PNG with alpha (q=82)
// =====================================================================

import sharp from "sharp";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { join, dirname, extname, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "src", "assets");

const MAX_WIDTH = 1920;
const PHOTO_QUALITY = 72;     // JPEG sources (already-compressed photos)
const ALPHA_QUALITY = 82;     // PNG sources (often have transparency)
const SKIP_DIRS = new Set(["_original-images", "_original-videos"]);
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(full);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (IMAGE_EXTS.has(ext)) yield full;
    }
  }
}

function fmt(n) {
  return (n / 1024).toFixed(1) + " KB";
}

async function convertOne(file) {
  const ext = extname(file).toLowerCase();
  const webpPath = file.slice(0, -ext.length) + ".webp";

  // Skip if .webp already exists AND is newer than source
  if (existsSync(webpPath)) {
    const srcStat = statSync(file);
    const webStat = statSync(webpPath);
    if (webStat.mtimeMs >= srcStat.mtimeMs) {
      return { file, skipped: true };
    }
  }

  const original = await readFile(file);
  const originalSize = original.length;

  const meta = await sharp(original).metadata();
  let pipeline = sharp(original, { failOn: "none" }).rotate();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const quality = ext === ".png" ? ALPHA_QUALITY : PHOTO_QUALITY;
  const out = await pipeline.webp({ quality, effort: 6 }).toBuffer();

  await writeFile(webpPath, out);

  return {
    file,
    webpPath,
    originalSize,
    newSize: out.length,
    saved: originalSize - out.length,
  };
}

async function main() {
  console.log(`\nConverting images in ${ASSETS_DIR} to WebP\n`);

  const results = [];
  for await (const file of walk(ASSETS_DIR)) {
    const rel = relative(ASSETS_DIR, file);
    process.stdout.write(`  ${rel} ... `);
    try {
      const r = await convertOne(file);
      if (r.skipped) {
        console.log("already converted");
        continue;
      }
      const pct = ((r.saved / r.originalSize) * 100).toFixed(1);
      console.log(`${fmt(r.originalSize)} -> ${fmt(r.newSize)} (-${pct}%)`);
      results.push(r);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  if (results.length === 0) {
    console.log("\nNo conversions performed.");
    return;
  }

  const totalOriginal = results.reduce((s, r) => s + r.originalSize, 0);
  const totalNew = results.reduce((s, r) => s + r.newSize, 0);
  const totalSaved = totalOriginal - totalNew;

  console.log("\n=== Summary ===");
  console.log(`Converted:  ${results.length} files`);
  console.log(`Before:     ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`After:      ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `Saved:      ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${(
      (totalSaved / totalOriginal) *
      100
    ).toFixed(1)}%)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
