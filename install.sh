#!/usr/bin/env bash

PROJECT_DIR=$PWD/html/

if [[ -d ${PROJECT_DIR} ]]; then
    read -p "Project dir is already exists. Do you really want to delete the project dir (y/n) " -n 1 -r

    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1;
    fi

    echo -en "\n";
    echo "cleaning..."
    rm -rf ${PROJECT_DIR}
    echo "cleaning done!"
fi

mkdir -p ${PROJECT_DIR} \
    && cd ${PROJECT_DIR} \
    && composer create-project laravel/laravel . \
    && cd - \
    && docker-compose down \
    && docker-compose up -d \
    && echo "Your project is installed"
