<template>
  <main class="main-content">
    <Hero/>
    <Experience/>
    <Job/>
    <Projects/>
    <Contact/>
  </main>
</template>

<style scoped>
.main-content {
  margin-top: 7.5rem;
  padding: 0 2rem;
  max-width: 87.5rem;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }
}
</style>

<script setup>
import Contact from '@/components/Contact.vue'
import Experience from '@/components/Experience.vue'
import Job from '@/components/Job.vue'
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'

const name = 'HomeView';
</script>
