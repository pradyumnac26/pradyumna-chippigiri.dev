<script lang="ts" setup="">
useHead({
  title: 'Pradyumna Chippigiri - About Me',
  meta: [
    { name: 'title', content: 'Pradyumna Chippigiri - About Me' },
    { name: 'description', content: 'Hello 👋🏻 My Name is Pradyumna Chippigiri' }
  ]
});
</script>

<template>
  <Container class="mt-16 sm:mt-32">
    <!-- about page div -->
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <!-- portrait -->
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <NuxtImg
            src="/images/photos/classof2025.png"
            class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            style="color: transparent;"
            loading="lazy"
            alt="Pradyumna"/>

<!--          <img alt="" loading="lazy" width="800" height="800" decoding="async" data-nimg="1"-->
<!--               class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" src="/images/praddy.png" style="color: transparent;">-->
        </div>
      </div>
      <!-- about -->
      <div class="lg:order-first lg:row-span-2">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Hello 👋🏻 My Name is Pradyumna
        </h1>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            Pradyumna (pronounced “Prad-You-Mna”), somethimes people call me Praddy with love. I am a Software Engineer, currently living in Austin, Texas, with a strong focus on building scalable
             backend systems, AI-powered infrastructure, and cloud-native applications that solve real-world problems 
             efficiently. I am a self-taught programmer who
            firmly believes that mindset is everything,  you can accomplish anything in this life if you put
            your mind into it.
          </p>
           <p>
            I completed my Master’s in Computer Science at the University of Colorado Boulder, where I explored AI systems, distributed computing, and data infrastructure. Since then, I’ve worked on projects spanning SaaS platforms, cloud APIs, and AI-driven applications that combine reasoning, automation, and creativity.
          </p>
          <h2 class="font-semibold text-zinc-800 dark:text-zinc-100">Beyond the Keyboard</h2>
<p>
  In my personal life, I’m a family-oriented person who values time with loved ones. I enjoy reading books,
  listening to podcasts, writing and creating content, experimenting with photography, and planning my next
  travel adventure. These moments outside of work fuel my creativity and keep me balanced.
</p>
<h2 class="font-semibold text-zinc-800 dark:text-zinc-100">My Journey</h2>
<p>
  My journey into software began out of curiosity wanting to understand how technology works beneath the surface.
  During my undergrad at R.V. College of Engineering, I joined the coding club, built projects, and explored
  competitive programming, which strengthened my technical foundation and teamwork skills.
</p>
<p>
  I also freelanced and contributed to open-source projects, gaining hands-on experience in client communication,
  project delivery, and collaboration. These experiences paved the way for my first professional role, where I
  applied my skills to real-world systems and learned to build software that scales.
</p>
<p>
  My passion for continuous learning led me to pursue a Master’s in Computer Science at the University of Colorado
  Boulder, where I’m exploring Generative AI, cloud computing, and intelligent system design. I’m now progressing my
  career forward by working at an AI consulting startup, helping build intelligent solutions that combine data,
  automation, and human insight.
</p>


<h2 class="font-semibold text-zinc-800 dark:text-zinc-100">One Thing That Has Always Stuck With Me</h2>
<p>
  One thing that has always stayed with me is gratitude for everyone who has taught, supported, and inspired me along
  the way. I’m deeply thankful to God for guiding me toward what I deserve, and to my parents, who have always been my
  backbone and constant source of strength. Their love and faith in me remind me to stay grounded, keep learning, and
  give back to society in every way I can through mentorship, sharing knowledge, and building technology that creates
  a positive impact.
</p>


        </div>
      </div>
      <!-- social icons -->
      <div class="lg:pl-20">
        <ul role="list">
          <li class="flex">
            <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500" href="https://x.com/codeslayerprads/">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500">
                <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
              </svg>
              <span class="ml-4">Follow on Twitter</span>
            </a>
          </li>
                    <li class="mt-4 flex">
            <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500" href="https://pradyumnachippigiri.substack.com/?r=5ev9w0&utm_campaign=pub-share-checklist">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-4 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
      </svg>
              <span class="ml-4">Follow on Substack</span>
            </a>
          </li>
          <li class="mt-4 flex">
            <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500" href="https://medium.com/@pchippigiri">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-6 w-5 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
<path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"/>
      </svg>
              <span class="ml-4">Follow on Medium</span>
            </a>
          </li>
          <li class="mt-4 flex">
            <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500" href="https://www.linkedin.com/in/pradyumna-c-a652b117a/">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500">
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
              <span class="ml-4">Follow on LinkedIn</span>
            </a>
          </li>
          <li class="mt-4 flex">
            <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500" href="https://github.com/pradyumnac26/">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
              </svg>
              <span class="ml-4">Follow on GitHub</span>
            </a>
          </li>
          <li class="mt-4 flex">
            <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500" href="https://www.instagram.com/pradzzyy/">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500">
                <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
              </svg>
              <span class="ml-4">Follow on Instagram</span>
            </a>
          </li>
          <li class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <a class="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500" href="mailto:pchippigiri@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500">
                <path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
              </svg>
              <span class="ml-4">pchippigiri@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>