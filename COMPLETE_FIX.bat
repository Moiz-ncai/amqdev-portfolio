@echo off
echo ===================================
echo COMPLETE FIX - SPA ROUTING + DATA
echo ===================================
echo.

echo [1/6] Cleaning dist...
if exist dist rmdir /s /q dist

echo [2/6] Building with SPA routing fix...
npm run build

echo [3/6] Verifying MarkIT data is in build...
findstr /C:"MarkIT is a revolutionary" dist\assets\*.js
if errorlevel 1 (
    echo ERROR: Data not found in build!
    pause
    exit /b 1
) else (
    echo SUCCESS: MarkIT data found!
)

echo [4/6] Verifying 404.html exists...
if exist dist\404.html (
    echo SUCCESS: 404.html found!
) else (
    echo ERROR: 404.html not found!
    pause
    exit /b 1
)

echo [5/6] Deploying to GitHub Pages...
npx gh-pages -d dist

echo [6/6] Done!
echo.
echo ===================================
echo DEPLOYMENT COMPLETE!
echo ===================================
echo.
echo Now you can visit DIRECTLY:
echo https://amqdev.com/projects/markit
echo.
echo Wait 1-2 minutes, then visit the URL above.
echo It should now work without 404 error!
echo.
pause

