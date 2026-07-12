<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const isHeroActive = ref(true) 
const isMuted = ref(false)     
const heroRef = ref<HTMLElement | null>(null)

const togglediv = () => {
  isVisible.value = !isVisible.value
}

const musikacu = [
  { id: "1", artis: "hindia", title: "lupaw", musik: "asset/msc/hind.mp3", gambar: "/img/hinnd.avif" },
  { id: "2", artis: "reality club", title: "lupaw", musik: "asset/msc/real.mp3", gambar: "/img/hinnd.avif" },
]


const sfxAnginUrl = "asset/msc/wind.mp3" 

const selectedTrack = ref(musikacu[0]?.musik || '')
const audioRef = ref<HTMLAudioElement | null>(null)
const sfxRef = ref<HTMLAudioElement | null>(null)

const selectTrack = (musikUrl: string) => {
  selectedTrack.value = musikUrl
  isVisible.value = false
  
  
  if (!isHeroActive.value && audioRef.value && !isMuted.value) {
    audioRef.value.load()
    audioRef.value.play().catch(err => console.log(err))
  }
}


const initializeAmbient = () => {
  isMuted.value = false 
  
  if (isHeroActive.value && sfxRef.value) {
    sfxRef.value.play().catch(err => {
      console.log("Autoplay diblokir browser, butuh interaksi user:", err)
    })
  }
  console.log("Ambient Initialized.")
}


const stopAudio = () => {
  isMuted.value = true
  
  if (sfxRef.value) {
    sfxRef.value.pause()
    sfxRef.value.currentTime = 0
  }
  if (audioRef.value) {
    audioRef.value.pause()
    audioRef.value.currentTime = 0
  }
  console.log("Audio Stopped.")
}


let observer: IntersectionObserver | null = null

onMounted(() => {
  if (heroRef.value) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isHeroActive.value = entry.isIntersecting


        if (isMuted.value) return

        if (entry.isIntersecting) {

          if (audioRef.value) {
            audioRef.value.volume = 0.85   
          }

          if (sfxRef.value) {
            sfxRef.value.volume = 1.0
            sfxRef.value.play().catch(err => console.log(err))
          }
        } else {

          if (sfxRef.value) {
            sfxRef.value.pause()
          }

          if (audioRef.value) {
            audioRef.value.volume = 1.0
            if (audioRef.value.paused) {
              audioRef.value.play().catch(err => console.log(err))
            }
          }
        }
      })
    }, {
      threshold: 0.2 
    })

    observer.observe(heroRef.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <UMain id="home" class="bg-black min-h-screen w-full overflow-y-auto">
    
    <!-- SECTION HERO -->
    <section data-theme="dark" ref="heroRef" class="bg-black relative w-full h-screen flex flex-col items-center justify-center px-4 isolate">
      
      <!-- Video Background -->
      <video 
        autoplay 
        loop 
        muted 
        playsinline
        class="w-full h-full object-cover bg-black absolute z-0 top-0 left-0 flex items-center justify-center animate-soft-fade"
      >
        <source src="/video/bekgrond.mp4" class="bg-black" type="video/mp4">
        Browser kamu tidak mendukung pemutaran video.
      </video>
     
      <!-- Audio Elements -->
      <audio ref="audioRef" :src="selectedTrack" loop></audio>
      <audio ref="sfxRef" :src="sfxAnginUrl" loop></audio>

      <!-- Kontrol Player & Button (Glassmorphism Container) -->
      <!-- Kontrol Player & Button (Dark Glassmorphic Container) -->
<div class="z-10 w-full max-w-sm p-6 mt-20 relative font-mono text-center
            bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl 
            shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] animate-fade-in-up [animation-delay:300ms]">
  
  <!-- Dropdown Pilih Musik -->
  <div class="mb-6 w-full flex flex-col items-center relative">
    <button @click="togglediv" class="text-xs tracking-widest lowercase text-white/70 hover:text-white transition-all border-b border-dashed border-white/30 hover:border-white pb-0.5">
      {{ isVisible ? '[ close_player.exe ]' : '[ choose_wave.mp3 ]' }}
    </button>

    <!-- Dropdown menu bergaya kaca gelap pekat -->
    <div v-if="isVisible" 
         class="absolute bottom-full mb-4 w-full bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl text-left text-xs transition-all animate-fade-in-up z-20 shadow-xl">
      <div class="border-b border-white/10 pb-2 mb-2 flex justify-between items-center text-white/40">
        <span>select_track_queue</span>
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      </div>

      <ul class="space-y-1.5">
        <li v-for="item in musikacu" 
            :key="item.id"
            @click="selectTrack(item.musik)"
            :class="{'bg-white/10 text-white border-white/20': selectedTrack === item.musik, 'text-white/60 border-transparent': selectedTrack !== item.musik}"
            class="hover:bg-white/5 hover:text-white p-2 cursor-pointer transition-all flex justify-between items-center text-[11px] rounded-lg border">
          <span>↳ {{ item.artis }} - {{ item.title }}</span>
          <span v-if="selectedTrack === item.musik" class="text-[9px] tracking-tighter text-emerald-400">[QUEUED]</span>
        </li>
      </ul>
    </div>
  </div>  
  
  <!-- Container Tombol Kontrol -->
  <div class="flex gap-3 items-center justify-center">
    <!-- Tombol PLAY (Kaca Padat - High Contrast) -->
    <button @click="initializeAmbient" 
            class="flex-1 cursor-pointer text-xs bg-white text-black font-semibold px-4 py-3 rounded-xl border border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:scale-95">
      PLAY AMBIENT
    </button>

    <!-- Tombol STOP (Kaca Transparan Gelap) -->
    <button @click="stopAudio" 
            class="cursor-pointer text-xs bg-white/5 text-white/80 border border-white/10 px-4 py-3 rounded-xl hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 active:scale-95">
      STOP
    </button>
  </div>
</div>
      <!-- Judul Portfolio -->
      <h1 class="animate-tech-in pointer-events-none select-none
             text-6xl md:text-8xl lg:text-9xl 
             font-display uppercase font-extrabold 
             flex justify-center items-baseline
             gap-1 md:gap-[0.4em]
             absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 
             text-paper opacity-85 text-center whitespace-nowrap z-0">
        <span>P</span><span class="font-styling">o</span><span>r</span><span>t</span><span>f</span><span class="font-amoria">o</span><span>l</span><span>i</span><span>o</span>
      </h1>
    </section>

  </UMain>
</template>