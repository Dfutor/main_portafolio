<template>
    <footer id="contact" class="contact-footer">
        <!-- Background Elements -->
        <div class="background-elements">
            <div class="floating-orb"></div>
            <div class="floating-orb"></div>
            <div class="floating-orb"></div>
            <div class="grid-pattern"></div>
        </div>

        <!-- Main Contact Section -->
        <div class="contact-container">
            <!-- Header -->
            <div class="contact-header">
                <h2 class="contact-title">{{ content.title }}</h2>
                <p class="contact-subtitle">{{ content.subtitle }}</p>
            </div>

            <!-- Contact Content -->
            <div class="contact-content">
                <!-- Contact Form -->
                <div class="contact-form-section">
                    <form @submit.prevent="submitForm" class="contact-form">
                        <div
                            v-for="(forms, index) in content.formss" 
                            :key="index"
                            class="form-group"
                        >
                            <label :for="forms.for"> {{ forms.name }} </label>
                            <input
                                :type="forms.inputType"
                                :id="forms.inputId"
                                v-model="form[forms.for]"
                                :class="{ 'error': errors.name}"
                                :placeholder="forms.inputPlaceholder"
                                required
                            >
                            <span v-if="errors[forms.for]" class="error-message">
                                {{ errors[forms.for] }}
                            </span>
                        </div>

                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <select 
                                id="subject" 
                                v-model="form.subject" 
                                :class="{ 'error': errors.subject }"
                                required
                            >
                                <option value="">Select a subject</option>
                                <option value="web-development">Web Development</option>
                                <option value="mobile-development">Mobile Development</option>
                                <option value="ui-ux-design">UI/UX Design</option>
                                <option value="consultation">Consultation</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="other">Other</option>
                            </select>
                            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea 
                                id="message" 
                                v-model="form.message" 
                                :class="{ 'error': errors.message }"
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                            ></textarea>
                            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                        </div>

                        <button 
                            type="submit" 
                            class="submit-btn"
                            :disabled="isSubmitting"
                            :class="{ 'submitting': isSubmitting, 'success': isSubmitted }"
                        >
                            <span v-if="!isSubmitting && !isSubmitted">
                                <i class="fa-solid fa-star btn-icon"></i>
                                Send Message
                            </span>
                            <span v-else-if="isSubmitting">
                                <div class="spinner"></div>
                                Sending...
                            </span>
                            <span v-else>
                                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                                Message Sent!
                            </span>
                        </button>
                    </form>
                </div>

                <!-- Contact Info -->
                <div class="contact-info-section">
                    <div class="contact-info">
                        <h3>Contáctame</h3>
                        <p>Siempre estoy abierto a conversar sobre nuevas oportunidades y proyectos interesantes.</p>

                        <div class="contact-methods">
                        <div
                            class="contact-method"
                            v-for="(method, idx) in content.contactMethods"
                            :key="idx"
                        >
                            <div class="method-icon" v-html="method.icon"></div>
                            <div class="method-details">
                            <h4>{{ method.title }}</h4>
                            <a v-if="method.link" :href="method.link" target="_blank" rel="noopener noreferrer">{{ method.value }}</a>
                            <span v-else>{{ method.value }}</span>
                            </div>
                        </div>
                        </div>

                        <!-- Social Links -->
                        <div class="social-links">
                        <h4>Follow Me</h4>
                        <div class="social-icons">
                            <a
                            v-for="(social, idx) in content.socialLinks"
                            :key="idx"
                            :href="social.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            :class="['social-link', social.name]"
                            v-html="social.icon"
                            ></a>
                        </div>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="quick-links">
                        <h4>Quick Links</h4>
                        <div class="links-grid">
                            <div class="link-column">
                                <a href="#home">Home</a>
                                <a href="#projects">Projects</a>
                              </div>
                              <div class="link-column">
                                <a href="#stacks">Stacks</a>
                                <a href="#experience">Experience</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <div class="footer-left">
                    <div class="logo">
                        <span class="logo-text">DevDuvan</span>
                        <span class="logo-dot">.</span>
                    </div>
                    <p>&copy; {{ currentYear }} YourName. All rights reserved.</p>
                </div>
                <div class="footer-right">
                    <div class="footer-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = 'ContactFooter'

