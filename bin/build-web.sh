#!/bin/bash

docker login registry.zapperbot.com
docker build -f docker/web.dockerfile -t registry.zapperbot.com/zapperbot/web:latest .
docker push registry.zapperbot.com/zapperbot/web:latest
set -a; . ./.env; set +a
docker service update zapperbot_web --with-registry-auth
