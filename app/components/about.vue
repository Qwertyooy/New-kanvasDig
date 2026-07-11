<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const slides = [
  { 
    title: "About Me", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. First slide breakdown." 
  },
  { 
    title: "My Experience", 
    description: "Building responsive frontends and working through complex state logic in modern web frameworks." 
  },
  { 
    title: "Tech Stack", 
    description: "Specializing in Vue/Nuxt environments, automated tooling workflows, and clean interactive styling." 
  }
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
    class="bg-black py-16 md:py-26 items-center justify-center flex flex-col gap-0.5 md:gap-8 text-white min-h-screen select-none overflow-hidden"
    data-theme="dark"
    >
    <h1 class="reveal-text text-4xl md:text-8xl font-medium opacity-0 translate-y-4 uppercase tracking-tighter">Kanvas Digital</h1>
    <h1 class="reveal-text text-xl md:text-4xl font-normal opacity-0 translate-y-4 tracking-tight text-neutral-400">Make Your Dream</h1>
    <h1 class="reveal-text text-4xl md:text-8xl font-medium opacity-0 translate-y-4 uppercase tracking-tighter">Come True</h1>
    <h1 class="reveal-text text-xl md:text-4xl font-normal opacity-0 translate-y-4 tracking-tight text-neutral-400">With Code.</h1>
    <h1 class="reveal-text text-4xl md:text-8xl font-medium opacity-0 translate-y-4 uppercase tracking-tighter">In internet</h1>
    <h1 class="reveal-text text-xl md:text-4xl font-normal opacity-0 translate-y-4 tracking-tight text-neutral-400">Canvas.</h1>  
  </section>

 
  <section ref="aboutSectionRef" class="bg-neutral-950 py-24 px-6 md:px-0 border-t border-neutral-900 selection:bg-white selection:text-black"> 
    <div class="grid gap-11 mx-0 md:mx-28 grid-cols-1 md:grid-cols-2 items-center text-white max-w-6xl md:mx-auto">
      
      <div class="flex flex-col justify-between h-[150px] md:h-[150px] relative">
        <div class="carousel-content space-y-4">
          <span class="font-mono text-xs text-neutral-500 uppercase tracking-widest">// 0{{ currentSlide + 1 }} . context</span>
          <h2 class="text-3xl font-medium tracking-tight text-neutral-100 uppercase">{{ activeText.title }}</h2>
          <p class="max-w-md text-sm md:text-base text-neutral-400 leading-relaxed">{{ activeText.description }}</p>
        </div>
        
       
        <div class="w-full h-[2px] bg-neutral-900 rounded-full overflow-hidden mt-auto">
          <div ref="progressBarRef" class="h-full bg-white will-change-[width] w-0"></div>
        </div>
      </div>

      
      <div class="flex flex-col gap-4 py-4 md:py-0 font-medium tracking-tight text-3xl md:text-5xl uppercase select-none">
        <h1 
          v-for="(slide, index) in slides" 
          :key="index"
          class="transition-all duration-500 ease-out"
          :class="currentSlide === index ? 'text-white translate-x-2' : 'text-neutral-800 scale-95'"
        >
          {{ slide.title }}
        </h1>
      </div>

    </div>
  </section>
</template> 