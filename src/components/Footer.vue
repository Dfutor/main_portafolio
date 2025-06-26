<template>
  <footer id="contact" class="relative overflow-hidden py-16 bg-gray-900 text-white">
    <div class="absolute inset-0 z-0">
      <div class="absolute w-32 h-32 bg-indigo-600 rounded-full opacity-30 animate-pulse top-10 left-10"></div>
      <div class="absolute w-40 h-40 bg-pink-500 rounded-full opacity-20 animate-ping bottom-20 right-20"></div>
      <div class="absolute w-full h-full bg-gradient-to-br from-black via-gray-800 to-black opacity-70"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white">{{ content.title }}</h2>
        <p class="mt-2 text-lg text-gray-300">{{ content.subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div v-for="(forms, index) in content.formss" :key="index">
            <label :for="forms.for" class="block text-sm font-medium text-gray-200">{{ forms.name }}</label>
            <input
              :type="forms.inputType"
              :id="forms.inputId"
              v-model="form[forms.for]"
              :placeholder="forms.inputPlaceholder"
              :class="['p-3 mt-1 block w-full rounded-md shadow-sm bg-gray-800 border-gray-700 text-white', errors[forms.for] ? 'border-red-500' : '']"
              required
            />
            <span v-if="errors[forms.for]" class="text-red-500 text-sm">{{ errors[forms.for] }}</span>
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-200">Asunto</label>
            <select
              id="subject"
              v-model="form.subject"
              class="p-3 mt-1 block w-full rounded-md shadow-sm bg-gray-800 border-gray-700 text-white"
              required
            >
              <option value="">Selecciona un asunto</option>
              <option value="web-development">Desarrollo Web</option>
              <option value="mobile-development">Desarrollo Móvil</option>
              <option value="ui-ux-design">Diseño UI/UX</option>
              <option value="consultation">Consultoría</option>
              <option value="collaboration">Colaboración</option>
              <option value="other">Otro</option>
            </select>
            <span v-if="errors.subject" class="text-red-500 text-sm">{{ errors.subject }}</span>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-200">Mensaje</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Cuéntame sobre tu proyecto..."
              class="p-3 mt-1 block w-full rounded-md shadow-sm bg-gray-800 border-gray-700 text-white"
              required
            ></textarea>
            <span v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</span>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            :class="['w-full py-3 px-6 rounded-md text-white font-bold transition-all', isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700']"
          >
            <span v-if="!isSubmitting && !isSubmitted">
              <i class="fa-solid fa-star mr-2"></i>Enviar Mensaje
            </span>
            <span v-else-if="isSubmitting">
              <div class="spinner-border animate-spin inline-block w-4 h-4 border-2 border-white rounded-full"></div> Enviando...
            </span>
            <span v-else>
              <svg class="inline w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5"/></svg>¡Mensaje Enviado!
            </span>
          </button>
        </form>

        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-bold text-white">Contáctame</h3>
            <p class="mt-2 text-gray-400"> Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. !!</p>

            <div class="mt-6 space-y-4">
              <div
                v-for="(method, idx) in content.contactMethods"
                :key="idx"
                class="flex items-start space-x-4"
              >
                <div class="text-indigo-400" v-html="method.icon"></div>
                <div>
                  <h4 class="font-semibold text-white">{{ method.title }}</h4>
                  <a v-if="method.link" :href="method.link" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white">{{ method.value }}</a>
                  <span v-else class="text-gray-300">{{ method.value }}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-white">Sígueme</h4>
            <div class="mt-2 flex space-x-4">
              <a
                v-for="(social, idx) in content.socialLinks"
                :key="idx"
                :href="social.link"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-indigo-600"
                v-html="social.icon"
              ></a>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <div class="mt-2 grid grid-cols-2 gap-2">
              <a href="#home" class="text-gray-400 hover:text-white">Inicio</a>
              <a href="#projects" class="text-gray-400 hover:text-white">Proyectos</a>
              <a href="#stacks" class="text-gray-400 hover:text-white">Stacks</a>
              <a href="#experience" class="text-gray-400 hover:text-white">Experiencia</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-white">DevDuvan</span>
          <span class="text-indigo-500 text-xl">.</span>
          <p>&copy; {{ currentYear }} Duvan Gomez. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = 'ContactFooter'

const content = ref({
  title : "Contáctame!!",
  subtitle: "Creemos algo genial !!!",
  formss : [
    {
      for: 'name',
      name: 'Nombre ',
      inputType: 'text',
      inputId: 'name',
      inputPlaceholder: 'Coloca tu nombre'
    },
    {
      for: 'email',
      name: 'Correo electrónico',
      inputType: 'email',
      inputId: 'email',
      inputPlaceholder: 'tu.email@ejemplo.com'
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
        link: "https://github.com/Dfutor",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/bryan-gomez-dev/",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
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
