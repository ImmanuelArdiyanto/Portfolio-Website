<?php
// routes/web.php

use Inertia\Inertia;

// Hapus atau komentari rute default lama jika ada
// Route::get('/', function () {
//     return view('welcome');
// });

// Tambahkan rute Inertia baru
Route::get('/', function () {
    return Inertia::render('Index'); // Merender resources/js/Pages/Index.vue
});

Route::get('/about', function () {
    return Inertia::render('About'); // Merender resources/js/Pages/About.vue
});

Route::get('/project', function () {
    return Inertia::render('Project'); // Merender resources/js/Pages/Project.vue
});

Route::get('/contact', function () {
    return Inertia::render('Contact'); // Merender resources/js/Pages/Contact.vue
});
