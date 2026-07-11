<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref(false)

const togglediv = () => {
  isVisible.value = !isVisible.value
}

const musikacu = [
  { id: "1", artis: "hindia", title: "lupaw", musik: "asset/msc/hind.mp3", gambar: "/img/hinnd.avif" },
]

const selectedTrack = ref(musikacu[0]?.musik || '')
const audioRef = ref<HTMLAudioElement | null>(null)

const selectTrack = (musikUrl: string) => {
  selectedTrack.value = musikUrl
  isVisible.value = false
}

const initializeApp = () => {
  if (audioRef.value && selectedTrack.value) {
    audioRef.value.load()
    audioRef.value.play().catch(err => {
      console.log("Autoplay diblokir browser, butuh interaksi user:", err)
    })
  }
  console.log("Portfolio Initialized dengan musik:", selectedTrack.value)
}
</script>

<template>
  <UMain class="bg-cream h-screen w-full flex items-center justify-center overflow-hidden">
    <section class="relative w-full max-w-6xl h-full flex flex-col items-center justify-center px-4 isolate">

     
      <audio ref="audioRef" :src="selectedTrack" loop></audio>

  
      <div class="flex flex-col items-center justify-center z-10 w-full max-w-md px-4 text-center mt-20 relative">
        
       
        <div class="animate-fade-in-up [animation-delay:600ms] mb-6 w-full flex flex-col items-center">
          <button @click="togglediv" class="text-xs font-mono tracking-widest lowercase text-neutral-500 hover:text-black transition-all border-b border-dashed border-neutral-300 hover:border-black pb-0.5">
            {{ isVisible ? '[ close_player.exe ]' : '[ choose_wave.mp3 ]' }}
          </button>

        
          <div v-if="isVisible" 
               class="absolute bottom-full mb-4 w-64 bg-white/80 backdrop-blur-md border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none text-left font-mono text-xs transition-all animate-fade-in-up">
            <div class="border-b border-black pb-2 mb-2 flex justify-between items-center text-neutral-400">
              <span>select_track</span>
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            

            <ul class="space-y-2">
              <li v-for="item in musikacu" 
                  :key="item.id"
                  @click="selectTrack(item.musik)"
                  :class="{'bg-black text-white': selectedTrack === item.musik}"
                  class="hover:bg-black hover:text-white p-1.5 cursor-pointer transition-colors flex justify-between items-center text-[11px]">
                <span>↳ {{ item.artis }} - {{ item.title }}</span>
                <span v-if="selectedTrack === item.musik" class="text-[9px] tracking-tighter">[ACTIVE]</span>
              </li>
            </ul>
          </div>
        </div>  
        
        
        <button @click="initializeApp" class="animate-fade-in-up [animation-delay:300ms] cursor-pointer font-mono text-sm bg-neutral-900 text-neutral-100 px-2 py-1.5 md:px-8 md:py-3 rounded-md border border-neutral-700 hover:bg-transparent hover:text-neutral-900 hover:border-neutral-900 hover:font-amoria hover:tracking-widest transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-none">
          &lt; INITIALIZE &gt;
        </button>
      </div>


     <h1 class="animate-tech-in pointer-events-none select-none
           text-6xl md:text-8xl lg:text-9xl 
           font-display uppercase font-extrabold 

           flex justify-center items-baseline
           gap-1 md:gap-[0.4em]
           absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 
           text-ink/10 text-center whitespace-nowrap z-0">
  <span>P</span>
  <span class="font-styling">o</span>
  <span>r</span>
  <span>t</span>
  <span>f</span>
  <span class="font-amoria">o</span>
  <span>l</span>
  <span>i</span>
  <span>o</span>
</h1>


    </section>
  </UMain>
</template>