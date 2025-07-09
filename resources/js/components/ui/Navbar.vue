<template>
  <nav class="bg-black w-full text-white px-8 md:px-16 lg:px-40 py-5 flex justify-between items-center border-b border-white/60">
    
    <div class="text-lg font-semibold">
      <a 
        @mousemove="handleMouseMove" 
        @mouseleave="handleMouseLeave" 
        class="nav-brand-magnetic"
      >
        Immanuel Ardiyanto
    </a>
    </div>

    <div class="hidden md:flex items-center space-x-12">
      <Link href="/" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-link">
        {{ t("navbar.home") }}
      </Link>
      <Link href="/about" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-link">
        {{ t("navbar.about") }}      
      </Link>
      <Link href="/project" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-link">
        {{ t("navbar.projects") }}
      </Link>
      <Link href="/contact" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-link">
        {{ t("navbar.contact") }}
      </Link>
      <button 
        @click="toggleLanguage"
        class="border border-white/30 rounded-md px-3 py-1 text-sm font-semibold hover:bg-white/10 transition-colors"
      >
        {{ locale === 'en' ? 'EN' : 'ID' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';

const { t, locale } = useI18n();

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'id' : 'en';
  locale.value = newLocale;
  localStorage.setItem('language', newLocale);
};


const handleMouseMove = (event) => {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  const strength = 0.5;
  target.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
};

const handleMouseLeave = (event) => {
  const target = event.currentTarget;
  target.style.transform = 'translate(0,0)';
};
</script>

<style scoped>
.nav-link {
  position: relative;
  font-weight: 500; 
  text-decoration: none;
  padding-bottom: 5px;
  cursor: pointer;

  color: transparent;
  background: linear-gradient(to top, #a788f5 50%, white 50%);
  background-size: 100% 200%;
  background-position: 0 0;
  -webkit-background-clip: text;
  background-clip: text;

  transition: background-position 0.6s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-link:hover {
  background-position: 0 100%;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 6px;
  height: 6px;
  background-color: #a788f5;
  border-radius: 50%;
  transform: translateX(-50%) scale(0);
  transition: transform 0.5s ease;
}

.nav-link:hover::after {
  transform: translateX(-50%) scale(1);
}

.nav-brand-magnetic {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>