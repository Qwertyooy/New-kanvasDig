<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const slides = [
  { 
    title: "About Me", 
    description: "Hello, I’m Endra.The developer behind KanvasDigital.I am a software enthusiast and creative developer dedicated to building high-performance digital solutions. By combining robust backend logic with modern frontend systems, I transform raw code into interactive and engaging web experiences. I build spaces that are not merely seen, but felt." 
  },
  { 
    title: "My Experience", 
    description: "Web Architecture & Frontend: Building semantic, highly interactive interfaces with Vue 4, Tailwind CSS, and reactive state management. Implementing Intersection Observers for seamless, scroll-driven UI themes. Deployment & Automation: Git version control, repository management, handling web hosting platforms, and writing scripts to automate repetitive workflows." 
  },
  { 
    title: "Tech Stack", 
    description: "Specializing in Vue/Nuxt environments, automated tooling workflows, and clean interactive styling." 
  }
]

// Data Ikon untuk Tech Stack (Slide indeks ke-2)
const technologies = [
  { name: 'HTML5', icon: 'simple-icons:html5', color: 'hover:text-[#E34F26]' },
  { name: 'JavaScript', icon: 'simple-icons:javascript', color: 'hover:text-[#F7DF1E]' },
  { name: 'TypeScript', icon: 'simple-icons:typescript', color: 'hover:text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', color: 'hover:text-[#06B6D4]' },
  { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs', color: 'hover:text-[#00DC82]' },
  { name: 'Git', icon: 'simple-icons:git', color: 'hover:text-[#F05032]' }
]

gsap.registerPlugin(ScrollTrigger)
const sectionRef = ref(null)
const aboutSectionRef = ref(null)
const progressBarRef = ref(null)

const currentSlide = ref(0)
const activeText = ref(slides[0])

let ctx;
let carouselTimeline;

onMounted(() => {
  ctx = gsap.context(() => {
    
    const target = gsap.utils.toArray('.reveal-text')
    target.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 50%',  
          scrub: true,
          onLeave: () => gsap.to(el, { opacity: 0, y: -20, duration: 0.3 }),
          onEnterBack: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.3 })
        }
      })
    })

    const slideDuration = 4 // Durasi tiap slide (detik)
    carouselTimeline = gsap.timeline({ repeat: -1 })

    slides.forEach((_, index) => {
     
      carouselTimeline
     
      .set(progressBarRef.value, { width: "0%" })
        .to(progressBarRef.value, {
          width: "100%",
          duration: slideDuration,
          ease: "none"
        })
     
        .call(() => {
          const nextIndex = (index + 1) % slides.length
          
          gsap.to(".carousel-content", {
            opacity: 0,
            y: -10,
            duration: 0.3,
            onComplete: () => {
              currentSlide.value = nextIndex
              activeText.value = slides[nextIndex]
              gsap.to(".carousel-content", { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
            }
          })
        })
    })

    ScrollTrigger.create({
      trigger: aboutSectionRef.value,
      start: "top 80%",
      onEnter: () => carouselTimeline.play(),
      onLeaveBack: () => carouselTimeline.pause(),
    })

  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  if (carouselTimeline) carouselTimeline.kill()
})
</script>

<template>  
  
  <section 
    ref="sectionRef"
    class="bg-black py-10 md:py-26 items-center justify-center flex flex-col gap-0.5 md:gap-8 text-white h-full select-none overflow-hidden"
    data-theme="dark"
  >
    <h1 class="reveal-text font-amoria text-4xl md:text-8xl font-medium opacity-0 translate-y-4 uppercase tracking-tighter">Kanvas Digital</h1>
    <h1 class="reveal-text text-xl md:text-4xl font-normal opacity-0 translate-y-4 tracking-tight text-neutral-400">Make Your Dream</h1>
    <h1 class="reveal-text font-amoria text-4xl md:text-8xl font-medium opacity-0 translate-y-4 uppercase tracking-tighter">Come True</h1>
    <h1 class="reveal-text text-xl md:text-4xl font-normal opacity-0 translate-y-4 tracking-tight text-neutral-400">With Code.</h1>
    <h1 class="reveal-text font-amoria text-4xl md:text-8xl font-medium opacity-0 translate-y-4 uppercase tracking-tighter">In internet</h1>
    <h1 class="reveal-text text-xl md:text-4xl font-normal opacity-0 translate-y-4 tracking-tight text-neutral-400">Canvas.</h1>  
  </section>

  <section 
  ref="aboutSectionRef" 
  class="bg-neutral-950 py-24 px-6 md:px-0 border-t border-neutral-900 selection:bg-white selection:text-black"
  data-theme="dark"
  > 
  
  <div class="grid gap-8 mx-0 md:mx-28 grid-cols-1 md:grid-cols-2 items-center text-white max-w-6xl md:mx-auto">
      
    
      <div class="flex flex-col justify-between min-h-[320px] md:min-h-[260px] relative">
        <div class="carousel-content space-y-4">
          <span class="font-mono text-xs text-neutral-500 uppercase tracking-widest">// who i am</span>
          <h2 class="text-3xl font-medium tracking-tight text-neutral-100 uppercase">{{ activeText.title }}</h2>
          <p class="max-w-md text-xs md:text-sm text-neutral-400 leading-relaxed">{{ activeText.description }}</p>
          
          
          <div v-if="currentSlide === 2" class="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-4 animate-fade-in">
            <div 
              v-for="tech in technologies" 
              :key="tech.name"
              class="flex flex-col items-center justify-center p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-neutral-700 group/icon"
            >
              <Icon 
                :name="tech.icon" 
                class="w-6 h-6 text-neutral-500 transition-colors duration-300"
                :class="tech.color"
              />
              <span class="mt-1.5 text-[10px] font-mono text-neutral-500 group-hover/icon:text-neutral-300 transition-colors duration-300">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="w-full h-[2px] bg-neutral-900 rounded-full overflow-hidden mt-6">
          <div ref="progressBarRef" class="h-full bg-white will-change-[width] w-0"></div>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center text-center gap-4 py-4 md:py-0 font-medium tracking-tight text-3xl md:text-5xl uppercase select-none">
        <h1 
          v-for="(slide, index) in slides" 
          :key="index"
          class="transition-all duration-500 ease-out cursor-pointer"
          :class="currentSlide === index ? 'text-white translate-x-2' : 'text-neutral-800 scale-95'"
        >
          {{ slide.title }}
        </h1>
      </div>

    </div>
  </section>
</template>
