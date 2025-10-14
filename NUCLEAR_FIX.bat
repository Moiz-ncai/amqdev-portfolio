@echo off
echo ===================================
echo NUCLEAR FIX - BYPASS ALL CACHES
echo ===================================
echo.

echo [1/8] Force checkout main...
git checkout main
git pull origin main

echo [2/8] Delete ALL caches...
if exist dist rmdir /s /q dist
if exist .cache rmdir /s /q .cache
if exist node_modules\.vite rmdir /s /q node_modules\.vite
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo [3/8] Force delete gh-pages branch...
git push origin --delete gh-pages 2>nul
git branch -D gh-pages 2>nul

echo [4/8] Build with fresh cache...
npm run build

echo [5/8] Check if MarkIT data is in build...
findstr /C:"MarkIT is a revolutionary" dist\assets\*.js
if errorlevel 1 (
    echo ERROR: MarkIT data not found in build!
    echo This means the data file is not being imported correctly.
    pause
    exit /b 1
)

echo [6/8] Deploy to fresh gh-pages...
npx gh-pages -d dist --add

echo [7/8] Force push to ensure it's live...
git push origin gh-pages --force

echo [8/8] Done!
echo.
echo ===================================
echo NUCLEAR DEPLOYMENT COMPLETE!
echo ===================================
echo.
echo Wait 2 minutes, then visit:
echo https://amqdev.com/projects/markit?v=3
echo.
echo If still not working, the issue is in the source code.
echo.
pause
