<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const NavLink = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Work", href: "#work" },
    { title: "Contact", href: "#contact" },
]

const isDarkSection = ref(false)
const isOpen = ref(false)
let observer = null

// Fungsi Menangani klik navigasi, scroll mulus, dan tutup menu mobile
const handleNavigation = (e, href) => {
  e.preventDefault() // Mencegah perilaku default browser lompat instan
  isOpen.value = false // Otomatis tutup menu mobile jika terbuka

  const targetSection = document.querySelector(href)
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isDarkSection.value = entry.target.getAttribute('data-theme') === 'dark'
            }
        });
    }, {
        rootMargin: "-0px 0px -90% 0px", 
        threshold: 0
    })

    document.querySelectorAll('section').forEach(section => observer.observe(section))
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<template>  
    <!-- HEADER (Glassmorphic Top Bar) -->
    <header :class="[
        'animate-tech-in fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full transition-all duration-300 border-b select-none',
        isDarkSection 
          ? 'bg-black/20 backdrop-blur-md border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
          : 'bg-white/20 backdrop-blur-md border-black/5 shadow-[0_4px_30px_rgba(255,255,255,0.2)]'
    ]">
      <div class="flex items-center mx-4 w-full justify-between p-2">
        <a 
          :class="[
              'text-sm md:text-lg font-semibold tracking-wider font-mono transition-colors duration-300',
              isDarkSection ? 'text-paper' : 'text-ink',
          ]"
        >
          KanvasDigital.my.id
        </a>
       
        <!-- Navigation Desktop -->
        <nav class="py-2 items-center hidden md:flex font-mono">
          <a
              v-for="link in NavLink"
              :key="link.title"
              :href="link.href"
              @click="handleNavigation($event, link.href)"
              :class="[
                'relative inline-block px-5 text-xs uppercase tracking-widest bg-gradient-to-r bg-[length:0%_100%] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_100%] active:bg-[length:100%_100%]', 
                isDarkSection 
                  ? 'text-white/70 from-white/10 to-white/10 hover:text-white active:text-white' 
                  : 'text-ink/70 from-ink/10 to-ink/10 hover:text-ink active:text-ink'
              ]"
          >
              {{ link.title }}
          </a>
        </nav>

        <!-- Tombol "lets collab" Desktop (Ditambahkan Active) -->
        <NuxtLink 
        to="https://wa.me/6282256690579?text=Halo%20KanvasDigital,%20saya%20tertarik%20untuk%20collab" 
        target="_blank"
            :class="[
                'group px-5 py-1.5 rounded-xl font-mono hidden md:flex items-center gap-2 text-xs uppercase tracking-wider transition-all duration-300 border backdrop-blur-sm shadow-sm select-none', 
                isDarkSection 
                ? 'bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40 active:scale-95' 
                : 'bg-black/5 text-ink border-black/10 hover:bg-black/10 hover:border-black/20 active:scale-95'
            ]"
            > 
            lets collab 
            <span class="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span> 
        </NuxtLink>

        <!-- Hamburger Button Mobile (Ditambah Efek Active saat Di-tap) -->
        <button 
            @click="isOpen = !isOpen" 
            class="block md:hidden p-2 focus:outline-none z-50 rounded-lg transition-colors active:bg-white/10"
            aria-label="Toggle Menu"
        >
            <div :class="['w-5 h-4 flex flex-col justify-between relative', isDarkSection ? 'text-paper' : 'text-ink']">
                <span :class="['w-full h-0.5 bg-current transition-all duration-300 origin-left', isOpen ? 'rotate-45 translate-x-1' : '']"></span>
                <span :class="['w-full h-0.5 bg-current transition-all duration-300', isOpen ? 'opacity-0' : '']"></span>
                <span :class="['w-full h-0.5 bg-current transition-all duration-300 origin-left', isOpen ? '-rotate-45 translate-x-1' : '']"></span>
            </div>
        </button>
      </div>
    </header>

    <!-- MOBILE MENU DRAWER (Glassmorphic Fullscreen) -->
    <div 
        :class="[
            'fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden backdrop-blur-xl select-none', 
            isDarkSection ? 'bg-black/70' : 'bg-white/70',
            isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible',
        ]"
    >
        <nav class="flex flex-col items-center gap-6 w-full max-w-sm px-6 font-mono">
            <!-- Menu Tautan Mobile dengan Respons Sentuhan Kilat (Active) -->
            <a
                v-for="link in NavLink"
                :key="link.title"
                :href="link.href"
                @click="handleNavigation($event, link.href)"
                :class="[
                  'text-sm uppercase tracking-widest py-2 px-6 w-full text-center rounded-xl transition-all duration-200 border border-transparent',
                  isDarkSection 
                    ? 'text-white/60 hover:text-white active:bg-white/5 active:text-white active:border-white/10' 
                    : 'text-ink/60 hover:text-ink active:bg-black/5 active:text-ink active:border-black/5'
                ]"
            >
                {{ link.title }}
            </a>
        </nav>
        
        <!-- Tombol Mobile "lets collab" (Dioptimalkan Ukuran Ketukan & Active-nya) -->
        <button 
          @click="isOpen = false"
          :class="[
            'mt-8 px-6 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 border backdrop-blur-sm shadow-md active:scale-95 select-none', 
            isDarkSection 
              ? 'bg-white/10 text-white border-white/20 active:bg-white/20 active:border-white/40' 
              : 'bg-black/5 text-ink border-black/10 active:bg-black/10 active:border-black/20'
          ]"
        > 
            lets collab <span>→</span> 
        </button>
    </div>      
</template>