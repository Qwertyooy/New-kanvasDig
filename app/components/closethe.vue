<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const closeRef = ref(null)
const theRef = ref(null)
const gapRef = ref(null)
const footerRef = ref(null)

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    })

    // Atur posisi awal animasi (Teks menyebar keluar dulu)
    tl.from(closeRef.value, { x: 200, opacity: 0 }, 0)
      .from(theRef.value, { x: -200, opacity: 0 }, 0)
      .from(gapRef.value, { y: 150, opacity: 0 }, 0)
      .from(footerRef.value, { opacity: 0, scale: 0.9 }, 0)

  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section 
    ref="sectionRef"
    class="relative bg-neutral-950 h-screen w-full text-center flex flex-col items-center justify-between px-4 overflow-hidden selection:bg-white selection:text-black"
  >
    <div></div>

    <div class="flex flex-col gap-1 md:gap-2 items-center justify-center tracking-tighter">
      <h1 ref="closeRef" class="text-6xl md:text-8xl font-medium text-neutral-100 font-amoria uppercase will-change-transform">
        Close
      </h1>
      <h1 ref="theRef" class="text-6xl md:text-8xl font-medium font-styling uppercase text-neutral-100 will-change-transform">
        The
      </h1>
      <h1 ref="gapRef" class="text-6xl md:text-8xl font-medium uppercase  text-neutral-100 will-change-transform">
        Gap
      </h1>
    </div>

    <p ref="footerRef" class="text-sm font-mono tracking-widest text-neutral-500 uppercase pb-12 will-change-transform">
      // scroll to discover \\
    </p>
  </section>
</template>