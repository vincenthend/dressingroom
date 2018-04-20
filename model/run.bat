@ECHO OFF
ECHO Extracting Files
for /F "delims=" %%i in ('dir /ad /on /b /s') do (
    pushd %%i
	unzip model.zip
    popd
)