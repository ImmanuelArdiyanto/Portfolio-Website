<template>
  <footer class="w-full h-screen bg-black text-white flex flex-col">
    
    <div class="h-[80%] flex flex-col md:flex-row gap-12 md:gap-90 justify-center items-center p-8">
      <h2 class="flex flex-col gap-5 items-center md:items-start text-4xl md:text-6xl font-bold text-left">
        <a>{{ t('contactform.line1') }}</a>
        <a>{{ t("contactform.line2") }}</a>
      </h2>

    <Link href="/contact" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" 
      class="magnetic-item flex justify-center items-center bg-purple-700/80 rounded-full font-bold transition-transform duration-200 ease-out w-32 h-32 text-lg md:w-40 md:h-40 md:text-xl ">
    {{ t('contactform.button') }}
  </Link>
</div>

    <div class="h-[20%] relative flex flex-col justify-center items-center p-8">
      <div class="absolute top-0 left-0 w-full h-px bg-white/60"></div>
      
      <p class="text-[12px] font-bold text-white tracking-[0.2em] uppercase mb-4">
        Social
      </p>

      <div class="flex gap-x-20">
        <a href="https://github.com/ImmanuelArdiyanto" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" target="_blank" rel="noopener noreferrer" class="magnetic-item ">
          <img src="images/github.svg" width="40"class="filter-white">
        </a>
        <a href="https://www.linkedin.com/in/immanuel-ardiyanto-994a5b1a8/"@mousemove="handleMouseMove" @mouseleave="handleMouseLeave" target="_blank" rel="noopener noreferrer" class="magnetic-item  ">
          <img src="images/linkedin.svg" width="40"class="filter-white">
        </a>
        <a href="https://www.instagram.com/immnuel.ard/"@mousemove="handleMouseMove" @mouseleave="handleMouseLeave" target="_blank" rel="noopener noreferrer" class="magnetic-item  ">
          <img src="images/instagram.svg" width="40"class="filter-white">
        </a>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Link } from '@inertiajs/vue3';


const { t, locale } = useI18n();
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
.magnetic-item {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>