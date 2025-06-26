<template>
  <section id="stacks" class="relative px-4 py-16 max-w-6xl mx-auto">
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div class="floating-circle w-16 h-16 top-[10%] left-[10%] animate-float"></div>
      <div class="floating-circle w-20 h-20 top-[20%] right-[15%] animate-float delay-2000"></div>
      <div class="floating-circle w-10 h-10 bottom-[15%] left-[20%] animate-float delay-4000"></div>
    </div>

    <div class="text-center py-32 relative z-10 animate-fadeInUp">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent animate-glow">
        {{ content.subHeroTitle }}
      </h1>
      <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal">
        {{ content.subHeroDescription }}
      </p>
    </div>

    <div class="space-y-20 relative z-10">
      <div
        v-for="(category, index) in content.categories"
        :key="index"
        :class="['space-y-6', category.category]"
      >
        <div class="flex items-center mb-6 pl-5">
          <h2 class="text-3xl font-extrabold uppercase tracking-wider text-white mr-5">
            {{ category.categoryTitle }}
          </h2>
          <div class="h-0.5 flex-1 bg-gradient-to-r from-sky-500 to-transparent"></div>
        </div>

        <div class="overflow-x-auto py-5 scrollbar-thin scrollbar-thumb-sky-400">
          <div class="flex gap-6 px-5 min-w-max">
            <div
              v-for="(item, idx) in category.items"
              :key="idx"
              class="flex flex-col items-center justify-center px-6 py-8 bg-slate-800/80 border-2 border-sky-400/20 hover:border-sky-400 rounded-xl min-w-[140px] transition-all hover:scale-105 hover:-translate-y-2 relative overflow-hidden cursor-pointer group"
            >
              <div :class="['text-4xl mb-4 transition-all group-hover:scale-110', item.program]">
                <i :class="item.icon"></i>
              </div>
              <div class="text-sm font-semibold text-white group-hover:text-sky-400">
                {{ item.name }}
              </div>
              <div class="absolute inset-0 -left-full group-hover:left-full transition-all duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const content = ref({
  subHeroTitle: 'Habilidades Técnicas',
  subHeroDescription:
    'Explora las tecnologías que domino para crear soluciones web excepcionales y experiencias digitales innovadoras.',
  categories: [
    {
      category: 'frontend',
      categoryTitle: 'Frontend',
      items: [
        { program: 'vuejs', icon: 'fab fa-vuejs', name: 'Vue.js 3' },
        { program: 'vue_router', icon: 'fab fa-vuejs', name: 'Vue Router' },
        { program: 'vue_pinia', icon: 'fas fa-thumbtack', name: 'Vue Pinia' },
        { program: 'i18n', icon: 'fas fa-language', name: 'i18n' },
        { program: 'bootstrap', icon: 'fab fa-bootstrap', name: 'Bootstrap' },
        { program: 'tailwind', icon: 'fas fa-wind', name: 'Tailwind CSS' },
        { program: 'sass', icon: 'fab fa-sass', name: 'SASS' },
        { program: 'javascript', icon: 'fab fa-js', name: 'JavaScript' },
        { program: 'typescript', icon: 'fas fa-file-code', name: 'TypeScript' },
        { program: 'elementplus', icon: 'fas fa-cubes', name: 'Element Plus' },
        { program: 'axios', icon: 'fas fa-network-wired', name: 'Axios' },
        { program: 'nodejs', icon: 'fab fa-node-js', name: 'npm/nvm' },
        { program: 'google_fonts', icon: 'fas fa-font', name: 'Google Fonts' },
      ]
    },
    {
      category: 'backend',
      categoryTitle: 'Backend',
      items: [
        { program: 'laravel', icon: 'fab fa-laravel', name: 'Laravel' },
        { program: 'php', icon: 'fab fa-php', name: 'Php' },
        { program: 'fastapi', icon: 'fas fa-bolt', name: 'FastAPI' },
        { program: 'python', icon: 'fab fa-python', name: 'Python' },
        { program: 'arduino', icon: 'fas fa-robot', name: 'Arduino' },
        { program: 'c++', icon: 'fas fa-code', name: 'C++' },
        { program: 'nodejs', icon: 'fab fa-node-js', name: 'Node.js' }
      ]
    },
    {
      category: 'database',
      categoryTitle: 'Database',
      items: [
        { program: 'mysql', icon: 'fas fa-database', name: 'MySQL' },
        { program: 'postgresql', icon: 'fas fa-database', name: 'PostgreSQL' },
        { program: 'firebirdsql', icon: 'fas fa-database', name: 'Firebirdsql' },
        { program: 'mariadb', icon: 'fas fa-database', name: 'MariaDB' }
      ]
    },
    {
      category: 'herramientas',
      categoryTitle: 'Herramientas',
      items: [
        { program: 'git', icon: 'fab fa-git-alt', name: 'Git' },
        { program: 'github', icon: 'fab fa-github', name: 'GitHub' },
        { program: 'bitbucket', icon: 'fab fa-bitbucket', name: 'Bitbucket' },
        { program: 'docker', icon: 'fab fa-docker', name: 'Docker' },
        { program: 'jira', icon: 'fab fa-jira', name: 'Scrum - Canvas' },
        { program: 'jira', icon: 'fab fa-jira', name: 'Jira' },
        { program: 'figma', icon: 'fab fa-figma', name: 'Figma (básico)' }
      ]
    }
  ]
})
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