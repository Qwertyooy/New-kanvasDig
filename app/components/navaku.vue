<script setup>
const NavLink = [
    {title:"Home",href:"#home"},
    {title:"About",href:"#home"},
    {title:"Work",href:"#home"},
    {title:"Contact",href:"#home"},
]
</script>

<template>  
    <header class="animate-tech-in  fixed mx-10 top-0 left-0 right-0 z-50 py-2 px-6 flex items-center justify-between backdrop-blur-lg bg-paper/70 border border-hairline rounded-2xl mt-4">
        <a class="animate-fade-in-up [animation-delay:0s] text-lg font-semibold">KanvasDigital.my.id</a>
         
        
        <nav class=" py-2 items-center gap-8 flex">
        <a
        v-for="(link, index) in NavLink"
        :key="link.title"
        :href="link.href"
        
        class="animate-fade-in-up [animation-delay:var(--animation-delay)] text-sm text-graphite transition-colors hover:text-ink cursor-pointer"
        >
        {{ link.title }}
      </a>
    </nav>

    <button class="animate-fade-in-up [animation-delay:0s] px-6 py-2 bg-ink text-paper rounded-lg font-sans font-medium hover:bg-ink/90 transition-colors flex items-center gap-2"> lets collab <span class="text-lg">→</span> </button>
    </header>
</template>