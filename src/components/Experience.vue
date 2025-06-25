<template>
    <section id="stacks" class="stacks-section">
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
        <div class="tech-stack">
            <div class="container">
                <div
                    v-for="(category, index) in content.categories" :key="index"
                >
                    <div :class=" ['tech-category', category.category]">
                        <div class="category-header">
                            <h2 class="category-title"> {{ category.categoryTitle }}</h2>
                            <div class="category-line"></div>
                        </div>
                        <div class="tech-scroll-container">
                            <div class="tech-grid">
                                <div
                                    v-for="(item, idx) in category.items" :key="idx"
                                    class="tech-item"
                                >
                                    <div :class="['tech-icon', item.program]">
                                        <i :class="item.icon"></i>
                                    </div>
                                    <div class="tech-name">
                                        {{ item.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import {ref} from 'vue'

const name = 'Experience'

const content = ref({
    subHeroTitle: 'Habilidades Técnicas',
    subHeroDescription: 'Explora las tecnologías que domino para crear soluciones web excepcionales y experiencias digitales innovadoras.',
    categories: [
        {
            category: "frontend",
            categoryTitle: "Frontend",
            items: [
                { program: "vue.js", icon: "fab fa-vuejs", name: "Vue.js 3" },
                { program: "vue_router", icon: "fab fa-vuejs", name: "Vue Router" },
                { program: "i18n", icon: "fas fa-language", name: "i18n" },
                { program: "bootstrap", icon: "fab fa-bootstrap", name: "Bootstrap" },
                { program: "tailwind", icon: "fas fa-wind", name: "Tailwind CSS" },
                { program: "sass", icon: "fab fa-sass", name: "SASS" },
                { program: "js", icon: "fab fa-js", name: "JavaScript" },
                { program: "ts", icon: "fas fa-file-code", name: "TypeScript" },
                { program: "react", icon: "fab fa-react", name: "React" },
                { program: "nextjs", icon: "fas fa-arrow-right", name: "Next.js" },
                { program: "gsap", icon: "fas fa-play", name: "GSAP" },
            ]
        },
        {
            category: "backend",
            categoryTitle: "Backend",
            items:[
                { program: "laravel", icon: "fab fa-laravel", name: "laravel" },
                { program: "php", icon: "fab fa-php", name: "php" },
                { program: "python", icon: "fab fa-python", name: "python" },
                { program: "nodejs", icon: "fab fa-node", name: "Node.js" },

            ]
        },
        {
            category: "database",
            categoryTitle: "Database",
            items: [
                { program: "mysql", icon: "fas fa-database", name: "MySQL" },
                { program: "postgresql", icon: "fas fa-database", name: "PostgreSQL" },
                { program: "Firebirdsql", icon: "fas fa-database", name: "Firebirdsql" },
                { program: "MariaDB", icon: "fas fa-database", name: "MariaDB" }
            ]
        },
        {
            category: "herramientas",
            categoryTitle: "Herramientas",
            items: [
                { program: "git", icon: "fab fa-git-alt", name: "Git" },
                { program: "github", icon: "fab fa-github", name: "GitHub" },
                { program: "bitbucket", icon: "fab fa-bitbucket", name: "Bitbucket" },
                { program: "figma", icon: "fab fa-figma", name: "Figma (básico)" }
            ]
        }
    ]
})

</script>

<style scoped>

    .stacks-section {
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    /* Sub Hero Section */
    .sub-hero {
        text-align: center;
        padding: 120px 0 80px;
        position: relative;
        animation: fadeInUp 1s ease-out forwards;
    }

    .sub-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23334155" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
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

    @keyframes glow {
        from { filter: drop-shadow(0 0 20px var(--shadow-blue)); }
        to { filter: drop-shadow(0 0 30px var(--primary-blue)); }
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


    .sub-hero-description {
        font-size: 1.3rem;
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto 60px;
        font-weight: 400;
    }

      .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
      }


      /* Tech Stack Section */
      .tech-stack {
          padding: 40px 0 10px;
          position: relative;
      }

      .tech-category {
          margin-bottom: 80px;
      }

      .category-header {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          padding-left: 20px;
      }

      .category-title {
          font-size: 2.5rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-right: 20px;
      }

      .category-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-blue), transparent);
      }

      /* Horizontal scrolling container */
      .tech-scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          padding: 20px 0;
          scrollbar-width: thin;
          scrollbar-color: var(--primary-blue) transparent;
      }

      .tech-scroll-container::-webkit-scrollbar {
          height: 6px;
      }

      .tech-scroll-container::-webkit-scrollbar-track {
          background: var(--secondary-bg);
          border-radius: 3px;
      }

      .tech-scroll-container::-webkit-scrollbar-thumb {
          background: var(--accent-green);
          border-radius: 3px;
      }

      .tech-grid {
          display: flex;
          gap: 24px;
          padding: 0 20px;
          min-width: max-content;
      }

      .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          background: var(--card-bg);
          border-radius: var(--border-radius);
          border: 2px solid var(--border-color);
          transition: var(--transition);
          text-align: center;
          min-width: 140px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
      }

      .tech-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s;
      }

      .tech-item:hover::before {
          left: 100%;
      }

      .tech-item:hover {
          transform: translateY(-8px) scale(1.05);
          border-color: var(--primary-blue);
          box-shadow: var(--glow);
          background: linear-gradient(135deg, var(--card-bg), rgba(14, 165, 233, 0.1));
      }

      .tech-icon {
          font-size: 3rem;
          margin-bottom: 16px;
          transition: var(--transition);
      }

      .tech-item:hover .tech-icon {
          transform: scale(1.2);
          filter: drop-shadow(0 0 10px currentColor);
      }

      .tech-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: var(--transition);
      }

      .tech-item:hover .tech-name {
          color: var(--primary-blue);
      }

      /* Color variations for different categories */
      .frontend .tech-item:hover {
          border-color: var(--primary-blue);
          box-shadow: 0 0 20px var(--shadow-blue);
      }

      .backend .tech-item:hover {
          border-color: var(--secondary-blue);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      }

      .backend .tech-item:hover .tech-name {
          color: var(--secondary-blue);
      }

      .database .tech-item:hover {
          border-color: var(--accent-blue);
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
      }

      .database .tech-item:hover .tech-name {
          color: var(--accent-blue);
      }

      /* Tech-specific colors */
      .js { color: #f7df1e; }
      .ts { color: #3178c6; }
      .react { color: #61dafb; }
      .nextjs { color: #ffffff; }
      .redux { color: #764abc; }
      .tailwind { color: #06b6d4; }
      .gsap { color: #88ce02; }
      .framer { color: #0055ff; }
      .sass { color: #cc6699; }
      .bootstrap { color: #7952b3; }
      .nodejs { color: #339933; }
      .nestjs { color: #e0234e; }
      .express { color: #000000; background: #ffffff; border-radius: 4px; padding: 2px; }
      .mysql { color: #4479a1; }
      .postgresql { color: #336791; }

      /* Footer */
      .footer {
          background: var(--menu-color);
          padding: 40px 0;
          text-align: center;
          color: var(--text-secondary);
          border-top: 1px solid var(--border-color);
      }

      .footer a {
          color: var(--primary-blue);
          text-decoration: none;
          transition: var(--transition);
      }

      .footer a:hover {
          color: var(--accent-blue);
          text-shadow: 0 0 10px currentColor;
      }

      /* Responsive Design */
    @media (max-width: 768px) {
        .stacks-section {
            padding: 2rem 1rem;
        }
          .sub-hero {
              padding: 80px 0 60px;
          }

          .sub-hero-title {
              font-size: 3rem;
          }

          .category-title {
              font-size: 2rem;
          }

          .tech-item {
              min-width: 120px;
              padding: 24px 20px;
          }

          .tech-icon {
              font-size: 2.5rem;
          }
      }

      @media (max-width: 480px) {
        .stacks-section {
            padding: 1.5rem 0.75rem;
        }
          .container {
              padding: 0 15px;
          }

          .category-header {
              padding-left: 10px;
          }

          .tech-grid {
              padding: 0 10px;
          }

          .tech-item {
              min-width: 100px;
              padding: 20px 16px;
          }
      }
    </style>