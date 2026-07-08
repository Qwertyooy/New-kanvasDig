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

const activeIndex = ref(0)
const progress = ref(0)
let progressTween = null

 const musik = [
  {id: 1,title:'Hindia', artist: '', url: '',image: ''},
  {id: 2,title:'', artist: '', url: '',image: ''},
 ]

 const workacu = [
  {num:1, title:'', desc: '', url: '',image: ''},
  {num:2, title:'', desc: '', url: '',image: ''},
  {num:3, title:'', desc: '', url: '',image: ''},
 ]

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const targets = gsap.utils.toArray('.reveal-text')
    
   
    targets.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,          
          start: 'top 85%',     
          end: 'top 50%',     
          scrub: true,        
          
        }
      })
    })

  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})

const startTimer = () => {
  // Reset reactive progress bar value
  progress.value = 0
  
  if (progressTween) progressTween.kill()

  // Animate the progress ref from 0 to 100
  progressTween = gsap.to(progress, {
    value: 100,
    duration: 5, // Duration per slide in seconds
    ease: 'none', // Strict linear speed for an accurate time bar
    onComplete: () => {
      // Loop smoothly back to 0 if we hit the end of the array
      activeIndex.value = (activeIndex.value + 1) % slides.length
      startTimer() // Recurse to initiate next slide progress loop
    }
  })
}

// 3. Allow manual user override if they click on indicator dots
const goToSlide = (index) => {
  activeIndex.value = index
  startTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (progressTween) progressTween.kill()
})
</script>

<template>
  
  <navaku />
  <hero />

<section 
    ref="sectionRef"
    class="bg-black py-16 md:py-26 items-center justify-center flex flex-col gap-6 md:gap-8 text-white min-h-screen"
  >
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">lorem ipsum 1</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">lorem ipsum 2</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">lorem ipsum 3</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">lorem ipsum 4</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">lorem ipsum 5</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">lorem ipsum 6</h1>  
  </section>

  <section class="bg-graphite py-16 px-6 md:px-0"> 
    <div class="grid gap-8 mx-0 md:mx-28 grid-cols-1 md:grid-cols-2 items-center justify-between text-white">
     <div class="flex flex-col gap-6 max-w-xl mx-auto p-6 bg-neutral-900 text-white rounded-xl">
    
    <!-- Progress Bar Container -->
    <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
      <!-- The dynamic bar width tied to our GSAP progress value -->
      <div 
        class="h-full bg-emerald-500 rounded-full will-change-[width]"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>

    <!-- Active Slide Content Area -->
    <div class="min-h-[140px] flex flex-col gap-3 justify-center">
      <!-- Key forcing fresh DOM mounting for smooth native or CSS transitions -->
      <div :key="activeIndex" class="flex flex-col gap-2 transition-all duration-300">
        <h1 class="text-2xl font-bold">
          {{ slides[activeIndex].title }}
        </h1>
        <p class="text-lg text-white/70">
          {{ slides[activeIndex].description }}
        </p>
      </div>
    </div>

    <!-- Slide Indicators (Dots) -->
    <div class="flex gap-2 justify-center mt-1  ">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="h-2 rounded-full transition-all duration-300"
        :class="activeIndex === index ? 'w-6 bg-emerald-500' : 'w-2 bg-white/20'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>

  </div>
      <div class="bg-red-400 flex text-2xl md:text-4xl font-bold items-center justify-center flex-col gap-4 py-8 md:py-0">
        <h1>lorem ipsum</h1>
        <h1>lorem ipsum</h1>
        <h1>lorem ipsum</h1>
        <h1>lorem ipsum</h1>
        <h1>lorem ipsum</h1>
      </div>
    </div>
  </section>

  <section class="bg-black py-16 px-6 md:px-0"> 
    <div class="mx-0 md:mx-28">
      <h1 class="text-4xl font-bold text-white">My Works</h1>
      <div class="grid grid-rows-3 mx-auto gap-8 mt-8">
        <div v-for="work in workacu" :key="work.num" class="bg-red-400 flex items-center justify-center text-white text-xl md:text-2xl font-bold h-48 px-4 text-center">
          <h1>{{ work.title || 'lorem ipsum' }}</h1>
        </div>
      </div>
    </div>
  </section>
    
  <section class="relative bg-graphite min-h-screen pt-32 pb-12 text-center flex flex-col items-center justify-between px-4">
    <div></div>

    <div class="flex flex-col gap-2 md:gap-4 items-center justify-center">
      <h1 class="text-5xl md:text-7xl font-bold text-white">Close</h1>
      <h1 class="text-5xl md:text-7xl font-bold text-white">The</h1>
      <h1 class="text-5xl md:text-7xl font-bold text-white">Gap</h1>
    </div>

    <p class="text-xl font-bold text-white mt-auto pt-16">
      lorem ipsum
    </p>
  </section>

  <section class="bg-black min-h-screen py-16 md:py-24 flex flex-col justify-between px-6 md:px-0">
    
    <div class="mx-0 md:mx-28 relative pb-24 md:pb-16 flex flex-col items-center md:block">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-center justify-center flex text-white uppercase tracking-widest2">
        ping me for work
      </h1>
      <h1 class="text-lg md:text-xl text-white mt-4 md:mt-0 static md:absolute md:bottom-0 md:right-0 text-center md:text-right font-light italic opacity-80">
        Lorem ipsum dolor sit amet
      </h1>
    </div>

    <div class="mx-0 md:mx-48 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-auto pt-12">
      <a href="#" class="text-white border border-white/20 p-4 text-center rounded block">Link 1</a>
      <a href="#" class="text-white border border-white/20 p-4 text-center rounded block">Link 2</a>
      <a href="#" class="text-white border border-white/20 p-4 text-center rounded block">Link 3</a>
    </div>

  </section>

  <footeraku/>
</template>