<template>
  <section id="projects" class="relative px-4 py-16 max-w-7xl mx-auto">
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div class="floating-circle w-16 h-16 top-[10%] left-[10%] animate-float"></div>
      <div class="floating-circle w-20 h-20 top-[20%] right-[15%] animate-float delay-2000"></div>
      <div class="floating-circle w-10 h-10 bottom-[15%] left-[20%] animate-float delay-4000"></div>
    </div>

    <div class="text-center mb-16">
      <h1 class=" p-5 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-glow">
        {{ content.subHeroTitle }}
      </h1>
      <p class="  text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
        {{ content.subHeroDescription }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="(project, index) in content.projects"
        :key="index"
        @mouseleave="handleMouseLeave"
        @click="showPreview(project)"
        :ref="el => setProjectItem(el, index)"
        class="bg-transparent border border-transparent hover:border-border hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl cursor-pointer relative overflow-hidden group"
        :data-project="project.dataProject"
        :data-title="project.dataProjectTitle"
        :data-demo="project.dataDemo"
        :data-github="project.dataGithub"
      >
        <div>
          <div class="text-sm text-muted font-medium mb-2">
            {{ index + 1 }}.
          </div>
          <h3 class="text-2xl md:text-3xl font-extrabold text-muted uppercase group-hover:text-white transition-transform duration-300 group-hover:translate-x-2">
            {{ project.title }}
          </h3>
          <p class="text-sm text-secondary ">
            {{ project.description }}
          </p>
        </div>
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="bg-blue-100/10 border border-border text-accent px-3 py-1 rounded text-sm font-medium">
            {{ tag.languages }}
          </span>
        </div>
        <div class="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            v-for="(link, linkIndex) in project.links"
            :key="linkIndex"
            :href="link.link"
            :data-link-type="link.type"
            class="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary border border-border px-3 py-1 rounded hover:-translate-y-1 transition-transform duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ link.name }}
            <span v-if="link.type === 'demo'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
            <span v-else-if="link.type === 'github'">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div v-if="preview.visible" @click="hidePreview" class="fixed inset-0 z-[10000] bg-black/80 flex items-center justify-center backdrop-blur-md animate-fadeIn">
      <div @click.stop class="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto p-6 relative animate-slideInUp">
        <button @click="hidePreview" class="absolute top-4 right-4 text-white text-2xl">&times;</button>
        <h2 class="text-white text-xl font-bold mb-4">{{ preview.title }}</h2>
        <img :src="preview.image" alt="preview" class="rounded mb-4" />
        <div class="flex gap-4">
          <a v-if="preview.demo" :href="preview.demo" target="_blank" class="px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition">View Live</a>
          <a v-if="preview.github" :href="preview.github" target="_blank" class="px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue';

const name = 'Projects'

const content = ref({
    subHeroTitle: 'Mis Proyectos',
    subHeroDescription: 'Compilation of personal and work projects',
    projects: [
        {
            dataProject: 'Plant Sense',
            dataProjectTitle: 'Dashboard Vue 3',
            dataDemo: 'https://github.com/Dfutor/PlantSense', 
            dataGithub: 'https://github.com/Dfutor/PlantSense',
            title: 'Plant Sense',
            description: 'Este proyecto integra hardware (ESP8266 + sensor YL-69), backend (FastAPI + PostgreSQL) y frontend (Vue.js + Chart.js) para monitorear en tiempo real la humedad del suelo de una planta.',
            tags: [
            { languages: 'Vue.js 3' },
            { languages: 'Chart.js' },
            { languages: 'Python' },
            { languages: 'PostgreSQL' },
            { languages: 'ESP8266' },
            { languages: 'C++' },
            { languages: 'Docker' },
            ],
            links: [
            { type: 'github', name: 'GitHub', link: 'https://github.com/Dfutor/PlantSense' }
            ],
            image: '.main_portafolio\public\project\plantsense.png'
        },
        {
            dataProject: 'tienda-virtual',
            dataProjectTitle: 'Tienda Virtual Frontend',
            dataDemo: '', 
            dataGithub: 'https://github.com/yourname/tienda-virtual-frontend',
            title: 'Tienda Virtual Frontend',
            description: 'Sistema de productos, filtros y carrito de compras desarrollado completamente en frontend. Interfaz intuitiva y diseño adaptativo para dispositivos móviles.',
            tags: [
            { languages: 'Vue.js' },
            { languages: 'JavaScript' },
            { languages: 'HTML5' },
            { languages: 'CSS3' }
            ],
            links: [
            { type: 'github', name: 'GitHub', link: 'https://github.com/yourname/tienda-virtual-frontend' }
            ],
            image: 'https://picsum.photos/400/300?random=11'
        },
        {
            dataProject: 'portfolio-spa',
            dataProjectTitle: 'Portafolio Personal SPA',
            dataDemo: 'https://your-portfolio-demo.com',
            dataGithub: 'https://github.com/yourname/portfolio-spa',
            title: 'Portafolio Personal SPA',
            description: 'Página personal desarrollada 100% en Vue 3, con enrutamiento dinámico, diseño responsivo y animaciones modernas. Muestra proyectos, experiencia y contacto.',
            tags: [
            { languages: 'Vue.js 3' },
            { languages: 'Vue Router' },
            { languages: 'JavaScript' },
            { languages: 'CSS3' }
            ],
            links: [
            { type: 'demo', name: 'Ver Live', link: 'https://your-portfolio-demo.com' },
            { type: 'github', name: 'GitHub', link: 'https://github.com/yourname/portfolio-spa' }
            ],
            image: 'https://picsum.photos/400/300?random=12'
        }
        ]
})

const projectItems = ref([])

const hoverPreview = ref({
    visible: false,
    image: '',
    title: '',
    style: {}
})

const preview = ref({
    title: '',
    image: '',
    demo: '',
    github: '',
    visible: false
})

function setProjectItem(el, idx) {
    if (el) projectItems.value[idx] = el
}


function handleMouseLeave() {
    hoverPreview.value.visible = false
}

function showPreview(project) {
    preview.value.title = project.dataProjectTitle
    preview.value.image = project.image || `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.dataProjectTitle)}`
    preview.value.demo = project.dataDemo
    preview.value.github = project.dataGithub
    preview.value.visible = true
}

onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
})

function hidePreview() {
    preview.value.visible = false
}

function handleVisibilityChange() {
    if (document.hidden) {
        preview.value.visible = false
    }
}
</script>

<style scoped>
.floating-circle {
  position: absolute;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(96, 165, 250, 0.1));
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.delay-2000 {
  animation-delay: 2s;
}

.delay-4000 {
  animation-delay: 4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 20px rgba(14, 165, 233, 0.3));
  }
  to {
    filter: drop-shadow(0 0 30px #0ea5e9);
  }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite alternate;
}
</style>