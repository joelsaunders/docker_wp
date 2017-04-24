#!/usr/bin/env bash
set -e

# Also set up tags here for local building, should be the same as env vars exported in circle.yml
export COMMIT=`git rev-parse HEAD`
export BASE_TAG="eu.gcr.io/beaming-might-163819"

export FRONTEND_TAG=$BASE_TAG/frontend:$COMMIT
export BACKEND_TAG=$BASE_TAG/backend:$COMMIT
export NGINX_TAG=$BASE_TAG/nginx:$COMMIT

echo "building frontend image"
docker build -t $FRONTEND_TAG ./frontend
rm -rf nginx/www
mkdir -p nginx/www/src
cp -a frontend/src/style nginx/www/src
cp -a frontend/index.html nginx/www
docker run --entrypoint cat --rm $FRONTEND_TAG /code/dist/bundle.js > nginx/www/bundle.js
echo "frontend build finished"
echo "$FRONTEND_TAG"

echo "building backend image"
docker build -t $BACKEND_TAG -q ./backend_api
export id=$(sudo docker run -d $BACKEND_TAG)
mkdir -p nginx/www/static
sudo docker cp $id:/code/docker_wp/static nginx/www/
# sudo mv nginx/www/staticfiles nginx/www/static
sudo docker stop $id
echo "finished building backend image"
echo "$BACKEND_TAG"

echo "building nginx image"
docker build -t $NGINX_TAG -q ./nginx
echo "finished building nginx image"
echo "$NGINX_TAG"
