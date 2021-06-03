#!/usr/bin/env bash

RED="\e[31m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"

echo -en "${GREEN}Create new remote repo:${ENDCOLOR}\n"

read -p "Github repo_name: " repo_name
read -p "Your github token (see how to: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token): " token
read -p "Is_private repo (y/n): " is_private

bool_is_private=false;

if [[ ${is_private} =~ ^[Yy]$ ]]; then
    bool_is_private=true;
fi

echo

echo -en 'So you want to create a new private("'${GREEN}${bool_is_private}${ENDCOLOR}'") repository with called "'${GREEN}${repo_name}${ENDCOLOR}'", your token is: "'${GREEN}${token}${ENDCOLOR}'"\n'

echo -en 'Your request to create repository on Github is: \n'${GREEN}"curl -su "empty-login:${token}" https://api.github.com/user/repos -d '{\"name\": \"${repo_name}\", \"private\": '${bool_is_private}}${ENDCOLOR}" '\n\n'

read -p 'Do you agree (y/n): ' agree

if [[ ! ${agree} =~ ^[Yy]$ ]]; then
    echo -en ${RED}'You refused to create a repository\n'${ENDCOLOR}
    exit 0;
fi

request=$(curl -su "empty-login:${token}" https://api.github.com/user/repos -d '{"name": "'${repo_name}'", "private": '${bool_is_private}});

echo ${request} | ./json_pretty.sh;