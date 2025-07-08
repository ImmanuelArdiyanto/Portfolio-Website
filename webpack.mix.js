const mix = require('laravel-mix');

// 1. Kompilasi JavaScript utama
mix.js('resources/js/app.js', 'public/js')
   // Pisahkan library vendor (seperti Vue, Axios) ke file terpisah
   .extract(['vue', 'axios']);

// 2. Kompilasi file SASS
mix.sass('resources/scss/app.scss', 'public/css');

// 3. Kompilasi JavaScript untuk halaman admin secara terpisah
mix.js('resources/js/admin.js', 'public/js/admin');

// 4. Salin direktori gambar
mix.copyDirectory('resources/images', 'public/images');

// 5. Hanya aktifkan versioning jika sedang dalam mode production (`npm run prod`)
if (mix.inProduction()) {
    mix.version();
}

// 6. Aktifkan BrowserSync untuk auto-reload saat development
mix.browserSync('my-project.test'); // Ganti dengan URL development lokal Anda