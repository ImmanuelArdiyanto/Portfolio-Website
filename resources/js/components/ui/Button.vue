<template>
  <div>
    <!-- Tombol Menu -->
    <Transition name="slide-fade">
      <button
        v-if="showButton"
        @click="toggleMenu"
        :class="[
          'fixed bottom-[50px] right-[20px] z-[1001] p-[10px] text-white rounded-full cursor-pointer text-2xl shadow-md w-15 md:w-20 h-15 md:h-20 flex justify-center items-center transition-transform duration-300 ease-out',
          'bg-purple-700'
        ]"
        aria-label="Toggle menu"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        ☰
      </button>
    </Transition>

    <!-- 1. Latar belakang (overlay) sekarang juga dibungkus dengan Transition untuk efek fade -->
    <Transition name="fade">
      <div 
        v-if="isMenuOpen" 
        @click="toggleMenu" 
        class="fixed inset-0 bg-black/70 z-[998]"
        aria-hidden="true"
      ></div>
    </Transition>

    <!-- 2. Panel menu sekarang dibungkus dengan Transition untuk efek slide -->
    <Transition name="menu-slide">
      <div v-if="isMenuOpen" class="fixed top-0 right-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/4 h-screen bg-[#303030] z-[999] flex flex-col box-border rounded-l-xl">
        <div class="flex flex-col justify-between h-full text-white">
          
          <div class="pt-20 px-10">
            <button 
              @click="toggleLanguage"
              class="border border-white/30 rounded-md px-3 py-1 text-sm font-semibold hover:bg-white/10 transition-colors mb-3"
            >
              {{ locale === 'en' ? 'EN' : 'ID' }}
            </button>
            <hr class="border-t border-purple-500/30 mb-6" />
            <ul class="list-none p-0 m-0 space-y-4">
              <li>
                <Link href="/" @click="toggleMenu" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-item">
                  {{ t("navbar.home") }}
                </Link>
              </li>
              <li>
                <Link href="/about" @click="toggleMenu" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-item">
                  {{ t("navbar.about") }}
                </Link>
              </li>
              <li>
                <Link href="/project" @click="toggleMenu" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-item">
                  {{ t("navbar.projects") }}
                </Link>
              </li>
              <li>
                <Link href="/contact" @click="toggleMenu" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" class="nav-item">
                  {{ t("navbar.contact") }}
                </Link>
              </li>
            </ul>
          </div>
          
          <div class="relative px-10">
            <hr class="border-t border-purple-500/30 mb-35" />
            <p class="absolute bottom-[110px] font-semibold tracking-wider text-[18px]">
              Menu
            </p>
          </div>

        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';


const { t, locale } = useI18n();

const isMenuOpen = ref(false);
const showButton = ref(false);

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'id' : 'en';
  locale.value = newLocale;
  // Simpan pilihan bahasa ke localStorage agar tetap tersimpan
  localStorage.setItem('language', newLocale);
};


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  if (window.scrollY > 50) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

watch(isMenuOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

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
.nav-item {
  position: relative;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 3rem;
  padding: 5px 0;
  color: transparent;
  background: linear-gradient(to top, #a788f5 50%, white 50%);
  background-size: 100% 200%;
  background-position: 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-position 0.6s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-item:hover {
  background-position: 0 100%;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  width: 8px;
  height: 8px;
  background-color: #a788f5;
  border-radius: 50%;
  transform: translateY(-50%) scale(0);
  transition: transform 0.3s ease;
}

.nav-item:hover::after {
  transform: translateY(-50%) scale(1);
}

/* CSS untuk animasi tombol masuk */
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

/* 3. Tambahkan CSS untuk animasi panel menu */
.menu-slide-enter-from,
.menu-slide-leave-to {
  transform: translateX(100%); /* Mulai dari luar layar sebelah kanan */
}

.menu-slide-enter-active {
  transition: transform 0.4s ease-out;
}

.menu-slide-leave-active {
  transition: transform 0.3s ease-in;
}

/* 4. Tambahkan CSS untuk animasi fade overlay */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
</style>
