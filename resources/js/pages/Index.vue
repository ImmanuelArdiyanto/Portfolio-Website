<template>
  <Head :title="t('navbar.home')" />
  <div class="bg-black text-white min-h-screen w-full px-4 sm:px-8 md:px-16 lg:px-32 py-16">
    <div class="max-w-7xl mx-auto">
      

      <section class="flex flex-col md:flex-row items-center md:text-left gap-8 md:gap-12">
        
        <div class="w-48 h-48 md:w-56 md:h-73 flex-shrink-0">
            <img src="images/profile.jpeg" class="w-full h-full rounded-md border-2 border-purple-500/50 p-2"/>
        </div>

        <div class="pb-12 justify-center">
          <h1 class="text-4xl md:text-7xl mx-auto md:ml-6 font-bold tracking-tight">
            Immanuel Ardiyanto
          </h1>
          <p class="text-xl md:text-3xl mx-auto md:ml-86 text-gray-300 mt-2">
            I'm an IT and AI Explorer
          </p>
        </div>
      </section>


      <section class="mt-24 md:mt-32">

        <h2 class="text-2xl md:text-5xl font-bold text-center mb-12 mt-90">
          <span class="pb-2 border-b border-purple-500/60">
            {{ t('home.Projects') }} 
          </span>
        </h2>

        <div class="space-y-6 max-w-4xl mx-auto">
          
          <a 
            v-for="project in featuredProjects" 
            :key="project.id"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="block p-8 bg-[#101010] border border-purple-500/40 rounded-2xl transition-all duration-300 ease-in-out hover:scale-[1.03] hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer">
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

        <div class="mt-12 text-center mb-20">
          <Link href="/project"
            class="inline-block py-3 px-8 border border-gray-700 rounded-full text-gray-300 font-semibold transition-colors duration-300 border border-purple-500/40 hover:bg-gray-800 hover:border-gray-600 hover:text-white magnetic-item
            " @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" @click="handleNavigation"
          >
            {{ t('home.moreWork') }} 
          </Link>
        </div>
      </section>

    </div>
  </div>
  <ContactForm />
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n'
import AppLayout from '@/components/ui/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import ContactForm from '@/components/ui/Contactform.vue'; 
import { Head } from '@inertiajs/vue3'; 

defineOptions({ layout: AppLayout });

const { t } = useI18n();

const handleNavigation = () => {
  // Perintahkan browser untuk scroll ke posisi paling atas (koordinat 0, 0)
  window.scrollTo(0, 0);
};

// Data lengkap proyek Anda (bisa sama dengan di Project.vue)
const allProjects = ref([
  {
    id: 1,
    title: 'NFT Based Ticketing System',
    subtitle:  'project.project1',
    githubUrl: 'https://github.com/ImmanuelArdiyanto/NFT-Based-Ticketing-System',
    skills: ['Solidity','JavaScript', 'Reactjs']
  },
  {
    id: 2,
    title: 'Portfolio Website',
    subtitle: 'project.project1',
    githubUrl: 'https://github.com/ImmanuelArdiyanto/Portfolio-Website',
    skills: ['Vuejs', 'PHP', 'Laravel','TypeScript', 'JavaScript','Tailwind']
  },
  {
    id: 3,
    title: 'Attendance Management System',
    subtitle:  'project.project2',
    githubUrl: 'https://huggingface.co/spaces/Immanuel-1/Attendance-Management-System',
    skills: ['Python', 'TensorFlow', 'Keras']
  }
]);
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

const featuredProjects = computed(() => allProjects.value.slice(0, 3));
</script>

<style scoped>
.magnetic-item {
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>