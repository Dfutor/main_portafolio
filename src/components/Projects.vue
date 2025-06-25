<template>
    <section id="projects" class="projects-section">
        <div class="floating-elements">
            <div class="floating-shape"></div>
            <div class="floating-shape"></div>
            <div class="floating-shape"></div>
        </div>

        <div class="sub-hero">
            <div class="container">
                <div class="sub-hero-content">
                    <h1 class="sub-hero-title">{{ content.subHeroTitle }}</h1>
                    <p class="sub-hero-description">{{ content.subHeroDescription }}</p>
                </div>
            </div> 
        </div>

        <div class="projects-grid">
            <div class="projects-list">
                <div
                    v-for="(project, index) in content.projects" 
                    :key="index"
                    @mouseenter="handleMouseEnter(index, $event)"
                    @mouseleave="handleMouseLeave"
                    @click="showPreview(project)"
                    :ref="el => setProjectItem(el, index)"
                    class="project-item"
                    :data-project="project.dataProject"
                    :data-title="project.dataProjectTitle"
                    :data-demo="project.dataDemo"
                    :data-github="project.dataGithub"
                >
                    <div class="project-content">
                        <div class="project-number">{{ index + 1 }}.</div>
                        <h3 class="project-title">{{ project.title }}</h3>
                        <p class="project-description">{{ project.description }}</p>
                    </div>
                    <div class="project-tags">
                        <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="project-tag">{{ tag.languages }}</span>
                    </div>
                    <div class="project-links">
                        <a
                            v-for="(link, linkIndex) in project.links"
                            :key="linkIndex"
                            :href="link.link"
                            :data-link-type="link.type"
                            class="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ link.name }}
                            <span v-if="link.type === 'demo'">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </span>
                            <span v-else-if="link.type === 'github'">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hover Preview Image -->
        <div
            v-if="hoverPreview.visible"
            class="hover-preview"
            :style="hoverPreview.style"
        >
            <img :src="hoverPreview.image" :alt="hoverPreview.title" />
            <div class="hover-preview-title">{{ hoverPreview.title }}</div>
        </div>

        <!-- Click Preview Modal -->
        <div class="project-preview" v-if="preview.visible" @click="hidePreview">
            <div class="preview-container" @click.stop>
                <button class="preview-close" @click="hidePreview">&times;</button>
                <div class="preview-title">{{ preview.title }}</div>
                <img class="preview-image" :src="preview.image" :alt="preview.title" />
                <div class="preview-links">
                    <a v-if="preview.demo" :href="preview.demo" target="_blank" rel="noopener noreferrer">View Live</a>
                    <a v-if="preview.github" :href="preview.github" target="_blank" rel="noopener noreferrer">GitHub</a>
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
            dataProject: 'dashboard-vue',
            dataProjectTitle: 'Dashboard Vue 3',
            dataDemo: '', // Si tienes demo, pon la URL aquí
            dataGithub: 'https://github.com/yourname/dashboard-vue3',
            title: 'Dashboard Vue 3',
            description: 'Panel de administración moderno construido con Vue 3, Vuex para gestión de estado y autenticación de usuarios. Incluye tablas dinámicas, filtros y diseño responsivo.',
            tags: [
            { languages: 'Vue.js 3' },
            { languages: 'Vuex' },
            { languages: 'JavaScript' },
            { languages: 'CSS3' }
            ],
            links: [
            { type: 'github', name: 'GitHub', link: 'https://github.com/yourname/dashboard-vue3' }
            ],
            image: 'https://picsum.photos/400/300?random=10'
        },
        {
            dataProject: 'tienda-virtual',
            dataProjectTitle: 'Tienda Virtual Frontend',
            dataDemo: '', // Si tienes demo, pon la URL aquí
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

// Hover preview state
const hoverPreview = ref({
    visible: false,
    image: '',
    title: '',
    style: {}
})

// Click preview state
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

function handleMouseEnter(index, event) {
    const project = content.value.projects[index]
    if (!project) return

    nextTick(() => {
        const rect = event.currentTarget.getBoundingClientRect()
        const viewportWidth = window.innerWidth
        
        // Determine if we should show the image on the left or right
        const showOnLeft = rect.right > viewportWidth / 2
        
        hoverPreview.value = {
            visible: true,
            image: project.image,
            title: project.title,
            style: {
                position: 'fixed',
                top: rect.top + 'px',
                left: showOnLeft ? (rect.left - 320) + 'px' : (rect.right + 20) + 'px',
                zIndex: 1000,
                pointerEvents: 'none'
            }
        }
    })
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

/* Hover Preview Styles */
.hover-preview {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    animation: fadeInScale 0.2s ease-out;
}

.hover-preview img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.hover-preview-title {
    padding: 12px 16px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.9rem;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3));
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(10px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Sub Hero Section */
.sub-hero {
    text-align: center;
    padding: 60px 0;
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

.projects-section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.projects-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    align-items: start;
}

.projects-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.project-item {
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid transparent;
    background: transparent;
    position: relative;
    overflow: hidden;
}

.project-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--hover-bg);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 1rem;
}

