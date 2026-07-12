<!-- components/AppPreloader.vue -->
<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition
    leave-active-class="transition duration-1000 ease-in-out"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-full"
  >
    <div v-if="show" class="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center font-mono text-white select-none pointer-events-auto">
      <div class="flex flex-col items-center max-w-xs w-full px-6">
        
        <div class="w-8 h-8 border border-white/20 border-t-white rounded-full animate-spin mb-6" />

        <div class="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1 animate-pulse">
          initializing_system
        </div>
        
        <div class="text-xs tracking-widest text-emerald-400 uppercase font-bold flex items-center gap-1.5">
          <span>[ fetching_assets ]</span>
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        <div class="w-full h-[1px] bg-white/10 mt-6 relative overflow-hidden rounded-full">
          <div class="absolute top-0 left-0 h-full w-1/2 bg-white/80 rounded-full animate-shimmer" />
        </div>

      </div>
    </div>
  </Transition>
</template>

