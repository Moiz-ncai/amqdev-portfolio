Write-Host "===================================" -ForegroundColor Cyan
Write-Host "NUCLEAR CLEAN DEPLOYMENT SCRIPT" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/8] Cleaning dist folder..." -ForegroundColor Yellow
if (Test-Path "dist") { Remove-Item -Recurse -Force "dist" }
if (Test-Path ".cache") { Remove-Item -Recurse -Force ".cache" }
if (Test-Path "node_modules\.vite") { Remove-Item -Recurse -Force "node_modules\.vite" }

Write-Host "[2/8] Building fresh..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "BUILD FAILED!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[3/8] Checking out main..." -ForegroundColor Yellow
git checkout main

Write-Host "[4/8] Deleting remote gh-pages branch..." -ForegroundColor Yellow
git push origin --delete gh-pages 2>$null

Write-Host "[5/8] Deleting local gh-pages branch..." -ForegroundColor Yellow
git branch -D gh-pages 2>$null

Write-Host "[6/8] Clearing gh-pages cache..." -ForegroundColor Yellow
if (Test-Path "node_modules\.cache\gh-pages") { 
    Remove-Item -Recurse -Force "node_modules\.cache\gh-pages" 
}

Write-Host "[7/8] Deploying to gh-pages (FRESH)..." -ForegroundColor Yellow
npx gh-pages -d dist --add
if ($LASTEXITCODE -ne 0) {
    Write-Host "DEPLOYMENT FAILED!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "[8/8] Done!" -ForegroundColor Yellow
Write-Host ""
Write-Host "===================================" -ForegroundColor Green
Write-Host "DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Green
Write-Host ""
Write-Host "Visit https://amqdev.com/projects/markit" -ForegroundColor Cyan
Write-Host "Wait 1-2 minutes, then HARD REFRESH (Ctrl+Shift+R)" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to exit"

