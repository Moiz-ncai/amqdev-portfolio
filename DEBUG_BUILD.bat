@echo off
echo ===================================
echo DEBUG BUILD - CHECK WHAT'S ACTUALLY BUILT
echo ===================================
echo.

echo [1/4] Building...
npm run build

echo [2/4] Checking for MarkIT data in built JS...
echo.
echo Searching for "MarkIT is a revolutionary"...
findstr /C:"MarkIT is a revolutionary" dist\assets\*.js
if errorlevel 1 (
    echo NOT FOUND! The data is not in the build.
    echo.
    echo Searching for "Project Details Coming Soon"...
    findstr /C:"Project Details Coming Soon" dist\assets\*.js
    if errorlevel 1 (
        echo Also not found. Checking for any MarkIT reference...
        findstr /C:"markit" dist\assets\*.js
    )
) else (
    echo FOUND! The data IS in the build.
)

echo.
echo [3/4] Checking source data file...
echo.
echo Searching in src/data/projects.ts...
findstr /C:"MarkIT is a revolutionary" src\data\projects.ts
if errorlevel 1 (
    echo NOT FOUND in source! Data file is missing the content.
) else (
    echo FOUND in source! Data file has the content.
)

echo.
echo [4/4] Checking ProjectDetails.tsx...
echo.
echo Searching for "id !== 'markit'"...
findstr /C:"id !== 'markit'" src\pages\ProjectDetails.tsx
if errorlevel 1 (
    echo NOT FOUND! The fix is not applied.
) else (
    echo FOUND! The fix is applied.
)

echo.
echo ===================================
echo DEBUG COMPLETE
echo ===================================
pause
