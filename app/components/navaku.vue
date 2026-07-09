<script setup>
const NavLink = [
    {title:"Home",href:"#home"},
    {title:"About",href:"#home"},
    {title:"Work",href:"#home"},
    {title:"Contact",href:"#home"},
]
</script>

<template>  
    <header class="animate-tech-in  fixed top-0 items-center left-0 right-0 z-50  flex justify-between w-full p-2 pt-3 backdrop-blur-2xl">
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