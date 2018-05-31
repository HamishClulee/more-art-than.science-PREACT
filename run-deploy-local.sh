#!/usr/bin/env bash
npx parcel build index.html
rm -R $PWD/server/public
mkdir $PWD/server/public
cp -a $PWD/dist/. $PWD/server/public
