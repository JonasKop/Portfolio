#!/bin/bash

export COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1

docker-compose up -d --build
