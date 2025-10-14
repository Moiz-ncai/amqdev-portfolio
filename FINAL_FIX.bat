@echo off
echo ===================================
echo FINAL FIX - REMOVED COMMENTED CODE
echo ===================================
echo.

echo [1/4] Cleaning dist...
if exist dist rmdir /s /q dist

echo [2/4] Building fresh...
npm run build

echo [3/4] Deploying...
npx gh-pages -d dist

echo [4/4] Done!
echo.
echo ===================================
echo CHECK THE SITE NOW!
echo ===================================
echo.
echo Visit: https://amqdev.com/projects/markit
echo Wait 1 minute, then HARD REFRESH (Ctrl+Shift+R)
echo.
pause
