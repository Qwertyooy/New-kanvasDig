<script setup>
import { ref, onMounted, onUnmounted } from 'vue'



 const musik = [
  {id: 1,title:'Hindia', artist: '', url: '',image: ''},
  {id: 2,title:'', artist: '', url: '',image: ''},
 ]


</script>

<template>
  
  <navaku />
  <hero />
<about />
 <work/>
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