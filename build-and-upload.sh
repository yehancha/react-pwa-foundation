npm run build
zip mashtapp.zip -r build
scp mashtapp.zip mashtapp:~
rm -rf build mashtapp.zip
