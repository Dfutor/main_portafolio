<template>
  <section class="grid md:grid-cols-2 gap-10 items-center min-h-[85vh] py-16 px-6">
    <div class="space-y-6 animate-slide-in-left">
      <div class="text-sm uppercase font-semibold text-blue-500">{{ content.subtitle }}</div>
      <h1 class="text-5xl font-extrabold leading-tight">
        <span class="bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">{{ content.keyWord1 }}</span><br>
        <span class="text-gray-800 dark:text-white">{{ content.keyWord2 }}</span>
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300" v-html="content.description"></p>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex items-center gap-2">
          <div class="relative">
            <select v-model="selectDowload" class="pl-10 pr-4 py-2 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white">
              <option disabled value="">{{ content.optionDefault }}</option>
              <option v-for="(download, idx) in content.optionsDownload" :key="idx" :value="download.value">
                {{ download.text }}
              </option>
            </select>
            <div class="absolute left-2 top-2 text-blue-600">
              <i class="fas fa-file"></i>
            </div>
          </div>
          <button @click="downloadPDF" :disabled="!selectDowload"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow">
            {{ content.download }}
          </button>
        </div>
        <a href="#projects"
          class="bg-gradient-to-r from-blue-500 to-blue-300 text-white font-semibold py-2 px-6 rounded-lg shadow hover:scale-105 transition">
          Ver Proyectos →
        </a>
      </div>
    </div>

    <div class="flex justify-center animate-slide-in-right">
      <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
        <img src="@/assets/img/foto.jpeg" alt="" class="object-cover w-full h-full">
      </div>
    </div>
  </section>

  <section class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 px-6">
    <div v-for="(card, idx) in content.sectionCards" :key="idx"
      class="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
      <div class="text-4xl mb-2">{{ card.icon }}</div>
      <div class="text-3xl font-bold text-blue-500">{{ card.number }}</div>
      <div class="text-gray-600 dark:text-gray-300">{{ card.label }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const selectDowload = ref('');
const content = ref({
  subtitle: "Desarrollador Junnior",
  keyWord1: "FRONTEND",
  keyWord2: "DEVELOPER",
  description:
    "Vue.js | HTML | CSS | JavaScript | Git | APIs REST <br>Hola, soy <strong> Bryan Gómez </strong>, desarrollador frontend junior apasionado por construir soluciones web modernas con tecnologías como Vue.js, JavaScript, HTML y CSS.",
  sectionCards: [
    { icon: "😊", number: "3", label: "Años de Experiencia" },
    { icon: "🧑🏽‍💻", number: "3+", label: "Proyectos Completados" },
    { icon: "💻", number: "10k", label: "Líneas de Código" },
  ],
  optionDefault: "Estilo de CV",
  optionsDownload: [
    { value: "Web_Developer_CV_Sin_Style.pdf", text: "Tipo Harvard" },
    { value: "Web_Developer_CV_Style.pdf", text: "Tradicional" },
  ],
  download: " CV",
});

function downloadPDF() {
  if (!selectDowload.value || !selectDowload.value.endsWith('.pdf')) {
    alert('Por favor selecciona un archivo PDF válido');
    return;
  }
  try {
    window.open(`/CV/${selectDowload.value}`, '_blank');
  } catch (err) {
    alert('No se pudo descargar el archivo.');
    console.error(err);
  }
}
</script>

<style scoped>
@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}
.animate-shine {
  animation: shine 6s linear infinite;
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-in-left {
  animation: slide-in-left 0.8s ease forwards;
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-in-right {
  animation: slide-in-right 0.8s ease forwards;
}
</style>
