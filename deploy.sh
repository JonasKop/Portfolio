#!/bin/bash

export COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1

VERSION=0.0.1
TAG=portfolio

(cd server && docker build -t jonaskop/$TAG-server:$VERSION .)
(cd server && docker build -t jonaskop/$TAG-server .)
(cd client && docker build -t jonaskop/$TAG-client:$VERSION .)
(cd client && docker build -t jonaskop/$TAG-client .)

docker push jonaskop/$TAG-server:$VERSION
docker push jonaskop/$TAG-server
docker push jonaskop/$TAG-client:$VERSION
docker push jonaskop/$TAG-client
