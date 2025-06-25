<template>
 
  <section class="hero-section">
    <div class="hero-text slide-in-left">
      <div class="hero-subtitle">
        {{ content.subtitle }}
      </div>
      <h1>
        <span class="hero-title">{{ content.keyWord1 }}</span><br>
        <span class="developer-text">{{ content.keyWord2 }}</span>
      </h1>
      <p class="hero-description" v-html="content.description"></p>
      <div class="cta-buttons columns">
        <div class=" column">
          <div class="columns">
            <div class="column">
              <div class="control has-icons-left ">
                <div class="select is-info is-responsive ">
                    <select v-model="selectDowload" >
                    <option disabled value="">{{ content.optionDefault }}</option>
                    <option 
                      v-for="(download, idx) in content.optionsDownload"
                      :key="idx"
                      :value="download.value"
                    >
                      {{ download.text }}
                    </option>
                  </select>
                  <span class="icon is-large is-left">
                    <i class="fas fa-file"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="column">
              <a class="button is-info" @click="downloadPDF" :disable="!selectDowload">
                {{ content.download }}
              </a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="cta-buttons">
            <a href="#projects" class="cta-button">
              Ver Proyectos
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-section slide-in-right">
      <div class="profile-container">
        <div class="profile-image">
          <img src="@/assets/img/foto.jpeg" alt="">
        </div>
        <div class="profile-decoration"></div>
      </div>
    </div>
  </section>
  <section class="stats-section">
    <div class="columns ">
      <div v-for="(card, idx) in content.sectionCards" :key="idx" class="stat-card fade-in column mx-2">
        <div class="stat-icon">{{ card.icon }}</div>
        <div class="stat-number">{{ card.number }}</div>
        <div class="stat-label">{{ card.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'

const name = 'Hero';
let requestTickHandler = null;
const selectDowload = ref('')

const content = ref ({
  subtitle: "Desarrollador Junnior",
  keyWord1: "FRONTEND",
  keyWord2: "DEVELOPER",
  description: "Vue.js | HTML | CSS | JavaScript | Git | APIs REST <br>Hola, soy <strong> Bryan Gómez </strong>, desarrollador frontend junior apasionado por construir soluciones web modernas con tecnologías como Vue.js, JavaScript, HTML y CSS.",
  sectionCards: [
    {
      icon: "🤯",
      number: "3",
      label: "Años de Experiencia"
    },
    {
      icon: "🧑🏽‍💻",
      number: "3+",
      label: "Proyectos Completados"
    },
    {
      icon: "💻",
      number: "10k",
      label: "Líneas de Código"
    }
  ],
  optionDefault: 'Estilo de CV',
  optionsDownload: {
    optionOne:{
      value: 'Web_Developer_CV_Sin_Style.pdf',
      text: 'Sin Estilo'
    },
    optionTwo:{
      value: 'Web_Developer_CV_Style.pdf',
      text: 'Con Estilo'
    },
  },
  download: 'Descargar CV'
})

function triggerDowload(blob,filename) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.remove(link)
  URL.revokeObjectURL(url)
}


async function downloadPDF(){
  if (!selectDowload.value || !selectDowload.value.endsWith('.pdf')) {
    alert('Por favor selecciona un archivo PDF válido')
    return
  }

  try {
    window.open(`/CV/${selectDowload.value}`, '_blank')

  } catch (err) {
    alert('No se pudo descargar el archivo.')
    console.error(err)
  }
}

function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    if (!container) return; 
    const elementCount = 30;
    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 8 + 's';
        element.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(element);
    }
}

function setupParallax() {
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        document.querySelector('.bg-gradient').style.transform = `translateY(${rate}px)`;
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = 0.2 + (index % 3) * 0.1;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    requestTickHandler = requestTick; // <-- Asigna aquí
    window.addEventListener('scroll', requestTick);
}

onBeforeUnmount(() => {
    if (requestTickHandler) window.removeEventListener('scroll', requestTickHandler);
});


// Intersection Observer para animaciones
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}




onMounted(() => {
  setupScrollAnimations();
  createFloatingElements();
  setupParallax();

  setTimeout(() => {
        document.querySelector('.slide-in-left').classList.add('visible');
    }, 300);
    
    setTimeout(() => {
        document.querySelector('.slide-in-right').classList.add('visible');
    }, 600);
})


</script>

<style scoped>

.hero-title {
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glow 2s ease-in-out infinite alternate;
}


@keyframes glow {
    from { filter: drop-shadow(0 0 5px var(--shadow-blue)); }
    to { filter: drop-shadow(0 0 10px var(--primary-blue)); }
}




.hero-section {
  display: grid;
  grid-template-columns: 1fr 25rem;
  gap: 6rem;
  align-items: center;
  min-height: 85vh;
  padding: 4rem 0;
  
}

.hero-text h1 {
  font-size: 5rem;
  font-weight: 900;
  line-height: 0.95;
  margin-bottom: 2rem;
  letter-spacing: -0.125rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--primary-blue);
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
}

.fronted-text {
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.developer-text {
  color: var(--text-primary)
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.7;
  max-width: 37.5rem;
}

.hero-description strong{
  color: var(--text-primary);
  font-weight: 600;
}



.cta-buttons {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.cta-button {
  background: linear-gradient(135deg, var(--primary-blue, var(--secondary-blue)));
  color: white;
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 0.5rem 1.5625rem var(--shadow-blue);
}

.cta-button:hover{
  transform: translateY(-1.5625rem);
  box-shadow: 0 0.75rem 2.1875rem var(--shadow-blue);
}

.cta-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 0.125rem solid var(--border-color); 
  box-shadow: none;
}

.cta-secondary:hover{
  border-color: var(--primary-blue);
  background: rgba(14, 165, 233, 0.1);
  box-shadow: 0 0.5rem 1.5625rem rgba(14, 165, 233, 0.1);
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
}

.profile-container {
  position: relative;
  width: 21.875rem;
  height: 21.875rem;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1.25rem 3.75rem var(--shadow-blue);
}

.profile-image::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1));
  animation: shine 4s infinite;
}

.profile-decorator {
  position: absolute;
  width: 6.25rem;
  height: 6.25rem;
  border: 0.125rem solid var(--primary-blue);
  border-radius: 50%;
  top: -20%;
  right: -20%;
  opacity: 0.3;
  animation: rotate 10s linear infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.stats-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 6rem;
    padding: 4rem 0;
}

.stat-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 3rem 2rem;
    text-align: center;
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-blue), var(--secondary-blue));
}

.stat-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary-blue);
    box-shadow: 0 20px 60px rgba(14, 165, 233, 0.2);
}

.stat-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.stat-number {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
    line-height: 1;
}

.stat-label {
    color: var(--text-secondary);
    font-size: 1.1rem;
    font-weight: 500;
}

@media (max-width: 1024px) {
    .hero-section {
        grid-template-columns: 1fr;
        gap: 4rem;
        text-align: center;
    }
    
    .profile-container {
        width: 280px;
        height: 280px;
    }
}


@media (max-width: 768px) {
  .hero-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hero-text h1 {
    font-size: 2.5rem;
    text-align: center;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .profile-container {
    width: 200px;
    height: 200px;
  }
}


@media (max-width: 480px) {
  .hero-text h1{
    font-size: 2.5rem;
    letter-spacing: -0.3125px;
    margin-bottom: 1rem;
  }
}


.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s ease;
}

.slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
}

.slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s ease;
}

.slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
}
</style>
