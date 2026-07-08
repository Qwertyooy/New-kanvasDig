<script setup>
 const musik = [
  {id: 1,title:'Hindia', artist: '', url: '',image: ''},
  {id: 2,title:'', artist: '', url: '',image: ''},
 ]

 const workacu = [
  {num:1, title:'', desc: '', url: '',image: ''},
  {num:2, title:'', desc: '', url: '',image: ''},
  {num:3, title:'', desc: '', url: '',image: ''},
 ]
</script>

<template>

  <navaku />
   
  <UMain class="bg-cream min-h-screen flex items-center justify-center">
    <section class="relative w-full max-w-4xl h-screen flex flex-col items-center justify-center px-4">
      
      <div class="bg-red-400 items-center flex flex-col justify-center mt-36 z-10 w-full max-w-md px-4">
        <div class="mb-3 px-6 md:px-20 py-4 border rounded-2xl w-full"></div>
        <button class="cursor-pointer bg-neutral-700 text-paper px-6 py-3 rounded-md font-sans hover:bg-neutral-800 transition">
          Get Started
        </button>
      </div>

      <h1 class="text-4xl sm:text-6xl md:text-9xl font-display uppercase font-extrabold tracking-[10px] md:tracking-[30px] absolute bottom-8 text-ink/10 text-center w-full">
        Portofolio
      </h1>

    </section>
  </UMain>

  <section class="bg-black py-16 md:py-26 items-center justify-center flex flex-col gap-6 md:gap-8 text-white">
    <h1>lorem ipsum</h1>
    <h1>lorem ipsum</h1>
    <h1>lorem ipsum</h1>
    <h1>lorem ipsum</h1>
    <h1>lorem ipsum</h1>
    <h1>lorem ipsum</h1>  
  </section>

  <section class="bg-graphite py-16 px-6 md:px-0"> 
    <div class="grid gap-8 mx-0 md:mx-28 grid-cols-1 md:grid-cols-2 items-center justify-between text-white">
      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-bold">About Me</h1>
        <p class="text-lg text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <h1 class="text-2xl font-bold">About Me</h1>
        <p class="text-lg text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
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