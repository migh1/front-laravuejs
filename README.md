# social

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
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
