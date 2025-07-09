<template>
  <Head :title="t('navbar.about')" />
  <div class="bg-black text-white min-h-screen w-full px-8 md:px-16 py-16">
    <div class="max-w-5xl mx-auto">

      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold ">
          {{ t('about.title') }} 
        </h1>

        <hr class="w-3/4 md:w-1/2 mx-auto my-6 border-t border-purple-500/40" />

        <p class="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed text-justify mb-70 my-10">
          {{ t('about.subtitle') }} 
        </p>
      </div>


      <div class="mt-20">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12">
          <span class="pb-2 border-b border-purple-500/60">
            Skills
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40 ">

          <div 
            v-for="category in skillCategories" 
            :key="category.name"
            class="block p-8 
            bg-[#101010] 
            border border-purple-500/40 
            rounded-2xl 
            transition-all duration-300 ease-in-out 
            hover:scale-[1.03] 
            hover:border-purple-500 
            hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ category.name }}
            </h3>

            <div class="flex flex-wrap gap-3">
              <span 
                v-for="skill in category.skills" 
                :key="skill"
                class="bg-gray-700 text-gray-200 py-1.5 px-4 rounded-full text-base font-medium"
              >
                {{ skill }}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  <Contactform/>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import AppLayout from '@/components/ui/AppLayout.vue';
import Contactform from '@/components/ui/Contactform.vue';
import { Head } from '@inertiajs/vue3'; 

defineOptions({ layout: AppLayout });

const { t } = useI18n();

// Data untuk bagian Skills.
const skillCategories = ref([
  {
    name: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
  },
  {
    name: 'Backend Development',
    skills: ['PHP', 'Laravel', 'MySQL', 'Java']
  },
  {
    name: 'AI & Machine Learning',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Keras']
  },
  {
    name: 'Software & Mobile Development',
    skills: ['Android Studio']
  },
  {
    name: 'Web 3',
    skills: ['Solidity']
  }
]);
</script>