const content = ref({
  title : "Contactame!!",
  subtitle: "Crememos algo increible juntos",
  formss : [
    {
      for: 'name',
      name: 'Full Name',
      inputType: 'text',
      inputId: 'name',
      inputPlaceholder: 'Your full name'
    },
    {
      for: 'email',
      name: 'Email Address',
      inputType: 'email',
      inputId: 'email',
      inputPlaceholder: 'your.email@example.com'
    }
  ],
  contactMethods: [
    {
        title: "Email",
        value: "bryan.duvan.gomez@gmail.com",
        link: "mailto:bryan.duvan.gomez@gmail.com",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    },
    {
        title: "Teléfono",
        value: "+57 313 237 3747",
        link: "tel:+573132373747",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`
    },
    {
        title: "Ubicación",
        value: "Girardot, Colombia",
        link: "",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`
    }
  ],
  socialLinks: [
    {
        name: "github",
        link: "https://github.com/yourname",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    },
    {
        name: "linkedin",
        link: "https://linkedin.com/in/yourname",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    {
        name: "twitter",
        link: "https://twitter.com/yourname",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`
    },
  ]
})

// Form state
const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Computed
const currentYear = computed(() => new Date().getFullYear())

// Methods
const validateForm = () => {
    errors.value = {}
    
    if (!form.value.name.trim()) {
        errors.value.name = 'Name is required'
    }
    
    if (!form.value.email.trim()) {
        errors.value.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
        errors.value.email = 'Email is invalid'
    }
    
    if (!form.value.subject) {
        errors.value.subject = 'Subject is required'
    }
    
    if (!form.value.message.trim()) {
        errors.value.message = 'Message is required'
    } else if (form.value.message.trim().length < 10) {
        errors.value.message = 'Message must be at least 10 characters'
    }
    
    return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
    if (!validateForm()) return
    
    isSubmitting.value = true
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Reset form
        form.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        
        isSubmitted.value = true
        
        // Reset success state after 3 seconds
        setTimeout(() => {
            isSubmitted.value = false
        }, 3000)
        
    } catch (error) {
        console.error('Error submitting form:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>
<style scoped>
:root {
    --primary-blue: #0ea5e9;
    --secondary-blue: #0284c7;
    --accent-blue: #38bdf8;
    --success-green: #10b981;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #64748b;
    --hover-bg: rgba(15, 23, 42, 0.8);
    --card-bg: rgba(15, 23, 42, 0.9);
    --border-color: rgba(51, 65, 85, 0.6);
    --shadow-blue: rgba(14, 165, 233, 0.3);
    --error-color: #ef4444;
}

.contact-footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
    position: relative;
    overflow: hidden;
    padding: 80px 0 0;
    margin-top: 100px;
}

/* Background Elements */
.background-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.floating-orb {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    animation: floatOrb 20s ease-in-out infinite;
}

.floating-orb:nth-child(1) {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--primary-blue), transparent);
    top: -150px;
    left: -150px;
    animation-delay: 0s;
}

.floating-orb:nth-child(2) {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, var(--accent-blue), transparent);
    top: 50%;
    right: -100px;
    animation-delay: 7s;
}

.floating-orb:nth-child(3) {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, var(--success-green), transparent);
    bottom: -125px;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 14s;
}

.grid-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-image: 
        linear-gradient(var(--primary-blue) 1px, transparent 1px),
        linear-gradient(90deg, var(--primary-blue) 1px, transparent 1px);
    background-size: 50px 50px;
}

@keyframes floatOrb {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
}

/* Main Container */
.contact-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

/* Header */
.contact-header {
    text-align: center;
    margin-bottom: 80px;
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
}

.contact-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.contact-subtitle {
    font-size: 1.3rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Content Layout */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

/* Form Section */
.contact-form-section {
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.2s forwards;
}

.contact-form {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.form-group {
    margin-bottom: 24px;
}

.form-group label {
    display: block;
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 16px 20px;
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
    resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
    background: rgba(15, 23, 42, 0.8);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
    border-color: var(--error-color);
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--text-muted);
}

.error-message {
    color: var(--error-color);
    font-size: 0.875rem;
    margin-top: 8px;
    display: block;
}

.submit-btn {
    width: 100%;
    padding: 18px 24px;
    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px var(--shadow-blue);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.submit-btn.success {
    background: linear-gradient(135deg, var(--success-green), #059669);
}

.btn-icon {
    width: 20px;
    height: 20px;
    stroke-width: 2;
}

.spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Contact Info Section */
.contact-info-section {
    opacity: 0;
    animation: fadeInUp 1s ease-out 0.4s forwards;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.contact-info h3 {
    color: var(--text-primary);
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 16px;
}

.contact-info > p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 32px;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact-method {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.contact-method:hover {
    border-color: var(--primary-blue);
    background: rgba(15, 23, 42, 0.8);
    transform: translateY(-2px);
}

.method-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.method-icon svg {
    width: 24px;
    height: 24px;
    color: white;
    stroke-width: 2;
}

.method-details h4 {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 4px;
}

.method-details a,
.method-details span {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.method-details a:hover {
    color: var(--primary-blue);
}

/* Social Links */
.social-links h4 {
    color: var(--text-primary);
    font-weight: 600;
    margin: 16px 0;
}

.social-icons {
    display: flex;
    gap: 16px;
}

.social-link {
    width: 48px;
    height: 48px;
    background: rgba(15, 23, 42, 0.5);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.social-link.github:hover {
    background: #333;
    border-color: #333;
    color: white;
}

.social-link.linkedin:hover {
    background: #0077b5;
    border-color: #0077b5;
    color: white;
}

.social-link.twitter:hover {
    background: #1da1f2;
    border-color: #1da1f2;
    color: white;
}

.social-link.dribbble:hover {
    background: #ea4c89;
    border-color: #ea4c89;
    color: white;
}

.social-link svg {
    width: 20px;
    height: 20px;
}

/* Quick Links */
.quick-links h4 {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 16px;
}

.links-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.link-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.link-column a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
    padding: 8px 0;
}

.link-column a:hover {
    color: var(--primary-blue);
}

/* Footer Bottom */
.footer-bottom {
    margin-top: 80px;
    padding: 32px 0;
    border-top: 1px solid var(--border-color);
    background: rgba(15, 23, 42, 0.5);
}

.footer-bottom-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-left {
    display: flex;
    align-items: center;
    gap: 24px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-text {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 800;
}

.logo-dot {
    color: var(--primary-blue);
    font-size: 1.5rem;
    font-weight: 800;
}

.footer-left p {
    color: var(--text-muted);
    margin: 0;
}

.footer-links {
    display: flex;
    gap: 32px;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--primary-blue);
}

/* Animations */
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

/* Responsive Design */
@media (max-width: 1024px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    
    .contact-container {
        padding: 0 1.5rem;
    }
}

@media (max-width: 768px) {
    .contact-footer {
        padding: 60px 0 0;
        margin-top: 80px;
    }
    
    .contact-header {
        margin-bottom: 60px;
    }
    
    .contact-form {
        padding: 32px 24px;
    }
    
    .contact-content {
        gap: 40px;
    }
    
    .footer-bottom-content {
        flex-direction: column;
        gap: 24px;
        text-align: center;
    }
    
    .footer-left {
        flex-direction: column;
        gap: 16px;
    }
    
    .footer-links {
        gap: 24px;
    }
    
    .floating-orb:nth-child(1) {
        width: 200px;
        height: 200px;
        top: -100px;
        left: -100px;
    }
    
    .floating-orb:nth-child(2) {
        width: 150px;
        height: 150px;
        right: -75px;
    }
    
    .floating-orb:nth-child(3) {
        width: 180px;
        height: 180px;
        bottom: -90px;
    }
}

@media (max-width: 480px) {
    .contact-container {
        padding: 0 1rem;
    }
    
    .contact-form {
        padding: 24px 16px;
    }
    
    .social-icons {
        flex-wrap: wrap;
    }
    
    .links-grid {
        grid-template-columns: 1fr;
    }
}
</style>