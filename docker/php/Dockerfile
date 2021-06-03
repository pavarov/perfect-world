FROM php:8.0.3-fpm-alpine3.13

MAINTAINER pawarow

RUN set -ex \
  && apk add --no-cache postgresql-dev composer tzdata zip libzip-dev \
  && docker-php-ext-install -j$(nproc) pdo pdo_pgsql zip