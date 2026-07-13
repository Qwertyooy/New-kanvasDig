<script setup>
useSeoMeta({
  title: 'Kanvas Digital – Jasa Pembuatan Website & Solusi Digital Kreatif',
  ogTitle: 'Kanvas Digital – Jasa Pembuatan Website & Solusi Digital Kreatif',
  description: 'Ubah ide bisnismu menjadi kenyataan digital. Kami menyediakan jasa pembuatan website modern, cepat, dan SEO-friendly untuk menaikkan kelas bisnismu di internet.',
  ogDescription: 'Deskripsi singkat, padat, dan jelas tentang webmu.',
  ogImage: 'https://kanvasdigital.my.id/images/og-image.jpg', // Gambar yang muncul saat link dibagikan di WA/Medsos (1200x630 px)
  twitterCard: 'summary_large_image',
})

// Gunakan useHead hanya untuk mendefinisikan URL Kanonikal (mencegah duplikasi konten)
useHead({
  link: [
    { rel: 'canonical', href: 'https://kanvasdigital.my.id' }
  ]
})
</script>

<template>
  
  <navaku />
  <hero />
  <about />
  <work/>
  <closethe/>
  <kontak/>

  <footeraku/>
</template> 