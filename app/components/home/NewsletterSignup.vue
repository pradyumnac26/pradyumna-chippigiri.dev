<script setup lang="ts">
onMounted(() => {
  // Dynamically load the Supascribe script when the component mounts
  const script = document.createElement("script");
  script.src = "https://js.supascribe.com/v1/loader/120UQysi7deiXpMbeBmQuENEb8A3.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <div
    class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 text-center"
  >
    <!-- Optional header (you can remove this if you want *only* the subscribe bar) -->
    <h2
      class="flex justify-center text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        class="h-6 w-6 flex-none mr-2"
      >
        <path
          d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
          class="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
      <span>Stay up to date</span>
    </h2>

    <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
      Get notified when I publish something new — unsubscribe anytime.
    </p>

    <!-- 🪶 Supascribe embed -->
<div
  class="mx-auto max-w-[380px] scale-90"
  data-supascribe-embed-id="545543691346"
  data-supascribe-subscribe
></div>

  </div>
</template>
