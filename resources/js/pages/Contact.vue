<template>
  <Head :title="t('navbar.contact')" />
<div class="w-full text-white container mx-auto px-4 py-8 md:py-16" >
            <h2 class="text-4xl md:text-5xl md:pl-32 font-bold">{{ t('contact.title') }}</h2>

            <hr class="w-full lg:w-3/5 mx-auto lg:mx-0 my-6 border-t border-purple-500/40"/>
  <div class="flex flex-col lg:flex-row w-full min-h-[70vh] text-white bg-black p-2 md:p-8">

    <div class="w-full lg:w-5/6 lg:pr-8 mb-16 lg:mb-0">
      <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row h-full items-start gap-8">
        <div class="flex-grow w-full sm:w-2/3 space-y-8">
          <div v-if="submissionSuccess" class="p-3 text-sm text-green-400 bg-gray-800 rounded-lg border border-green-500">
            {{ t('contact.success') }}
          </div>
          <div v-if="submissionError" class="p-3 text-sm text-red-400 bg-gray-800 rounded-lg border border-red-500">
            {{ t('contact.failed') }}
          </div>

          <div>
            <label for="name" class="block mb-2 text-base font-medium text-gray-400"> {{ t('contact.name') }} </label>
            <input v-model="formData.name" type="text" id="name" name="name" class="bg-transparent border-b-2 border-gray-600 text-white text-lg focus:border-purple-500 focus:ring-0 block w-full p-2.5" :placeholder="t('contact.nameform')" required>
          </div>

          <div>
            <label for="email" class="block mb-2 text-base font-medium text-gray-400">{{ t('contact.email') }}</label>
            <input v-model="formData.email" type="email" id="email" name="email" class="bg-transparent border-b-2 border-gray-600 text-white text-lg focus:border-purple-500 focus:ring-0 block w-full p-2.5" :placeholder="t('contact.emailform')" required>
          </div>
          
          <div>
            <label for="phone" class="block mb-2 text-base font-medium text-gray-400">{{ t('contact.phone') }}</label>
            <input v-model="formData.phone" type="tel" id="phone" name="phone" class="bg-transparent border-b-2 border-gray-600 text-white text-lg focus:border-purple-500 focus:ring-0 block w-full p-2.5" placeholder="+62 812-3456-7890" required>
          </div>

          <div>
            <label for="message" class="block mb-2 text-base font-medium text-gray-400">{{ t('contact.message') }}</label>
            <textarea v-model="formData.message" id="message" name="message" rows="3" class="bg-transparent border-b-2 border-gray-600 text-white text-lg focus:border-purple-500 focus:ring-0 block w-full p-2.5" :placeholder="t('contact.messageform')"></textarea>
          </div>
        </div>
        
        <div class="w-full sm:w-1/4 flex justify-center items-start sm:items-center h-full pt-8 sm:pt-16">
          <button @mousemove="handleMouseMove" @mouseleave="handleMouseLeave"
            type="submit" 
            :disabled="submitting"
            class="flex items-center justify-center w-32 text-xl h-32 md:w-40 md:h-40 bg-purple-700/80 rounded-full transition-transform duration-200 ease-out" 
          >
            <span v-if="!submitting">{{ t('contact.send') }}</span>
            <svg v-if="submitting" class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          </button>
        </div>
      </form>
    </div>

    <div class="w-full lg:w-1/3 lg:pl-8 lg:border-l border-purple-500/40">
        <div class="flex flex-col h-full justify-center gap-y-30 text-left">
          <div>
            <h3 class="text-xl md:text-3xl text-left font-semibold border-b border-purple-500/40 text-gray-300 mb-4">{{ t('contact.contact') }}</h3>
              <a class="nav-item-fill-text text-xl transition-transform duration-200 ease-out">
                Indonesia, Tangerang  
              </a>   
          </div>
          <div>
            <h3 class="text-xl md:text-3xl font-semibold text-left border-b border-purple-500/40 text-gray-300 mb-6">{{ t('contact.find') }}</h3>
            <div class="flex flex-row gap-8 items-center justify-center md:justify-start lg:items-start">
              <a href="https://github.com/ImmanuelArdiyanto" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" target="_blank" rel="noopener noreferrer" class="magnetic-item">
                <img src="images/github.svg" width="40" class="filter-white">
              </a>
              <a href="https://www.linkedin.com/in/immanuel-ardiyanto-994a5b1a8/"@mousemove="handleMouseMove" @mouseleave="handleMouseLeave" target="_blank" rel="noopener noreferrer" class="magnetic-item ">
                <img src="images/linkedin.svg" width="40"class="filter-white">
              </a>
              <a href="https://www.instagram.com/immnuel.ard/"@mousemove="handleMouseMove" @mouseleave="handleMouseLeave" target="_blank" rel="noopener noreferrer" class="magnetic-item ">
                <img src="images/instagram.svg" width="40"class="filter-white">
              </a>
            </div>
          </div>

        </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import AppLayout from '@/components/ui/AppLayout.vue';
import { Head } from '@inertiajs/vue3'; 

defineOptions({ layout: AppLayout });

const { t } = useI18n();


// 2. Perbaiki properti di sini dari 'number' menjadi 'phone'
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const submitting = ref(false);
const submissionSuccess = ref(false);
const submissionError = ref(false);

const handleSubmit = async () => {
  submitting.value = true;
  submissionError.value = false;
  submissionSuccess.value = false;

  try {
    const response = await fetch('https://formspree.io/f/xdkzpgkl', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify(formData.value)
    });

    if (response.ok) {
      submissionSuccess.value = true;
      formData.value = { name: '', email: '', phone: '', message: '' }; // Reset form
    } else {
      throw new Error('Server response was not ok.');
    }
  } catch (error) {
    console.error('Submit error:', error);
    submissionError.value = true;
  } finally {
    submitting.value = false;
  }
};

// 3. Sederhanakan fungsi-fungsi ini
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
input, textarea {
  background-color: transparent; /* Pastikan background transparan */
}
input:focus, textarea:focus {
  outline: none;
  box-shadow: none;
}
.nav-item-fill-text {
    position: relative;
    color: transparent; /* Awalnya teksnya transparan */
    background: linear-gradient(to top, #a788f5 50%, white 50%); /* Gradient untuk mengisi dari bawah */
    background-size: 100% 200%; /* Ukuran background agar gradient bisa bergerak */
    background-position: 0 0; /* Posisi awal background (putih di atas, biru di bawah) */

    /* Ini adalah properti kunci untuk mengisi teks */
    -webkit-background-clip: text; /* Untuk kompatibilitas browser berbasis WebKit */
    background-clip: text;

    transition: background-position 1s ease; /* Animasi perpindahan background */
    text-decoration: none; /* Menghilangkan underline default */
    font-weight: 500; /* Atau sesuai keinginan */
}

.nav-item-fill-text:hover {
    background-position: 0 100%; /* Saat hover, background bergerak ke atas, mengisi teks dengan biru */
}
</style>
