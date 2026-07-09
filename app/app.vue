<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

</script>

<template>
  
  <navaku />
  <hero />
<about />
 <work/>
 <closethe/>

 <section class="relative bg-neutral-100 min-h-screen py-16 md:py-24 flex flex-col justify-between px-6 md:px-24 overflow-hidden">
  
  <div class="absolute inset-0 z-0 bg-[url('path-ke-foto-kamu.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"></div>
  
  <div class="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40"></div>

  <div class="relative z-10 w-full flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8 mt-12 md:mt-0">
    <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tighter leading-none text-center md:text-left">
      ping me <br class="hidden md:block" /> for work
    </h1>
    
    <p class="text-xs md:text-sm text-neutral-400 mt-6 md:mt-0 max-w-xs text-center md:text-right font-mono tracking-wider uppercase">
      // let's create something stupidly beautiful together.
    </p>
  </div>

  <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-auto pt-16">
    
    <a href="#" class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 rounded-none font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
      <span>[ instagram ]</span>
      <span class="transform group-hover:translate-x-1 transition-transform">→</span>
    </a>
    
    <a href="#" class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 rounded-none font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
      <span>[ email_me ]</span>
      <span class="transform group-hover:translate-x-1 transition-transform">→</span>
    </a>
    
    <a href="#" class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 rounded-none font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
      <span>[ cv_resume ]</span>
      <span class="transform group-hover:translate-x-1 transition-transform">→</span>
    </a>
    
  </div>

</section>

  <footeraku/>
</template> 