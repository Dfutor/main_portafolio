<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">{{ home.name }}</div>

      <ul class="nav-links">
        <li v-for="(link, idx) in menu" :key="idx">
          <a :href="link.to">{{ link.name }}</a>
        </li>
      </ul>
      <div class="social-icons">
        <a
          v-for="(link, idx) in links"
          :key="idx"
          :href="link.link"
          class="social-icon"
          :title="link.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </nav>
  </header>
</template>


<style scoped>

.header {
  background: var(--menu-color);
  backdrop-filter: blur(20px);
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 2px solid var(--border-color);
  box-shadow: 0 4px 32px var(--border-color)
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0 2rem
}

.logo {
  font-size: 1.75rem;
  font-weight: 750;
  color: var(--primary-blue);
  letter-spacing: -0.031rem
}

.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -0.313;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0.125rem;
  background: var(--primary-blue);
  transition: width 0.5s ease, transform 0.5s ease, opacity 0.5s ease;
}

.nav-links a:hover{
  color: var(--primary-blue);
}

.nav-links a:hover::after {
  width: 100%;
  transform: translateX(-50%);
  opacity: 1;
}

.social-icons {
  display: flex;
  gap: 1.4rem;
}

.social-icon {
  width: 2.74rem;
  height: 2.74rem;
  background: var(--card-bg);
  border: 0.0625rem solid var(--border-color);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(0.0625rem)
}

.social-icon:hover{
  background: var(--primary-blue);
  color: white;
  transform: translateX(-0.1875rem);
  box-shadow: 0 0.625rem 1.5625rem var(--shadow-blue);
  border-color: var(--primary-blue)
}

@media (max-width: 768px){
  .nav-links {
    display: none;
  }
}
</style>

<script setup>
import { ref, onMounted } from 'vue';

const name = 'NavbarMain';

const menuOpen = ref(false);
const toggleMenu = () => { menuOpen.value = !menuOpen.value};

const home = ref({
  to: '#home',
  name: "Duvan Dev",
  img: ""
});

const menu = ref([
  { to: '#experience', name: "Experiencia" },
  { to: '#projects', name: "Proyectos" },
  { to: '#contact', name: "Contacto" }
]);

const links = ref([
  { name: "github", link: "https://github.com/Dfutor", icon: "fa-brands fa-github-alt" },
  { name: "linkedin", link: "https://www.linkedin.com/in/bryan-gomez-dev/", icon: "fab fa-linkedin" }
]);


// Header scroll effect
function setupHeaderEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
            header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 4px 32px rgba(0, 0, 0, 0.3)';
        }
        lastScrollY = currentScrollY;
    });
}

onMounted(() => {
    setupHeaderEffect()
})

</script>
