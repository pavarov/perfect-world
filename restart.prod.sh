#!/usr/bin/env bash
docker container rm -f acp_react | \
docker-compose down && \
docker image rm -f active-people_react && \
docker-compose -f docker-compose.prod.yaml up -d --build