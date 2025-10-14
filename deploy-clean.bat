@echo off
echo ===================================
echo NUCLEAR CLEAN DEPLOYMENT SCRIPT
echo ===================================
echo.

echo [1/8] Cleaning dist folder...
if exist dist rmdir /s /q dist
if exist .cache rmdir /s /q .cache
if exist node_modules\.vite rmdir /s /q node_modules\.vite

echo [2/8] Building fresh...
call npm run build
if errorlevel 1 (
    echo BUILD FAILED!
    pause
    exit /b 1
)

echo [3/8] Checking out main...
git checkout main

echo [4/8] Deleting remote gh-pages branch...
git push origin --delete gh-pages

echo [5/8] Deleting local gh-pages branch...
git branch -D gh-pages

echo [6/8] Clearing gh-pages cache...
if exist node_modules\.cache\gh-pages rmdir /s /q node_modules\.cache\gh-pages

echo [7/8] Deploying to gh-pages (FRESH)...
npx gh-pages -d dist --add
if errorlevel 1 (
    echo DEPLOYMENT FAILED!
    pause
    exit /b 1
)

echo [8/8] Done!
echo.
echo ===================================
echo DEPLOYMENT COMPLETE!
echo ===================================
echo.
echo Visit https://amqdev.com/projects/markit
echo Wait 1-2 minutes, then HARD REFRESH (Ctrl+Shift+R)
echo.
pause

