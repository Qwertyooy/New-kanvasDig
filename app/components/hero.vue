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
            audioRef.value.volume = 0.15 
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
  <UMain class="bg-black min-h-screen w-full overflow-y-auto">
    
    <!-- SECTION HERO -->
    <section data-theme="dark" ref="heroRef" class="bg-black relative w-full h-screen flex flex-col items-center justify-center px-4 isolate">
      
      <!-- Video Background -->
      <video 
        autoplay 
        loop 
        muted 
        playsinline
        class="w-full h-full object-cover bg-black absolute z-0 top-0 left-0 animate-soft-fade"
      >
        <source src="/video/bekgrond.mp4" class="bg-black" type="video/mp4">
        Browser kamu tidak mendukung pemutaran video.
      </video>
     
      <!-- Audio Elements -->
      <audio ref="audioRef" :src="selectedTrack" loop></audio>
      <audio ref="sfxRef" :src="sfxAnginUrl" loop></audio>

      <!-- Kontrol Player & Button -->
      <div class="flex flex-col items-center justify-center z-10 w-full max-w-md px-4 text-center mt-20 relative">
        
        <!-- Dropdown Pilih Musik -->
        <div class="animate-fade-in-up [animation-delay:600ms] mb-6 w-full flex flex-col items-center">
          <button @click="togglediv" class="text-xs font-mono tracking-widest lowercase text-neutral-900 hover:text-black transition-all border-b border-dashed border-neutral-300 hover:border-black pb-0.5">
            {{ isVisible ? '[ close_player.exe ]' : '[ choose_wave.mp3 ]' }}
          </button>

          <div v-if="isVisible" 
               class="absolute bottom-full mb-4 w-64 bg-white/80 backdrop-blur-md border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none text-left font-mono text-xs transition-all animate-fade-in-up">
            <div class="border-b border-black pb-2 mb-2 flex justify-between items-center text-neutral-400">
              <span>select_track_queue</span>
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <ul class="space-y-2">
              <li v-for="item in musikacu" 
                  :key="item.id"
                  @click="selectTrack(item.musik)"
                  :class="{'bg-black text-white': selectedTrack === item.musik}"
                  class="hover:bg-black hover:text-white p-1.5 cursor-pointer transition-colors flex justify-between items-center text-[11px]">
                <span>↳ {{ item.artis }} - {{ item.title }}</span>
                <span v-if="selectedTrack === item.musik" class="text-[9px] tracking-tighter">[QUEUED]</span>
              </li>
            </ul>
          </div>
        </div>  
        
        <!-- Container Tombol Kontrol -->
        <div class="flex gap-4 items-center justify-center animate-fade-in-up [animation-delay:300ms]">
          <!-- Tombol PLAY THE AMBIENT -->
          <button @click="initializeAmbient" class="cursor-pointer font-mono text-xs md:text-sm bg-neutral-900 text-neutral-100 px-4 py-2 md:px-6 md:py-3 rounded-md border border-neutral-700 hover:bg-transparent hover:text-neutral-900 hover:border-neutral-900 transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            &lt; PLAY THE AMBIENT &gt;
          </button>

          <!-- Tombol STOP AUDIO (Hanya muncul/aktif jika musik tidak di-mute) -->
          <button @click="stopAudio" class="cursor-pointer font-mono text-xs md:text-sm bg-transparent text-neutral-500 border border-neutral-400 px-4 py-2 md:px-6 md:py-3 rounded-md hover:border-red-500 hover:text-red-500 transition-all duration-200">
            &lt; STOP &gt;
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