<script setup lang="ts">
import NewsletterSignup from "~/components/home/NewsletterSignup.vue";
import Work from "~/components/home/Work.vue";
import Education from "~/components/home/Education.vue"
import Photos from "~/components/home/Photos.vue";

const title = ref("Software Developer 💻, AI Architect 🚀, Content Creator ✍️, Open-Source Contributor 💡, Lifelong Learner 🌱 ");
const about = ref("Hey there 👋 I am Pradyumna Chippigiri, a Software Engineer specialized in building scalable backend systems, intelligent AI solutions, and cloud-native applications. I enjoy solving real-world problems through code, optimizing systems for performance, and mentoring others along the way. I love experimenting with emerging tech, crafting efficient architectures, and sharing insights from what I build and learn. When I’m not coding, you’ll find me writing tech blogs, exploring startups, or diving into new AI frameworks..");

useHead({
  title: 'Pradyumna Chippigiri - Software Developer, AI Architect and Lifelong Learner',
  meta: [
    { name: 'title', content: 'Pradyumna Chippigiri - Software Developer, AI Architect, Content Creator , Open-Source Contributor, and Lifelong Learner' },
    { name: 'description', content: about }
  ]
});
</script>

<template>
<main class="flex-auto">
  <div class="sm:px-8 mt-9">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="max-w-4xl">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {{ title }}
            </h1>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {{ about }}
            </p>
            <SocialIcons/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Photos/>
  <div class="sm:px-8 mt-24 md:mt-28">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div class="flex flex-col gap-16">
              <LatestArticles/>
            </div>
            <div class="space-y-10 lg:pl-16 xl:pl-24">
              <NewsletterSignup/>
              <Work/>
              <Education/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>