.project-item:hover::before {
    opacity: 1;
}

.project-item:hover {
    border-color: var(--border-color);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.project-item:nth-child(1) { animation-delay: 0.1s; }
.project-item:nth-child(2) { animation-delay: 0.2s; }
.project-item:nth-child(3) { animation-delay: 0.3s; }
.project-item:nth-child(4) { animation-delay: 0.4s; }
.project-item:nth-child(5) { animation-delay: 0.5s; }

.project-content {
    position: relative;
    z-index: 2;
}

.project-number {
    font-size: 1rem;
    color: var(--text-muted);
    font-weight: 500;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
}

.project-item:hover .project-number {
    color: var(--primary-blue);
}

.project-title {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 800;
    color: var(--text-muted);
    margin-bottom: 1rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    line-height: 0.9;
}

.project-item:hover .project-title {
    color: var(--text-primary);
    transform: translateX(10px);
}

.project-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    line-height: 1.6;
}

.project-item:hover .project-description {
    opacity: 1;
    transform: translateY(0);
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.project-tag {
    background: rgba(14, 165, 233, 0.1);
    border: 1px solid var(--border-color);
    padding: 0.4rem 0.8rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    color: var(--accent-blue);
    font-weight: 500;
    transition: all 0.3s ease;
}

.project-item:hover .project-tag {
    background: rgba(14, 165, 233, 0.2);
    border-color: var(--primary-blue);
    transform: translateY(-2px);
}

.project-links {
    display: flex;
    gap: 1rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease 0.1s;
}

.project-item:hover .project-links {
    opacity: 1;
    transform: translateY(0);
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    background: rgba(14, 165, 233, 0.05);
}

.project-link:hover {
    color: var(--primary-blue);
    border-color: var(--primary-blue);
    background: rgba(14, 165, 233, 0.1);
    transform: translateY(-2px);
}

/* Click Preview Modal */
.project-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease-out;
}

.preview-container {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    padding: 2rem;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideInUp 0.3s ease-out;
}

.preview-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.preview-close:hover {
    background: rgba(255, 255, 255, 0.1);
}

.preview-title {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.preview-image {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.preview-links {
    display: flex;
    gap: 1rem;
}

.preview-links a {
    color: var(--primary-blue);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary-blue);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.preview-links a:hover {
    background: var(--primary-blue);
    color: white;
}

/* Floating Elements */
.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
}

.floating-shape {
    position: absolute;
    opacity: 0.1;
    animation: float 8s ease-in-out infinite;
}

.floating-shape:nth-child(1) {
    top: 10%;
    left: 5%;
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, var(--primary-blue), var(--accent-blue));
    border-radius: 20px;
    transform: rotate(45deg);
    animation-delay: 0s;
}

.floating-shape:nth-child(2) {
    top: 60%;
    right: 10%;
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, var(--success-green), #34d399);
    border-radius: 50%;
    animation-delay: 3s;
}

.floating-shape:nth-child(3) {
    bottom: 20%;
    left: 15%;
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, var(--secondary-blue), var(--primary-blue));
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation-delay: 6s;
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

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInUp {
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
    33% {
        transform: translateY(-20px) rotate(120deg);
    }
    66% {
        transform: translateY(10px) rotate(240deg);
    }
}

/* Mobile Responsive */
@media (max-width: 1024px) {
    .hover-preview {
        display: none; /* Hide hover preview on mobile */
    }
}

@media (max-width: 768px) {
    .projects-section {
        padding: 2rem 1rem;
    }

    .project-item {
        padding: 1rem;
    }

    .project-title {
        font-size: 2rem;
    }

    .project-tags {
        gap: 0.5rem;
    }

    .project-tag {
        font-size: 0.75rem;
        padding: 0.3rem 0.6rem;
    }

    .project-links {
        flex-direction: column;
        gap: 0.5rem;
    }

    .preview-container {
        margin: 1rem;
        max-width: calc(100% - 2rem);
    }
}

@media (max-width: 480px) {
    .projects-section {
        padding: 1.5rem 0.75rem;
    }

    .project-title {
        font-size: 1.75rem;
    }
}
</style>