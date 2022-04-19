rm -rf ./projects/ngx-selects/src/lib/
cp -a ./src/app/lib/. ./projects/ngx-selects/src/lib/
ng build ngx-selects
cd dist/ngx-selects
npm publish