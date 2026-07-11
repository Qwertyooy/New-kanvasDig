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
  <section data-theme="dark" class="bg-black text-neutral-400 py-20 px-4 sm:px-6 md:px-12 selection:bg-white selection:text-black overflow-x-hidden">
    <div class="max-w-5xl mx-auto">
      
      
      <div class="mb-12 md:mb-20">
        <p class="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2">// selected projects</p>
        <h1 class="text-3xl md:text-4xl font-medium tracking-tight text-neutral-100">
          Some things I've crafted.
        </h1>
      </div>
      
      
      <div class="flex flex-col border-t border-neutral-800">
        <a 
          v-for="work in workacu" 
          :key="work.num"
          :href="work.url"
          class="group relative flex flex-col lg:flex-row lg:items-center justify-between py-6 md:py-12 border-b border-neutral-800 transition-all duration-300 hover:border-neutral-400"
        >
         
          <div class="flex items-start gap-4 md:gap-12 w-full lg:w-7/12">
            <span class="font-mono text-xs text-neutral-600 pt-1 group-hover:text-neutral-400 transition-colors">
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
          </div>

          
          <div class="mt-4 lg:mt-0 flex flex-wrap gap-1.5 justify-start lg:justify-end w-full lg:w-4/12 pl-8 lg:pl-0 z-20">
            <span 
              v-for="tech in work.tech" 
              :key="tech"
              class="text-xs font-mono px-2 py-0.5 text-neutral-500 bg-neutral-900/50 rounded border border-neutral-800/60 group-hover:border-neutral-700 group-hover:text-neutral-300 transition-all whitespace-nowrap"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-6 pl-8 w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto lg:mt-0 lg:pl-0 lg:absolute lg:top-1/2 lg:right-1/4 lg:-translate-y-1/2 pointer-events-none lg:opacity-0 lg:scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:translate-x-12 transition-all duration-500 ease-out z-10">
            <div class="aspect-video w-full lg:w-64 overflow-hidden rounded-lg shadow-2xl border border-neutral-800 bg-neutral-950">
              <img 
                :src="work.image" 
                :alt="work.title"
                class="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </a>
      </div>

      
      <div class="w-full text-right mt-6">
        <a href="#" class="text-sm font-mono text-neutral-500 hover:text-white transition-colors duration-200 inline-flex items-center gap-2">
          See All Projects <span class="text-xs">→</span>
        </a>
      </div>
    </div>
  </section>
</template>