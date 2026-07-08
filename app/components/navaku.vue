<script setup>
const NavLink = [
    {title:"Home",href:"#home"},
    {title:"About",href:"#home"},
    {title:"Work",href:"#home"},
    {title:"Contact",href:"#home"},
]
</script>

<template>  
    <header class="fixed mx-10 top-0 left-0 right-0 z-50 py-2 flex items-center justify-between">
        <a class="text-lg">KanvasDigital.my.id</a>
         
        
        <nav class=" py-2 items-center gap-8 flex">
        <a
        v-for="link in NavLink"
        :key="link.title"
        :href="link.href"
        class="text-sm text-graphite transition-colors hover:text-ink cursor-pointer"
        >
        {{ link.title }}
      </a>
    </nav>

    <a class="px-7 bg-white rounded border border-black cursor-pointer relative"> lets collab <span class="bg-slate-400 absolute right-0 border rounded border-black">-></span> </a>
    </header>
</template>