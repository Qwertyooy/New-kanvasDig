<script setup lang="ts">
</script>

<template>
  <section 
    id="contact" 
    data-theme="dark" 
    class="relative bg-neutral-950 min-h-screen py-16 md:py-24 flex flex-col justify-between px-6 md:px-24 overflow-hidden"
  >
    <div class="absolute inset-0 z-0 bg-[url('/path-ke-foto-kamu.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity" />
    
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />

    <div class="relative z-10 w-full flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8 mt-12 md:mt-0">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-amoria font-extrabold text-white uppercase tracking-tighter leading-none text-center md:text-left">
        ping <span class="font-styling">me</span> <br class="md:block" /> 
        <span class="font-styling">for</span> work
      </h1>
      
      <p class="text-xs md:text-sm text-neutral-400 mt-6 md:mt-0 max-w-xs text-center md:text-right font-mono tracking-wider uppercase">
        // let's create something useful and beautiful together.
      </p>
    </div>

    <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full mt-auto pt-16">
      
      <NuxtLink 
        to="https://instagram.com/nayooew" 
        target="_blank" 
        class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span>[ instagram ]</span>
        <span class="transform group-hover:translate-x-1 transition-transform">→</span>
      </NuxtLink>
      
      <NuxtLink 
        to="mailto:xyznayo@gmail.com?subject=Halo%20KanvasDigital" 
        class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span>[ email_me ]</span>
        <span class="transform group-hover:translate-x-1 transition-transform">→</span>
      </NuxtLink>
      
      <NuxtLink 
        to="https://wa.me/6282256690579?text=Halo%20KanvasDigital,%20saya%20tertarik%20untuk%20collab" 
        target="_blank" 
        class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span>[ whatsapp ]</span>
        <span class="transform group-hover:translate-x-1 transition-transform">→</span>
      </NuxtLink>

      <NuxtLink 
        to="https://drive.google.com/drive/folders/1LFM8gKQ7_8JlnI4PpJotJtx2sD0dkg5n?usp=drive_link" 
        target="_blank" 
        class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span>[ cv_resume ]</span>
        <span class="transform group-hover:translate-x-1 transition-transform">→</span>
      </NuxtLink>
      
      <NuxtLink 
        to="https://github.com/Qwertyooy" 
        target="_blank" 
        class="group flex justify-between items-center text-white border border-white/20 hover:border-white bg-neutral-900/30 backdrop-blur-md px-6 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span>[ github ]</span>
        <span class="transform group-hover:translate-x-1 transition-transform">→</span>
      </NuxtLink>

    </div>
  </section>
</template>