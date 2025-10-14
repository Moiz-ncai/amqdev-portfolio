@echo off
echo ======================================
echo ULTIMATE TEST AND DEPLOY
echo ======================================
echo.

echo [Step 1] Commit current changes...
git add .
git commit -m "Add direct MarkIT data and SPA routing fix"
git push origin main

echo.
echo [Step 2] Clean everything...
if exist dist rmdir /s /q dist
if exist .cache rmdir /s /q .cache
if exist node_modules\.vite rmdir /s /q node_modules\.vite

echo.
echo [Step 3] Build...
call npm run build

echo.
echo [Step 4] Test the built file...
echo Searching for overview data in built JS...
findstr /C:"overview" dist\assets\*.js | findstr /C:"MarkIT"
if errorlevel 1 (
    echo.
    echo ===== BUILD TEST FAILED =====
    echo The overview field is NOT in the build!
    echo.
    echo Checking what IS in the build for markit...
    findstr /C:"markit" dist\assets\*.js
    echo.
    pause
    exit /b 1
) else (
    echo.
    echo ===== BUILD TEST PASSED =====
    echo The overview field IS in the build!
)

echo.
echo [Step 5] Deploy...
npx gh-pages -d dist

echo.
echo [Step 6] Verify deployment...
git checkout gh-pages
echo Current branch:
git branch
echo.
echo Checking deployed JS file...
findstr /C:"overview" assets\*.js | findstr /C:"MarkIT"
if errorlevel 1 (
    echo.
    echo ===== DEPLOYMENT VERIFICATION FAILED =====
    echo The data is NOT in the deployed files!
    pause
) else (
    echo.
    echo ===== DEPLOYMENT VERIFICATION PASSED =====
    echo The data IS in the deployed files!
)

git checkout main

echo.
echo ======================================
echo DONE!
echo ======================================
echo.
echo Visit: https://amqdev.com/projects/markit
echo Wait 2 minutes, clear cache, refresh
echo.
pause

