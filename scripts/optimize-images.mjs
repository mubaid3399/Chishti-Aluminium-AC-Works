// =====================================================================
// Aggressive image optimizer for src/assets/
// - Resizes anything wider than MAX_WIDTH down to MAX_WIDTH
// - Re-encodes JPEG with mozjpeg (q=78)
// - Re-encodes PNG with palette quantization (q=80)
// - Strips EXIF metadata
// - Replaces in-place ONLY if the new file is smaller
// - Backs up originals to src/assets/_original-images/<relative-path>
// =====================================================================

import sharp from "sharp";
import { readdir, stat, mkdir, copyFile, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, relative, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "src", "assets");
const BACKUP_DIR = join(ASSETS_DIR, "_original-images");
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 78;
const PNG_QUALITY = 80;

// Skip these folders entirely
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

function fmtBytes(n) {
  return (n / 1024).toFixed(1) + " KB";
}

async function ensureBackup(srcPath, originalBuffer) {
  const rel = relative(ASSETS_DIR, srcPath);
  const backupPath = join(BACKUP_DIR, rel);
  if (existsSync(backupPath)) return; // already backed up
  await mkdir(dirname(backupPath), { recursive: true });
  await writeFile(backupPath, originalBuffer);
}

async function optimizeOne(file) {
  const ext = extname(file).toLowerCase();
  const original = await readFile(file);
  const originalSize = original.length;

  let pipeline = sharp(original, { failOn: "none" }).rotate(); // auto-rotate from EXIF then strip metadata
  const meta = await sharp(original).metadata();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
      progressive: true,
    });
  } else if (ext === ".png") {
    pipeline = pipeline.png({
      quality: PNG_QUALITY,
      compressionLevel: 9,
      palette: true,
    });
  } else {
    return null;
  }

  const optimized = await pipeline.toBuffer();

  if (optimized.length >= originalSize) {
    return {
      file,
      originalSize,
      newSize: originalSize,
      saved: 0,
      skipped: true,
    };
  }

  await ensureBackup(file, original);
  await writeFile(file, optimized);

  return {
    file,
    originalSize,
    newSize: optimized.length,
    saved: originalSize - optimized.length,
    skipped: false,
  };
}

async function main() {
  console.log(`\nOptimizing images in ${ASSETS_DIR}\n`);

  const results = [];
  for await (const file of walk(ASSETS_DIR)) {
    process.stdout.write(`  ${relative(ASSETS_DIR, file)} ... `);
    try {
      const r = await optimizeOne(file);
      if (!r) {
        console.log("skipped (unsupported)");
        continue;
      }
      if (r.skipped) {
        console.log(`already optimal (${fmtBytes(r.originalSize)})`);
      } else {
        const pct = ((r.saved / r.originalSize) * 100).toFixed(1);
        console.log(
          `${fmtBytes(r.originalSize)} -> ${fmtBytes(r.newSize)} (-${pct}%)`
        );
      }
      results.push(r);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  const totalOriginal = results.reduce((s, r) => s + r.originalSize, 0);
  const totalNew = results.reduce((s, r) => s + r.newSize, 0);
  const totalSaved = totalOriginal - totalNew;

  console.log("\n=== Summary ===");
  console.log(`Files processed: ${results.length}`);
  console.log(`Before:          ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`After:           ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `Saved:           ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${(
      (totalSaved / totalOriginal) *
      100
    ).toFixed(1)}%)`
  );
  console.log(`\nOriginals backed up to: ${BACKUP_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
