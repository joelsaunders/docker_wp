#!/usr/bin/env bash
set -e

if [ "$2" == 'full' ]; then
echo "install requirements"
pip install -r requirements.txt
npm install
fi

echo "Write configs"
python docker_wp/configs/configurator.py $1


if [ "$1" == 'production' ]; then
    echo "building prod bundle"
    ./node_modules/.bin/webpack --config webpack.prod.config.js
else
    echo "building dev bundle"
    ./node_modules/.bin/webpack --config webpack.local.config.js
fi
