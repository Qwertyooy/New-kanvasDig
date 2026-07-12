<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


const NavLink = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Work", href: "#work" },
    { title: "Contact", href: "#contact" },
]

const isDarkSection = ref(false)
let observer = null

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


const isOpen = ref(false)
</script>

<template>  
   
    <header class="animate-tech-in fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full p-1 backdrop-blur-2xl bg-white/10">
     <div class="flex items-center mx-4 w-full justify-between p-1">
           <a 
            :class="[
                'text-sm md:text-xl font-semibold transition-colors duration-300',
                isDarkSection ? 'text-paper' : 'text-ink',
            ]"
        >
            KanvasDigital.my.id
        </a>
       
        <nav class="py-2 items-center  hidden md:flex">
            <a
                v-for="link in NavLink"
                :key="link.title"
                :href="link.href"
                :class="['relative inline-block px-6 text-sm uppercase text-ink bg-gradient-to-r  bg-[length:0%_100%] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white', isDarkSection ? 'text-paper from-graphite  to-graphite' : 'text-ink from-ink to-ink']"
            >
                {{ link.title }}
            </a>
        </nav>

        
        <button :class="[' px-6 py-1 text-ink rounded-lg font-sans hidden md:flex font-medium  items-center gap-2 text-lg shadow-lg bg-gradient-to-r bg-[length:0%_100%] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-paper border', isDarkSection ? 'text-paper from-graphite to-graphite ' : 'text-ink from-ink to-ink']"> 
            lets collab <span class="text-lg">→</span> 
        </button>

        
        <button 
            @click="isOpen = !isOpen" 
            class="block md:hidden p-2 focus:outline-none z-50"
            aria-label="Toggle Menu"
        >
            <div :class="['w-6 h-5 flex flex-col justify-between relative',
            isDarkSection ? 'text-paper' : 'text-ink']">
                
                <span :class="['w-full h-0.5 bg-current transition-all duration-300 origin-left', isOpen ? 'rotate-45 translate-x-1' : '']"></span>
                <span :class="['w-full h-0.5 bg-current transition-all duration-300', isOpen ? 'opacity-0' : '']"></span>
                <span :class="['w-full h-0.5 bg-current transition-all duration-300 origin-left', isOpen ? '-rotate-45 translate-x-1' : '']"></span>
            </div>
        </button>
        </div>
    </header>

    
    <div 
        :class="[
            'fixed inset-0 z-40 flex flex-col items-start justify-center transition-all duration-500 ease-in-out md:hidden', 
            isDarkSection ? 'bg-ink' : 'bg-paper',
            isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible',
            
        ]"
    >
        
        <nav class="flex flex-col items-start gap-8 w-full max-w-sm px-6">
            <a
                v-for="link in NavLink"
                :key="link.title"
                :href="link.href"
                class="relative inline-block px-6 text-sm uppercase text-graphite bg-gradient-to-r from-graphite to-graphite bg-[length:0%_100%] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-white"
            >
                {{ link.title }}
            </a>
        </nav>
        
        
        <button :class="['mt-12 mx-8 px-6 py-1 text-graphite  rounded-lg font-sans font-medium flex items-center gap-2 text-lg shadow-lg bg-gradient-to-r from-graphite to-graphite bg-[length:0%_100%] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_100%] hover:text-paper border', isDarkSection ? 'text-paper' : 'text-ink']"> 
            lets collab <span class="text-lg">→</span> 
        </button>
    </div>
</template>