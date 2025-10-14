@echo off
echo ===================================
echo FINAL DEPLOY - DIRECT DATA FIX
echo ===================================
echo.

echo [1/5] Cleaning dist...
if exist dist rmdir /s /q dist

echo [2/5] Building with direct data...
npm run build

echo [3/5] Verifying MarkIT data is in build...
findstr /C:"MarkIT is a revolutionary" dist\assets\*.js
if errorlevel 1 (
    echo ERROR: Data still not found in build!
    pause
    exit /b 1
) else (
    echo SUCCESS: MarkIT data found in build!
)

echo [4/5] Deploying...
npx gh-pages -d dist

echo [5/5] Done!
echo.
echo ===================================
echo DEPLOYMENT COMPLETE!
echo ===================================
echo.
echo Visit: https://amqdev.com/projects/markit?v=4
echo Wait 1 minute, then HARD REFRESH (Ctrl+Shift+R)
echo.
pause
