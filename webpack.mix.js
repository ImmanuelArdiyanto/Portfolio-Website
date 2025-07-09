const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .extract(['vue', 'axios']);

mix.sass('resources/scss/app.scss', 'public/css');

mix.js('resources/js/admin.js', 'public/js/admin');

mix.copyDirectory('resources/images', 'public/images');

if (mix.inProduction()) {
    mix.version();
}
mix.browserSync('my-project.test');