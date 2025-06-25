<template>
  <section id="experience" class="experience-section">
    <div class="floating-elements">
        <div class="floating-circle"></div>
        <div class="floating-circle"></div>
        <div class="floating-circle"></div>
    </div>

    <div class="sub-hero">
        <div class="container">
            <div class="sub-hero-content">
            <h1 class="sub-hero-title"> {{ content.subHeroTitle }}</h1>
            <p class="sub-hero-description">{{ content.subHeroDescription }}</p>
            </div>
        </div>  
    </div>

    <div class="timeline">
        <div
            v-for="(item, index) in content.items" :key="index"
            class="timeline-item"
        >
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="company-tag"> {{ item.company }}</div>
                <h3 class="job-title">{{ item.jobTitle }}</h3>
                <p class="duration">{{ item.duration }}</p>
                <p class="job-description">{{ item.description }}</p>
                <div class="skills-grid">
                    <div v-for="(skill, idx) in item.skills" :key="idx" class="skill-tag">{{ skill.skill }}</div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const name = 'ExperienceJob'

const content = ref({
    subHeroTitle: 'Experiencia',
    subHeroDescription: '',
    items:[
        {
            company: "ACADEMY OSS",
            jobTitle: "Desarrollador Frontend",
            duration: "2024 – 2025",
            description:
            "Desarrollo de software para academias de artes marciales. Implementación de UI con Vue.js 3. Organización modular del código y consumo de datos desde backend.",
            skills: [
            { skill: "Vue.js 3" },
            { skill: "JavaScript" },
            { skill: "UI Design" },
            { skill: "Consumo de APIs" },
            { skill: "Modularización" }
            ]
        },
        {
            company: "Proyectos Personales (Desarrollo)",
            jobTitle: "Desarrollador Frontend",
            duration: "2023 – Actualidad",
            description:
            "Desarrollo de interfaces SPA usando Vue 3 y Vue Router. Aplicaciones con autenticación básica y consumo de APIs externas.",
            skills: [
            { skill: "Vue.js 3" },
            { skill: "Vue Router" },
            { skill: "SPA" },
            { skill: "Autenticación" },
            { skill: "Consumo de APIs" }
            ]
        }
    ]
})
</script>

<style scoped>

    /* Sub Hero Section */

    .sub-hero {
        text-align: center;
        padding: 10px 0 0;
        position: relative;
        opacity: 0;
        animation: fadeInUp 1s ease-out forwards;
    }

    .sub-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.3;
    }

    .sub-hero-content {
        position: relative;
        z-index: 2;
    }
    .sub-hero-title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        letter-spacing: -0.02em;
        background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 1rem;
        animation: glow 2s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from { filter: drop-shadow(0 0 20px var(--shadow-blue)); }
        to { filter: drop-shadow(0 0 30px var(--primary-blue)); }
    }

    .sub-hero-description {
        font-size: 1.3rem;
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto 60px;
        font-weight: 400;
    }

  .experience-section {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
  }

  .timeline {
      position: relative;
      padding: 2rem 0;
  }

  .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--primary-blue), var(--accent-blue));
      transform: translateX(-50%);
  }

  .timeline-item {
      position: relative;
      margin-bottom: 4rem;
      opacity: 0;
      animation: fadeInUp 1s ease-out forwards;
  }

  .timeline-item:nth-child(1) { animation-delay: 0.2s; }
  .timeline-item:nth-child(2) { animation-delay: 0.4s; }

  .timeline-content {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 2rem;
      position: relative;
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      width: calc(50% - 2rem);
  }

  .timeline-item:nth-child(odd) .timeline-content {
      margin-left: auto;
      margin-right: 2rem;
  }

  .timeline-item:nth-child(even) .timeline-content {
      margin-right: auto;
      margin-left: 2rem;
  }

  .timeline-content:hover {
      transform: translateY(-5px);
      box-shadow: 0 30px 60px rgba(14, 165, 233, 0.2);
      border-color: var(--primary-blue);
  }

  .timeline-dot {
      position: absolute;
      left: 50%;
      top: 2rem;
      width: 20px;
      height: 20px;
      background: var(--primary-blue);
      border: 4px solid var(--dark-bg);
      border-radius: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 20px var(--shadow-blue);
      z-index: 2;
  }

  .company-tag {
      display: inline-block;
      background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1rem;
      box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
  }

  .job-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
  }

  .duration {
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
  }

  .job-description {
      color: var(--text-secondary);
      line-height: 1.7;
  }

  .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.75rem;
      margin-top: 1.5rem;
  }

  .skill-tag {
      background: rgba(14, 165, 233, 0.1);
      border: 1px solid var(--border-color);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      text-align: center;
      color: var(--accent-blue);
      font-weight: 500;
      transition: all 0.3s ease;
  }

  .skill-tag:hover {
      background: rgba(14, 165, 233, 0.2);
      border-color: var(--primary-blue);
      transform: translateY(-2px);
  }

  .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
  }

  .floating-circle {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(96, 165, 250, 0.1));
      animation: float 6s ease-in-out infinite;
  }

  .floating-circle:nth-child(1) {
      width: 60px;
      height: 60px;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
  }

  .floating-circle:nth-child(2) {
      width: 80px;
      height: 80px;
      top: 20%;
      right: 15%;
      animation-delay: 2s;
  }

  .floating-circle:nth-child(3) {
      width: 40px;
      height: 40px;
      bottom: 15%;
      left: 20%;
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

  @keyframes float {
      0%, 100% {
          transform: translateY(0px) rotate(0deg);
      }
      50% {
          transform: translateY(-20px) rotate(180deg);
      }
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
      .experience-section {
          padding: 2rem 1rem;
      }

      .timeline::before {
          left: 1rem;
      }

      .timeline-content {
          width: calc(100% - 3rem);
          margin-left: 3rem !important;
          margin-right: 0 !important;
      }

      .timeline-dot {
          left: 1rem;
      }

      .section-title {
          font-size: 2.5rem;
      }

      .section-subtitle {
          font-size: 1.125rem;
      }

      .job-title {
          font-size: 1.5rem;
      }

      .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 0.5rem;
      }
  }

  @media (max-width: 480px) {
      .experience-section {
          padding: 1.5rem 0.75rem;
      }

      .timeline-content {
          padding: 1.5rem;
      }

      .section-title {
          font-size: 2rem;
      }

      .job-title {
          font-size: 1.25rem;
      }
  }
</style>