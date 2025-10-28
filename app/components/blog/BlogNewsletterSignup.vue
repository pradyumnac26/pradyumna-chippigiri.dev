<script setup lang="ts">
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'

onMounted(() => {
  // Dynamically load Supascribe only once when component mounts
  const script = document.createElement("script")
  script.src = "https://js.supascribe.com/v1/loader/120UQysi7deiXpMbeBmQuENEb8A3.js"
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <section
    class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-8"
  >
    <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-2xl">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
        >
          <!-- Left Column -->
          <div class="max-w-xl lg:max-w-lg">
            <h2
              class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Subscribe to my Substack
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-300">
              Get thoughtful insights on technology, AI, and software engineering delivered straight to your inbox.
              No spam, ever.
            </p>

            <!-- 💡 Supascribe Embed (full size) -->
            <div
              data-supascribe-embed-id="545543691346"
              data-supascribe-subscribe
              class="mt-6 flex justify-start"
            ></div>
          </div>

          <!-- Right Column -->
          <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt class="mt-4 font-semibold text-white">Weekly Updates</dt>
              <dd class="mt-2 leading-7 text-gray-400">
                I will send you an update each week to keep you filled in on what I have been up to.
              </dd>
            </div>

            <div class="flex flex-col items-start">
              <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt class="mt-4 font-semibold text-white">No Spam</dt>
              <dd class="mt-2 leading-7 text-gray-400">
                Your email stays private, I’ll never share or sell it.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Background gradient -->
      <div
        class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
      </div>
    </div>
  </section>
</template>
