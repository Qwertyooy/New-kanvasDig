<script setup>
const workacu = [
  {
    num: 1, 
    title: 'E-Commerce Platform', 
    desc: 'A full-stack marketplace featuring lightning-fast product filtering and instant secure checkout processing.', 
    url: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop',
    tech: ['Nuxt 3', 'Tailwind CSS', 'GSAP', 'PostgreSQL']
  },
  {
    num: 2, 
    title: 'Financial Analytics Dashboard', 
    desc: 'Real-time charting engine Tracking digital asset valuations, spot indices, and historical trend metrics.', 
    url: '#',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=500&auto=format&fit=crop',
    tech: ['Vue 3', 'TypeScript', 'Chart.js', 'Tailwind']
  },
  {
    num: 3, 
    title: 'Interactive Portfolio Hub', 
    desc: 'A high-performance interactive static portfolio site integrated with decoupled CMS nodes.', 
    url: '#',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop',
    tech: ['Jekyll', 'JavaScript', 'Decap CMS', 'GitHub Pages']
  },
]
</script>

<template>
  <section class="bg-black py-16 px-6 md:px-0"> 
    <div class="mx-0 md:mx-28">
      <h1 class="text-4xl font-bold text-white tracking-tight mb-8">My Works</h1>
      
      <div class="flex flex-col gap-8 max-w-6xl mx-auto">
        
        <a 
          v-for="work in workacu" 
          :key="work.num"
          :href="work.url"
          class="group relative flex flex-col md:flex-row items-stretch bg-[#171717] rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:bg-[#222222] hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
        >
          <div class="w-full md:w-1/4 min-h-[180px] md:min-h-full overflow-hidden relative bg-neutral-800">
            <img 
              :src="work.image" 
              :alt="work.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div class="w-full md:w-2/4 p-6 md:p-8 flex flex-col justify-center gap-3">
            <h2 class="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400">
              {{ work.title }}
            </h2>
            <p class="text-sm md:text-base text-white/60 leading-relaxed">
              {{ work.desc }}
            </p>
          </div>

          <div class="w-full md:w-1/4 p-6 md:p-8 flex flex-wrap md:flex-col items-start justify-center gap-2 border-t border-white/5 md:border-t-0 md:border-l bg-black/20">
            <span class="text-xs font-semibold uppercase tracking-wider text-white/40 md:mb-1 block w-full">
              Tech Stack
            </span>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in work.tech" 
                :key="tech"
                class="text-xs font-medium px-2.5 py-1 bg-white/5 text-white/80 rounded-md border border-white/5 transition-all duration-300 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/5 group-hover:text-emerald-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

        </a>
      </div>
    </div>

    
  </section>
</template>