<script setup>
const workacu = [
  {
    num: '01', 
    title: 'E-Commerce Platform', 
    desc: 'A full-stack marketplace built for speed. Features instant filtering and lightning-fast checkout paths.', 
    url: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop',
    tech: ['Nuxt 3', 'Tailwind CSS', 'GSAP', 'PostgreSQL']
  },
  {
    num: '02', 
    title: 'Financial Analytics Dashboard', 
    desc: 'Real-time charting engine tracking digital assets, spot indices, and historical market metrics.', 
    url: '#',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=500&auto=format&fit=crop',
    tech: ['Vue 3', 'TypeScript', 'Chart.js', 'Tailwind']
  },
  {
    num: '03', 
    title: 'Interactive Portfolio Hub', 
    desc: 'High-performance static portfolio integrated with decoupled CMS nodes and automated workflows.', 
    url: '#',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop',
    tech: ['Jekyll', 'JavaScript', 'Decap CMS', 'GitHub Pages']
  },
]
</script>

<template>
  <section class="bg-black text-neutral-400 py-24 px-6 md:px-12 selection:bg-white selection:text-black overflow-x-hidden">
    <div class="max-w-5xl mx-auto">
      
 
      <div class="mb-16 md:mb-24">
        <p class="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-2">// selected projects</p>
        <h1 class="text-3xl md:text-4xl font-medium tracking-tight text-neutral-100">
          Some things I've crafted.
        </h1>
      </div>
      

      <div class="flex flex-col border-t border-neutral-800">
        
        <a 
          v-for="work in workacu" 
          :key="work.num"
          :href="work.url"
          class="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 border-b border-neutral-800 transition-all duration-300 hover:border-neutral-400"
        >
          
  
          <div class="flex items-start gap-6 md:gap-12 w-full md:w-3/5">
            <span class="font-mono text-xs text-neutral-600 pt-1.5 group-hover:text-neutral-400 transition-colors">
              {{ work.num }}
            </span>
            <div class="space-y-2">
              <h2 class="text-xl md:text-2xl font-normal tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                {{ work.title }}
              </h2>
              <p class="text-sm leading-relaxed text-neutral-500 max-w-md group-hover:text-neutral-400 transition-colors">
                {{ work.desc }}
              </p>
            </div>
            <div class="mt-4 md:mt-0 flex flex-wrap gap-1.5 justify-start md:justify-end w-full md:w-2/5 pl-12 md:pl-0">
            <span 
              v-for="tech in work.tech" 
              :key="tech"
              class="text-xs font-mono px-2 py-0.5 text-neutral-500 bg-neutral-900/50 rounded border border-neutral-800/60 group-hover:border-neutral-700 group-hover:text-neutral-300 transition-all"
            >
              {{ tech }}
            </span>
          </div>
          </div>

          
          <div class="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-20 pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-500 ease-out z-10">
            <div class="w-64 h-36 overflow-hidden rounded-lg shadow-2xl border border-neutral-800">
              <img 
                :src="work.image" 
                :alt="work.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 hover:animate-soft-fade"
              />
            </div>
          </div>

        </a>
      </div>
      <div class="w-full text-end mt-2">
        <a href="" class="hover:animate-soft-fade transition-opacity duration-200">Looks All My Project</a>
      </div>
    </div>
  
  </section>
</template>