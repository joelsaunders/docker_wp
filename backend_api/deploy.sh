#!/usr/bin/env bash
set -e

if [ "$2" == 'full' ]; then
echo "install requirements"
pip install -r requirements.txt
fi

echo "Write configs"
python ./docker_wp/configs/configurator.py $1
