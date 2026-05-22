# =====================================================================
# Aggressive video compression for 9:16 mobile showcase reels
# Source:      src/assets/project/proj-vid-*.mp4 (originals)
# Output:      src/assets/project/proj-vid-*.mp4 (overwritten, backed up)
# Backup:      src/assets/project/_original-videos/
# Target size: ~2-5 MB per video (down from 66 MB / 27 MB / 6 MB)
# =====================================================================

$ErrorActionPreference = "Stop"

# --- 1. Locate or install ffmpeg -------------------------------------
$ffmpegCmd = $null

# Try PATH first
$onPath = Get-Command ffmpeg -ErrorAction SilentlyContinue
if ($onPath) {
    $ffmpegCmd = $onPath.Source
} else {
    # Try winget install location (PATH may not be refreshed in this shell)
    $wingetFfmpeg = Get-ChildItem -Path "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" `
                                   -Recurse -Filter "ffmpeg.exe" -ErrorAction SilentlyContinue |
                    Select-Object -First 1
    if ($wingetFfmpeg) {
        $ffmpegCmd = $wingetFfmpeg.FullName
    }
}

if (-not $ffmpegCmd) {
    Write-Host "ffmpeg not found. Installing via winget..." -ForegroundColor Yellow
    winget install --id=Gyan.FFmpeg -e --accept-source-agreements --accept-package-agreements

    # Try locating it post-install
    $wingetFfmpeg = Get-ChildItem -Path "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" `
                                   -Recurse -Filter "ffmpeg.exe" -ErrorAction SilentlyContinue |
                    Select-Object -First 1
    if ($wingetFfmpeg) {
        $ffmpegCmd = $wingetFfmpeg.FullName
    } else {
        Write-Host "Install completed but ffmpeg.exe could not be located. Close terminal and re-run." -ForegroundColor Red
        exit 1
    }
}

Write-Host "Using ffmpeg: $ffmpegCmd" -ForegroundColor DarkGray

# --- 2. Paths --------------------------------------------------------
$projectDir = Join-Path $PSScriptRoot "..\src\assets\project"
$backupDir  = Join-Path $projectDir "_original-videos"

if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
}

# --- 3. Compress each video ------------------------------------------
$videos = Get-ChildItem -Path $projectDir -Filter "proj-vid-*.mp4" -File |
          Where-Object { $_.DirectoryName -notlike "*_original-videos*" }

if ($videos.Count -eq 0) {
    Write-Host "No proj-vid-*.mp4 files found in $projectDir" -ForegroundColor Red
    exit 1
}

foreach ($v in $videos) {
    $name      = $v.Name
    $original  = $v.FullName
    $backup    = Join-Path $backupDir $name
    $tempOut   = Join-Path $projectDir ("_tmp_" + $name)

    # Backup original (only once)
    if (-not (Test-Path $backup)) {
        Write-Host "Backing up original: $name" -ForegroundColor Gray
        Copy-Item $original $backup
    } else {
        Write-Host "Backup already exists, skipping backup of: $name" -ForegroundColor DarkGray
    }

    Write-Host "`nCompressing $name ..." -ForegroundColor Green
    Write-Host "  Original size: $([math]::Round($v.Length/1MB, 2)) MB" -ForegroundColor Gray

    # Aggressive compression:
    #   - scale=540:-2     -> width 540px, height auto-even (good for 9:16 phone)
    #   - fps=30           -> cap framerate
    #   - libx264 CRF 30   -> aggressive quality (lower = better, 30 is aggressive)
    #   - preset slow      -> better compression ratio
    #   - aac 64k mono     -> small audio (raise to 96k stereo if needed)
    #   - +faststart       -> metadata at front so playback starts immediately
    #   - pix_fmt yuv420p  -> universal browser compatibility
    & "$ffmpegCmd" -hide_banner -loglevel error -stats `
        -i "$original" `
        -c:v libx264 -crf 30 -preset slow `
        -vf "scale=540:-2,fps=30" `
        -pix_fmt yuv420p `
        -c:a aac -b:a 64k -ac 1 `
        -movflags +faststart `
        -y "$tempOut"

    if ($LASTEXITCODE -ne 0) {
        Write-Host "  FAILED on $name" -ForegroundColor Red
        if (Test-Path $tempOut) { Remove-Item $tempOut }
        continue
    }

    # Replace original with compressed
    Move-Item -Force $tempOut $original

    $newSize = (Get-Item $original).Length
    Write-Host "  New size:      $([math]::Round($newSize/1MB, 2)) MB" -ForegroundColor Green
    Write-Host "  Saved:         $([math]::Round(($v.Length - $newSize)/1MB, 2)) MB" -ForegroundColor Yellow
}

Write-Host "`nDone. Originals backed up in: $backupDir" -ForegroundColor Cyan
Write-Host "If results are too blurry, edit the script and lower CRF (e.g. 26 or 24)." -ForegroundColor DarkGray
