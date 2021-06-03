#!/usr/bin/env bash

#don't forget add Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class to config/app.php:providers

#add into composer.json scripts
# "post-update-cmd": [
#            "Illuminate\\Foundation\\ComposerScripts::postUpdate",
#            "@php artisan ide-helper:generate",
#            "@php artisan ide-helper:meta"
#        ]


cd $PWD/html \
&& composer require --dev barryvdh/laravel-ide-helper \
&& php artisan ide-helper:eloquent \
&& echo -en "_ide_helper.php\n.phpstorm.meta.php" >> ./.gitignore \
#&& php artisan ide-helper:models #optional. after successfully set env variables into .env file and migrations done