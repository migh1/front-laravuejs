# http://api-laravuejs.herokuapp.com
# http://app-laravuejs.herokuapp.com

# Laravel-Vuejs

# Tuto de LaraVuejs
## VueJs
1) npm install -g vue-cli
2) vue init webpack nome_projeto
3) npm install
3.1) npm install axios --save
3.2) import axios from 'axios'
3.3) axios.post(url_api, {
    body: this.postBody
    })
    .then(response => {})
    .catch(e => {
        this.errors.push(e)
    })
    https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related
4) npm start
5) server.js
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__ dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});
npm install express --save

What I notice is that in webpack.dev.conf.js in plugins section there wasn't any plugin added, so what I did was import ExtractTextPlugin in webpack.dev.conf.js and then added in plugins sections like it is added in webpack.prod.conf.js. :

const ExtractTextPlugin = require("extract-text-webpack-plugin");

//...
plugins: [
//...,
new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // set the following option to `true` if you want to extract CSS from
      // codesplit chunks into this main css file as well.
      // This will result in *all* of your app's CSS being loaded upfront.
      allChunks: false,
    }),
//...
]

//....

5) "start": "npm run dev" to  "start": "node server.js",
6) change axios routes

############# importante #################
https://router.vuejs.org/guide/essentials/history-mode.html

##Laravel
1) composer create-project --prefer-dist laravel/laravel webservice "5.6"
2) //composer require paragonie/random_compat:2.*
3) composer require laravel/passport //"4.0"
4) arrumar banco
5) php artisan migrate
6) php artisan passport:install
7) app/User.php => use Laravel\\Passport\\HasApiTokens;use HasApiTokens, Notifiable;
8) config/auth =>
                'api' => [
                    'driver' => 'passport',
                    'provider' => 'users',
                ],
9) php artisan serve
10) php artisan make:migration add_image_table_users --table=users
11) php artisan migration
12) composer require barryvdh/laravel-cors, Http/Kernel.php
13) php artisan vendor:publish --provider="Barryvdh\Cors\ServiceProvider"

14)
One thing before you pressed the Deploy Branch button, we’ll need to add additional Heroku config which is called Procfile and one adjustment for the post-install-cmd script on our Laravel composer package file. This naturally tells Heroku what type of web application we are building, so it can fetch the dependencies for us.

Add the following settings and save it as Procfile without any extensions on the root level of the Laravel application and the following script in the scripts section of your composer.json file. This will ensure the public folder is accessible by everyone.

web: vendor/bin/heroku-php-apache2 public/
"post-install-cmd": [
     "php artisan clear-compiled",
     "chmod -R 777 public/"
 ]

 15) git add -f database/database.sqlite
