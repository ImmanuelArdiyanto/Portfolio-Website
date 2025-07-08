// resources/js/app.ts

// 1. Import dependensi dasar dan styling
import './bootstrap.js';
import '../css/app.css';

// 2. Import dependensi Vue dan Inertia
import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// 3. Import dependensi untuk i18n (terjemahan)
import { createI18n } from 'vue-i18n';
import enTranslations from './components/json/en.json'; // Mengimpor file terjemahan Bahasa Inggris
import idTranslations from './components/json/id.json'; // Mengimpor file terjemahan Bahasa Indonesia

// 4. Siapkan data terjemahan untuk i18n
const messages = {
  en: enTranslations,
  id: idTranslations,
};

// 5. Buat instance i18n untuk digunakan di seluruh aplikasi
const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en', // Ambil bahasa dari penyimpanan lokal atau default ke 'en'
  fallbackLocale: 'en', // Jika bahasa tidak ditemukan, gunakan 'en'
  messages,              // Gunakan data terjemahan yang sudah diimpor
  legacy: false,         // Gunakan Composition API mode
});

// 6. Dapatkan nama aplikasi dari environment variable
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// 7. Inisialisasi aplikasi Inertia (HANYA SEKALI)
createInertiaApp({
    title: (title) => `${title} - Immanuel Ardiyanto`,

    // Fungsi untuk me-resolve komponen halaman Vue secara dinamis
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),

    // Fungsi setup yang dijalankan saat aplikasi dibuat
    setup({ el, App, props, plugin }) {
        // Buat aplikasi Vue, lalu pasang plugin Inertia dan i18n
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n); // <-- Menggunakan instance i18n yang sudah dibuat

        // Pasang aplikasi ke elemen HTML
        app.mount(el);
    },

    // Konfigurasi progress bar saat navigasi halaman
    progress: {
        color: '#A855F7', // Warna ungu yang cocok dengan tema Anda
    },
});
