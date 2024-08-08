#!/bin/bash

# API
docker login registry.zapperbot.com
docker build -f docker/api.dockerfile -t registry.zapperbot.com/zapperbot/api:latest .
docker push registry.zapperbot.com/zapperbot/api:latest

# WEB
docker login registry.zapperbot.com
docker build -f docker/web.dockerfile -t registry.zapperbot.com/zapperbot/web:latest .
docker push registry.zapperbot.com/zapperbot/web:latest

# Deploy stack
set -a; . ./.env; set +a
export $(grep -v '^#' .env | xargs) && docker stack config -c docker-compose.yml > temp.yml
docker stack deploy -c temp.yml zapperbot --with-registry-auth
rm -rf temp.yml
