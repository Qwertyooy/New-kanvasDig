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
  const sectionRef =ref(null)
  let ctx;
   
  onMounted(() => {
    ctx = gsap.context(() => {
        const target = gsap.utils.toArray('.reveal-text')

        target.forEach((el) => {
            gsap.to(el,{
            opacity: 1,
            y:0,
            duration:2,
            scrollTrigger:{
                trigger:el,
                start:'top 85%',
                end:'top 50%',  
                scrub:true,

                onLeave: () => gsap.to(el, { opacity: 0, y: -20, duration: 0.3 }),
          onEnterBack: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.3 })
            }
            })
        })
    },sectionRef.value)
  })

  onUnmounted(() => {
        if(ctx) ctx.revert()
    })
</script>

<template>  

    <section 
    ref="sectionRef"
    class="bg-black py-16 md:py-26 items-center justify-center flex flex-col gap-0.5 md:gap-8 text-white min-h-screen"
  >
    <h1 class="reveal-text text-8xl font-bold opacity-0 translate-y-4 uppercase">Kanvas Digital</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">Make Your Dream</h1>
    <h1 class="reveal-text text-8xl font-bold opacity-0 translate-y-4 uppercase">Come True</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">With Code.</h1>
    <h1 class="reveal-text text-8xl font-bold opacity-0 translate-y-4 uppercase">In internet</h1>
    <h1 class="reveal-text text-4xl font-bold opacity-0 translate-y-4">Canvas.</h1>  
  </section>

  <section class="bg-graphite py-16 px-6 md:px-0"> 
    <div class="grid gap-8 mx-0 md:mx-28 grid-cols-1 md:grid-cols-2 justify-between text-white">
   <div class=" items-start flex flex-col">
    <div class="h-1/2 w-full    ">
        <h1 class="text-2xl font-bold uppercase">about</h1>
        <p class="max-w-full text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sint, repellendus nihil ad aut quod eveniet optio, incidunt aliquid numquam rem accusantium officia velit! Cumque, doloremque. Alias rem architecto quae?</p>
        <div class="h-1 w-full rounded-2xl bg-amber-50 mt-3"></div>
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


</template>