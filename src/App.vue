<template>
  <div class="dark">
    <div class="bg-effects">
      <div class="bg-gradient"></div>
      <div class="floating-elements" id="floatingElements"></div>
    </div>
    <div>
      <div >
        <NavbarMain />
        <RouterView />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

import NavbarMain from './components/NavbarMain.vue'
import Footer from './components/Footer.vue'

const name = 'AppPrimary';

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    })
  })
})

</script>

<style scoped>
.bg-effects{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
  overflow: hidden;
}

.bg-gradient{
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  animation: gradientShift 20s ease-in-out infinite;
}

@keyframes gradientShift{
  0%, 100% { transform: translate(0,0) rotate(0deg);}
  50% {transform: translate(-3.125rem, -3.125rem) rotate(180deg)}
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.floating-element {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background: var(--primary-blue);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite
}

@keyframes float {
  0%, 100% { transform: translateY(0rem) rotate(0deg); opacity: 0.1;}
  50% { transform: translateY(1.875rem) rotate(180deg); opacity: 0.3;}
}
</style>
