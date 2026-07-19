<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isLoading = ref(true)
const isVisible = ref(false)
const isHeroActive = ref(true) 
const isMuted = ref(true)     
const heroRef = ref<HTMLElement | null>(null)

useHead({
  link: [
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

const handleVisibilityChange = () => {
  if (document.hidden) {
    if (!isMuted.value) {
      if (sfxRef.value) sfxRef.value.pause()
      if (audioRef.value) audioRef.value.pause()
    }
  } else {
    if (!isMuted.value) {
      if (isHeroActive.value && sfxRef.value) {
        sfxRef.value.play().catch(err => console.log(err))
      } else if (!isHeroActive.value && audioRef.value) {
        audioRef.value.play().catch(err => console.log(err))
      }
    }
  }
}

const handlePageHide = () => {
  if (!isMuted.value) {
    if (sfxRef.value) sfxRef.value.pause()
    if (audioRef.value) audioRef.value.pause()
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  isLoading.value = false

  document.addEventListener('visibilitychange', handleVisibilityChange)
  window.addEventListener('pagehide', handlePageHide)

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
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  window.removeEventListener('pagehide', handlePageHide)
})
</script>

<template>
  <Loading :show="isLoading" />

  <UMain id="home" class="bg-black min-h-[100dvh] animate-soft-fade w-full overflow-y-auto">
    <section 
      data-theme="dark" 
      ref="heroRef" 
      class="bg-black relative w-full min-h-[100dvh] animate-soft-fade flex flex-col items-center px-4 py-8 isolate overflow-hidden"
    >
      
      <video autoplay loop muted playsinline preload="none" class="w-full h-full object-cover absolute z-0 inset-0 opacity-30 mix-blend-screen pointer-events-none">
        <source src="/video/bekgrond.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 grid grid-cols-4 pointer-events-none border-x border-white/5 z-0">
        <div class="border-r border-white/5"></div>
        <div class="border-r border-white/5"></div>
        <div class="border-r border-white/5"></div>
        <div></div>
      </div>
      <div class="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
     
      <audio ref="audioRef" :src="selectedTrack" loop preload="none" />
      <audio ref="sfxRef" :src="sfxAnginUrl" loop preload="auto" />


  <div class="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end z-20 select-none translate-y-[8%] md:translate-y-[10%] pb-[10vh] animate-tech-in">
  
  <div class="w-[70vw] max-w-[210px] sm:max-w-[260px] p-2.5 sm:p-4 mb-4 sm:mb-8 md:mb-12 pointer-events-auto font-mono text-center bg-black/30 backdrop-blur-xl border border-white/5 rounded-xl shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] animate-fade-in-up [animation-delay:300ms]">
    <div class="mb-2 sm:mb-3 w-full flex flex-col items-center relative">
      <button @click="togglediv" 
              class="text-[8px] sm:text-[9px] tracking-widest lowercase text-white/40 border-b border-dashed border-white/20 pb-0.5 transition-all duration-200 hover:text-white hover:border-white active:text-white active:border-white">
        {{ isVisible ? '[ close_player.exe ]' : '[ choose_wave.mp3 ]' }}
      </button>

      <div v-if="isVisible" 
           class="absolute bottom-full mb-2 sm:mb-3 w-full bg-black/95 backdrop-blur-xl border border-white/10 p-2 sm:p-3 rounded-xl text-left text-[9px] sm:text-[11px] transition-all animate-fade-in-up z-20 shadow-xl">
        <div class="border-b border-white/10 pb-1 sm:pb-1.5 mb-1.5 sm:mb-2 flex justify-between items-center text-white/40">
          <span>select_track_queue</span>
          <span class="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        <ul class="space-y-0.5 sm:space-y-1">
          <li v-for="item in musikacu" 
              :key="item.id"
              @click="selectTrack(item.musik)"
              :class="[
                selectedTrack === item.musik 
                  ? 'bg-white/10 text-white border-white/20' 
                  : 'text-white/60 border-transparent',
                'hover:bg-white/5 hover:text-white active:bg-white/10 active:text-white p-1.5 sm:p-2 cursor-pointer transition-all flex justify-between items-center rounded-lg border'
              ]">
            <span>↳ {{ item.artis }} - {{ item.title }}</span>
            <span v-if="selectedTrack === item.musik" class="text-[8px] sm:text-[9px] tracking-tighter text-emerald-400">[QUEUED]</span>
          </li>
        </ul>
      </div>
    </div>  
    
    <div class="w-full flex items-center justify-center">
      <button 
        @click="toggleAmbient" 
        :class="[
          'w-full cursor-pointer text-[8px] sm:text-[9px] tracking-widest font-bold py-1 sm:py-1.5 px-2 sm:px-3 rounded-md border transition-all duration-300 active:scale-95 uppercase',
          isMuted 
            ? 'bg-white/10 text-white/90 border-white/20 hover:bg-white hover:text-black active:bg-white active:text-black' 
            : 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20 active:bg-red-500/30'
        ]"
      >
        {{ isMuted ? 'PLAY AMBIENT' : 'STOP THE MUSIC' }}
      </button>
    </div>
  </div>

  <h2 class="text-[9px] xs:text-xs sm:text-sm md:text-base font-sans uppercase font-medium text-white/50 tracking-[0.15em] mb-2 sm:mb-4 max-w-2xl text-center px-4 balance pointer-events-none">
    Selected digital works, production code, and interactive logic experiments.
  </h2> 

  <h1 class="text-[13vw] font-black tracking-tighter text-center uppercase leading-[0.8] text-[#E6E2D3] pointer-events-none">
    Portfolio
  </h1>
  
</div>
    </section>
  </UMain>
</template>