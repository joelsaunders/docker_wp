#!/usr/bin/env bash
set -e

export commit=`git rev-parse --short HEAD`

export version=`cat frontend/version.txt`

export tag="eu.gcr.io/beaming-might-163819/frontend-$version-$commit"

docker build -t $tag -q ./frontend

rm -rf nginx/www

mkdir -p nginx/www/src

cp -a frontend/src/style nginx/www/src
cp -a frontend/index.html nginx/www

docker run --entrypoint cat --rm $tag /code/dist/bundle.js > nginx/www/bundle.js

echo "build finished"
echo "$tag"