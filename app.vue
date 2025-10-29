<script setup lang="ts">
useHead({
  title: 'Pradyumna Chippigiri - Software Developer, AI Architect, Content Creator, Open-Source Contributor, and Lifelong Learner',
  meta: [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Pradyumna Chippigiri - Software Developer, AI Architect, Content Creator, Open-Source Contributor, and Lifelong Learner' },
    { name: 'twitter:description', content: 'Pradyumna Chippigiri - Software Developer, AI Architect, Content Creator, Open-Source Contributor, and Lifelong Learner' },
    { name: 'twitter:image', content: 'https://pradyumnachippigiri.dev/images/praddy.png' },
    { name: 'twitter:site', content: '@codeslayerprads' },
    { name: 'twitter:creator', content: '@codeslayerprads' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Pradyumna Chippigiri - Software Developer, AI Architect, Content Creator, Open-Source Contributor, and Lifelong Learner' },
    { property: 'og:description', content: 'Hey there 👋 I am Pradyumna Chippigiri, a Software Engineer specialized in building scalable backend systems, intelligent AI solutions, and cloud-native applications. I enjoy solving real-world problems through code, optimizing systems for performance, and mentoring others along the way. I love experimenting with emerging tech, crafting efficient architectures, and sharing insights from what I build and learn. When I’m not coding, you’ll find me writing tech blogs, exploring startups, or diving into new AI frameworks..' },
    { property: 'og:url', content: 'https://pradyumnachippigiri.dev' },
    { property: 'og:image', content: 'https://pradyumnachippigiri.dev/images/praddy.png' },
    { property: 'og:image:secure_url', content: 'https://pradyumnachippigiri.dev/images/praddy.png' },
  ],
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'canonical', href: 'https://pradyumnachippigiri.dev' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Pradyumna Chippigiri",
        "url": "https://pradyumnachippigiri.dev",
        "jobTitle": "Software Engineer",
        "sameAs": [
          "https://github.com/pradyumnac26",
          "https://www.linkedin.com/in/pradyumna-c-a652b117a/",
          "https://x.com/codeslayerprads"
        ]
      })
    }
  ]
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
