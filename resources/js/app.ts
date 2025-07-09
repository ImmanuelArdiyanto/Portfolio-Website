import './bootstrap.js';
import '../css/app.css';

import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';


import { createI18n } from 'vue-i18n';
import enTranslations from './components/json/en.json'; 
import idTranslations from './components/json/id.json'; 


const messages = {
  en: enTranslations,
  id: idTranslations,
};


const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en', 
  fallbackLocale: 'en',
  messages,            
  legacy: false,        
});

createInertiaApp({
    title: (title) => `${title} - Immanuel Ardiyanto`,

   
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),

    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n); 

        app.mount(el);
    },

   
    progress: {
        color: '#A855F7', 
    },
});
