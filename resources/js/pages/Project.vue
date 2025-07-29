<template>
  <Head :title="t('navbar.projects')" />
    <div class="w-full text-white container mx-auto px-4 py-8 md:py-16" >
        <div class="max-w-5xl mx-auto">

      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold ">
          {{ t('project.title') }}
        </h1>

        <hr class="w-3/4 md:w-1/2 mx-auto my-6 border-t border-purple-500/40" />
        </div>
    </div>
    <div class="w-full min-h-screen bg-black text-white px-8 sm:px-12 md:px-32 py-16">
    
    <div class="max-w-4xl mx-auto">
      <div class="space-y-6">

        <a 
          v-for="project in projects" 
          :key="project.id"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="
            block p-8 
            bg-[#101010] 
            border border-purple-500/40 
            rounded-2xl 
            transition-all duration-300 ease-in-out 
            hover:scale-[1.03] 
            hover:border-purple-500 
            hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
            cursor-pointer
          "
        >
          <div>
            <h3 class="text-2xl font-bold text-white">
              {{ project.title }}
            </h3>
            <p class="text-lg text-gray-400 mt-1">
              {{ t(project.subtitle) }}
            </p>
          </div>
          <div class="flex flex-wrap pt-3 gap-3">
              <span 
                v-for="skill in project.skills" 
                :key="skill"
                class="bg-gray-700 text-gray-200 py-1.5 px-4 rounded-full text-base font-medium"
              >
                {{ skill }}
              </span>
            </div>
        </a>

      </div>
    </div>
  </div>
</div>
<contactform/>
</template>
<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import AppLayout from '@/components/ui/AppLayout.vue';
import Contactform from '@/components/ui/Contactform.vue';
import { Head } from '@inertiajs/vue3'; 

defineOptions({ layout: AppLayout });


const { t } = useI18n();


const projects = ref([
  {
    id: 1,
    title: 'NFT Based Ticketing System',
    subtitle: 'project.project1',
    githubUrl: 'https://github.com/ImmanuelArdiyanto/NFT-Based-Ticketing-System',
    skills: ['Solidity, JavaScript'] 
  },
  {
    id: 2,
    title: 'Portfolio Website',
    subtitle: 'project.project2',
    githubUrl: 'https://github.com/ImmanuelArdiyanto/Portfolio-Website',
    skills: ['Vuejs', 'PHP', 'Laravel', 'TypeScript', 'JavaScript','Tailwind']
  },
  {
    id: 3,
    title: 'Attendance Management System',
    subtitle:  'project.project3',
    githubUrl: 'https://huggingface.co/spaces/Immanuel-1/Attendance-Management-System',
    skills: ['Python', 'TensorFlow', 'Keras']
  },
  {
    id: 4,
    title: 'Android Image Processing',
    subtitle:  'project.project4',
    githubUrl: 'https://github.com/ImmanuelArdiyanto/Image-AI',
    skills: ['Java', 'Python']
  },
  {
    id: 5,
    title: 'Book Rent System',
    subtitle:  'project.project5',
    githubUrl: 'https://github.com/ImmanuelArdiyanto/Book-Rent-System',
    skills: ['PHP', 'Laravel','MySQL']
  },
  {
    id: 6,
    title: 'Android BMI Calculator',
    subtitle: 'project.project6',
    githubUrl: 'https://github.com/ImmanuelArdiyanto/Android-BMI-Calculator',
    skills: ['Java']
  }
]);
</script>
