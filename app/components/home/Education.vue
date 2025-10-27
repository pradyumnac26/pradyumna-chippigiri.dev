<script lang="ts" setup="">
</script>

<template>
  <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true" class="h-6 w-6 flex-none">
        <path d="M22 10.5V6.75l-10-4.5-10 4.5V10.5m20 0L12 15 2 10.5m20 0v7.75a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10.5"
              class="stroke-zinc-400 dark:stroke-zinc-500"/>
      </svg>
      <span class="ml-3">Education</span>
    </h2>
    <ol class="mt-6 space-y-4">
      <li class="flex gap-4">
        <div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <NuxtImg
              src="/images/work/boulderlogo.png"
              alt="University of Colorado Boulder"
              width="32"
              height="32"
              class="h-7 w-7 rounded-full"
              style="color:transparent"
              loading="lazy"/>
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Institution</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            University of Colorado Boulder
          </dd>
          <dt class="sr-only">Degree</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">Master of Science in Computer Science</dd>
          <dt class="sr-only">Date</dt>
          <dd class="ml-auto text-xs text-zinc-500 dark:text-zinc-500" aria-label="2023 until 2025">
            <time dateTime="2023">Aug 2023</time>
            <span aria-hidden="true">—</span>
            <time dateTime="2025">May 2025</time>
          </dd>
        </dl>
      </li>

      <li class="flex gap-4">
        <div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <NuxtImg
              src="/images/work/rvcollegelogo.jpg"
              alt="PES University"
              width="32"
              height="32"
              class="h-7 w-7 rounded-full"
              style="color:transparent"
              loading="lazy"/>
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Institution</dt>
          <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            R.V College Of Engineering
          </dd>
          <dt class="sr-only">Degree</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">Bachelor of Engineering in Electronics & Communication</dd>
          <dt class="sr-only">Date</dt>
          <dd class="ml-auto text-xs text-zinc-500 dark:text-zinc-500" aria-label="2017 until 2021">
            <time dateTime="2017">Aug 2017</time>
            <span aria-hidden="true">—</span>
            <time dateTime="2021">May 2021</time>
          </dd>
        </dl>
      </li>
    </ol>
  </div>
</template>
