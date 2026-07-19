<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const slides = [
  { 
    title: "About Me", 
    description: "Hello, I’m Endra. The developer behind KanvasDigital. I am a software enthusiast and creative developer dedicated to building high-performance digital solutions. By combining robust backend logic with modern frontend systems, I transform raw code into interactive and engaging web experiences." 
  },
  { 
    title: "My Experience", 
    description: "Web Architecture & Frontend: Building semantic, highly interactive interfaces with Vue 4, Tailwind CSS, and reactive state management. Deployment & Automation: Git version control, repository management, and writing scripts to automate workflows." 
  },
  { 
    title: "Tech Stack", 
    description: "Specializing in Vue/Nuxt environments, automated tooling workflows, and clean interactive styling." 
  }
]

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
const textGroupRef = ref(null)
const aboutSectionRef = ref(null)
const progressBarRef = ref(null)

const currentSlide = ref(0)
const activeText = ref(slides[0])

let ctx;
let carouselTimeline;

onMounted(() => {
  ctx = gsap.context(() => {
    // Animasi Reveal Satu Persatu
    const texts = gsap.utils.toArray('.reveal-text')
    gsap.fromTo(texts, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: textGroupRef.value,
          start: 'top center',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Carousel Logic
    const slideDuration = 4
    carouselTimeline = gsap.timeline({ repeat: -1 })
    slides.forEach((_, index) => {
      carouselTimeline
        .set(progressBarRef.value, { width: "0%" })
        .to(progressBarRef.value, { width: "100%", duration: slideDuration, ease: "none" })
        .call(() => {
          const nextIndex = (index + 1) % slides.length
          gsap.to(".carousel-content", {
            opacity: 0, y: -10, duration: 0.3,
            onComplete: () => {
              currentSlide.value = nextIndex
              activeText.value = slides[nextIndex]
              gsap.to(".carousel-content", { opacity: 1, y: 0, duration: 0.4 })
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
  <!-- Section 1: Full Screen & Centered -->
   <section 
  ref="sectionRef"
  class="bg-black h-screen w-full flex flex-col items-center justify-center text-white select-none overflow-hidden"
  data-theme="dark"
>
  <!-- 
    PERBAIKAN UTAMA:
    - Di mobile (default): Menggunakan `h-full py-16 justify-between` agar teks menyebar rata dari atas ke bawah.
    - Di desktop (md:): Menggunakan `md:h-auto md:justify-center md:gap-4` untuk mengembalikan teks berkumpul di tengah dengan gap yang presisi.
  -->
  <div 
    ref="textGroupRef" 
    class="flex flex-col items-center justify-between h-full w-full px-6 py-12 md:py-0 md:h-auto md:justify-center md:gap-4"
  >
    <h1 class="reveal-text font-mono text-[9vw] md:text-8xl font-medium uppercase tracking-tighter leading-none text-center">
      Kanvas Digital
    </h1>
    <h1 class="reveal-text text-lg md:text-4xl font-normal text-neutral-400 text-center">
      Make Your Dream
    </h1>
    <h1 class="reveal-text font-mono text-[10vw] md:text-8xl font-medium uppercase tracking-tighter leading-none text-center">
      Come True
    </h1>
    <h1 class="reveal-text text-lg md:text-4xl font-normal text-neutral-400 text-center">
      With Code.
    </h1>
    <h1 class="reveal-text font-mono text-[10vw] md:text-8xl font-medium uppercase tracking-tighter leading-none text-center">
      In internet
    </h1>
    <h1 class="reveal-text text-lg md:text-4xl font-normal text-neutral-400 text-center">
      Canvas.
    </h1>  
  </div>
</section>
  <!-- Section 2 -->
  <section ref="aboutSectionRef" data-theme="dark" class="bg-neutral-950 py-24 px-6 md:px-0 border-t border-neutral-900 min-h-screen flex items-center"> 
    <div class="grid gap-8 mx-auto grid-cols-1 md:grid-cols-2 items-center text-white max-w-6xl w-full">
      <div class="flex flex-col justify-between min-h-[300px] relative">
        <div class="carousel-content space-y-4">
          <span class="font-mono text-xs text-neutral-500 uppercase tracking-widest">// who i am</span>
          <h2 class="text-3xl font-medium uppercase">{{ activeText.title }}</h2>
          <p class="max-w-md text-sm text-neutral-400 leading-relaxed">{{ activeText.description }}</p>
          
          <div v-if="currentSlide === 2" class="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-4">
            <div v-for="tech in technologies" :key="tech.name" class="flex flex-col items-center p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-all">
              <Icon :name="tech.icon" class="w-6 h-6 text-neutral-500" :class="tech.color" />
              <span class="mt-1.5 text-[10px] font-mono text-neutral-500">{{ tech.name }}</span>
            </div>
          </div>
        </div>
        <div class="w-full h-[2px] bg-neutral-900 rounded-full overflow-hidden mt-6">
          <div ref="progressBarRef" class="h-full bg-white w-0"></div>
        </div>
      </div>

      <div class="hidden md:flex flex-col gap-4 text-3xl font-medium uppercase text-right">
        <h1 v-for="(slide, index) in slides" :key="index" class="transition-all duration-500" :class="currentSlide === index ? 'text-white' : 'text-neutral-800'">
          {{ slide.title }}
        </h1>
      </div>
    </div>
  </section>
</template> 