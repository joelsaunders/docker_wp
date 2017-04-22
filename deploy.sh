#!/usr/bin/env bash
set -e

if [ "$1" == "deploy" ]; then
    echo "Pushing images to gcloud registry"
    sudo $GSDK docker -- push $FRONTEND_TAG &&
    sudo $GSDK docker -- push $BACKEND_TAG &&
    sudo $GSDK docker -- push $NGINX_TAG &&
    echo "adding tags to kubectl"
    sed -i "s#\"image\": \"backend\",#\"image\": \"${BACKEND_TAG}\",#" kubernetes/deployment.json &&
    sed -i "s#\"image\": \"nginx\",#\"image\": \"${NGINX_TAG}\",#" kubernetes/deployment.json
    sudo kubectl apply -Rf kubernetes
fi