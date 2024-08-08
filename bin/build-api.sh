#!/bin/bash

docker login registry.zapperbot.com
docker build -f docker/api.dockerfile -t registry.zapperbot.com/zapperbot/api:latest .
docker push registry.zapperbot.com/zapperbot/api:latest
set -a; . ./.env; set +a
docker service update zapperbot_api --with-registry-auth
