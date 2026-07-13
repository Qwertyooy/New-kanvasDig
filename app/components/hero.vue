<!-- pages/index.vue (atau komponen utama kamu) -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isLoading = ref(true)
const isVisible = ref(false)
const isHeroActive = ref(true) 
const isMuted = ref(true)     
const heroRef = ref<HTMLElement | null>(null)

useHead({
  link: [
    { rel: 'preload', href: '/video/bekgrond.mp4', as: 'video', type: 'video/mp4' },
    { rel: 'preload', href: '/asset/msc/hind.mp3', as: 'audio', type: 'audio/mpeg' },
    { rel: 'preload', href: '/asset/msc/real.mp3', as: 'audio', type: 'audio/mpeg' },
    { rel: 'preload', href: '/asset/msc/wind.mp3', as: 'audio', type: 'audio/mpeg' }
  ]
})

const togglediv = () => {
  isVisible.value = !isVisible.value
}

const musikacu = [
  { id: "1", artis: "hindia", title: "cincin", musik: "/asset/msc/hind.mp3", gambar: "/img/hinnd.avif" },
  { id: "2", artis: "reality club", title: "anything you want", musik: "/asset/msc/real.mp3", gambar: "/img/hinnd.avif" },
]

const sfxAnginUrl = "/asset/msc/wind.mp3" 

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

const toggleAmbient = () => {
  if (isMuted.value) {
    isMuted.value = false 
    
    if (isHeroActive.value && sfxRef.value) {
      sfxRef.value.play().catch(err => console.log(err))
    } else if (!isHeroActive.value && audioRef.value) {
      audioRef.value.play().catch(err => console.log(err))
    }
  } else {
    isMuted.value = true
    
    if (sfxRef.value) {
      sfxRef.value.pause()
      sfxRef.value.currentTime = 0
    }
    if (audioRef.value) {
      audioRef.value.pause()
      audioRef.value.currentTime = 0
    }
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (document.readyState === 'complete') {
    isLoading.value = false
  } else {
    window.addEventListener('load', () => {
      isLoading.value = false
    })
  }

  if (heroRef.value) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isHeroActive.value = entry.isIntersecting

        if (isMuted.value) return

        if (entry.isIntersecting) {
          if (audioRef.value) audioRef.value.volume = 0.85   
          if (sfxRef.value) {
            sfxRef.value.volume = 1.0
            sfxRef.value.play().catch(err => console.log(err))
          }
        } else {
          if (sfxRef.value) sfxRef.value.pause()
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
  window.removeEventListener('load', () => { isLoading.value = false })
})
</script>

<template>
  <!-- Otomatis ter-import oleh Nuxt 4 berkat fitur Auto-imports -->
  <Loading :show="isLoading" />

  <UMain id="home" class="bg-black min-h-screen w-full overflow-y-auto">
    <section data-theme="dark" ref="heroRef" class="bg-black relative w-full h-screen flex flex-col items-center justify-center px-4 isolate">
      
      <video 
        autoplay 
        loop 
        muted 
        playsinline
        class="w-full h-full object-cover bg-black absolute z-0 top-0 left-0 flex items-center justify-center animate-soft-fade"
      >
        <source src="/video/bekgrond.mp4" type="video/mp4">
        Browser kamu tidak mendukung pemutaran video.
      </video>
     
      <audio ref="audioRef" :src="selectedTrack" loop />
      <audio ref="sfxRef" :src="sfxAnginUrl" loop />

      <div class="z-10 w-full max-w-[260px] p-4 mt-8 relative font-mono text-center bg-black/30 backdrop-blur-xl border border-white/5 rounded-xl shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] animate-fade-in-up [animation-delay:300ms]">
        
        <div class="mb-3 w-full flex flex-col items-center relative">
          <button @click="togglediv" 
                  class="text-[9px] tracking-widest lowercase text-white/40 border-b border-dashed border-white/20 pb-0.5 transition-all duration-200 hover:text-white hover:border-white active:text-white active:border-white">
            {{ isVisible ? '[ close_player.exe ]' : '[ choose_wave.mp3 ]' }}
          </button>

          <div v-if="isVisible" 
               class="absolute bottom-full mb-3 w-full bg-black/95 backdrop-blur-xl border border-white/10 p-3 rounded-xl text-left text-[11px] transition-all animate-fade-in-up z-20 shadow-xl">
            <div class="border-b border-white/10 pb-1.5 mb-2 flex justify-between items-center text-white/40">
              <span>select_track_queue</span>
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <ul class="space-y-1">
              <li v-for="item in musikacu" 
                  :key="item.id"
                  @click="selectTrack(item.musik)"
                  :class="[
                    selectedTrack === item.musik 
                      ? 'bg-white/10 text-white border-white/20' 
                      : 'text-white/60 border-transparent',
                    'hover:bg-white/5 hover:text-white active:bg-white/10 active:text-white p-2 cursor-pointer transition-all flex justify-between items-center rounded-lg border'
                  ]">
                <span>↳ {{ item.artis }} - {{ item.title }}</span>
                <span v-if="selectedTrack === item.musik" class="text-[9px] tracking-tighter text-emerald-400">[QUEUED]</span>
              </li>
            </ul>
          </div>
        </div>  
        
        <div class="w-full flex items-center justify-center">
          <button 
            @click="toggleAmbient" 
            :class="[
              'w-full cursor-pointer text-[9px] tracking-widest font-bold py-1.5 px-3 rounded-md border transition-all duration-300 active:scale-95 uppercase select-none',
              isMuted 
                ? 'bg-white/10 text-white/90 border-white/20 hover:bg-white hover:text-black active:bg-white active:text-black' 
                : 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20 active:bg-red-500/30'
            ]"
          >
            {{ isMuted ? 'PLAY AMBIENT' : 'STOP THE MUSIC' }}
          </button>
        </div>
      </div>

      <div class="absolute bottom-12 sm:bottom-8 left-1/2 -translate-x-1/2 w-full px-4 flex flex-col items-center justify-center pointer-events-none select-none z-10 text-center animate-tech-in">
        
        <h2 class="text-xs sm:text-sm md:text-lg font-display uppercase font-extrabold text-white/60 tracking-[0.2em] mb-2 sm:mb-4">
          Selected digital works, production code, and interactive logic experiments.
        </h2>

        <h1 class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display uppercase font-extrabold text-white opacity-95">
          <div class="flex flex-wrap justify-center items-baseline gap-x-1 md:gap-x-[0.4em]">
            <span>P</span><span class="font-styling">o</span><span>r</span><span>t</span><span>f</span><span class="font-amoria">o</span><span>l</span><span>i</span><span>o</span>
          </div>
        </h1>
      </div>

    </section>
  </UMain>
</template>