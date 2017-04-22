#!/usr/bin/env bash
set -e

if [ "$1" == "deploy" ]; then
    sudo $GSDK docker -- push $FRONTEND_TAG &&
    sudo $GSDK docker -- push $BACKEND_TAG &&
    sudo $GSDK docker -- push $NGINX_TAG &&
    sed -i "s#\"image\": \"backend\",#\"image\": \"${FRONTEND_TAG}\",#" kubernetes/deployment.json &&
    sed -i "s#\"image\": \"nginx\",#\"image\": \"${FRONTEND_TAG}\",#" kubernetes/deployment.json
fi