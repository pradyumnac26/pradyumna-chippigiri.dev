<script lang="ts" setup>
import type { Project } from '~/types/ui'

useHead({
  title: 'Pradyumna Chippigiri - Projects',
  meta: [
    { name: 'title', content: 'Pradyumna Chippigiri - Projects' },
    { name: 'description', content: 'If you love building cool stuff, take a look at what I’ve been working on..' }
  ]
});

const projects : Project[] = [
  {
    slug: 'genai-document-intelligence-system',
    title: 'GenAI Document Intelligence System',
    description: 'A GenAI-powered system that automates property record parsing using Azure Document Intelligence and Llama APIs, with a React frontend for structured data visualization and export.',
    link: 'https://www.linkedin.com/posts/pradyumnachippigiri_ai-genai-cuengineering-activity-7321761078504214528-wQTM?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpm_60Bl-IJIznI3hnR5egqFvPOjNbN4uY',
    cover: 'genai.png'
  },

    {
    slug: 'docubot-ai-agent',
    title: 'GenAI Assistant - AI Agent for Documentation',
    description: 'Built a GenAI chatbot using Retrieval-Augmented Generation (RAG) to query and summarize technical documentation. Enables developers to ask natural-language questions and get precise, context-aware answers from code or API docs. Simplifies onboarding and boosts productivity when working with large or complex systems.',
    link: 'https://github.com/pradyumnac26/DocuBot_AIAgent',
    cover: 'aiagent.jpg'
  },

    {
    slug: 'mcp-for-obsidian',
    title: 'MCP for Obsidian',
    description: 'I built a local AI layer for my Obsidian vault — a TypeScript-based MCP server that acts as a personal knowledge assistant. It understands my notes, finds connections, and helps create new content based on what I’ve already written. Runs entirely offline, with Claude accessing the vault securely through the on-device MCP.',
    link: 'https://www.youtube.com/watch?v=lq2stG0l5qU',
    cover: 'obsidianmcp.jpg'
  },

        {
    slug: 'trail-explorer',
    title: 'Trail Explorer',
    description: 'Explore hiking trails with live weather and map insights, a full-stack app built with React, Flask, and cloud deployment.',
    link: 'https://www.youtube.com/watch?v=FVfFKxAzkvs',
    cover: 'trailexplorer.png'
  },

    {
    slug: 'medical-equipment-managment-system',
    title: 'Medical Equipment Managment System',
    description: 'Designed and deployed a microservices-based medical equipment management system with enterprise-grade components including API Gateway, Keycloak authentication, Kafka messaging, centralized logging, monitoring, and distributed tracing on Kubernetes (AWS EKS).',
    link: 'https://github.com/pradyumnac26/distributed-microservice-app',
    cover: 'medical.png'
  },

        {
    slug: 'employee-attrition-prediction',
    title: 'Employee Attrition Prediction',
    description: 'Built employee attrition prediction model using 6 ML algorithms on IBM HR dataset, achieving 94% accuracy',
    link: 'https://drive.google.com/file/d/1nN0i48HDYk6qFAbkrZ-plIdHoCcLsRa6/view?usp=sharing',
    cover: 'employeeattritionprediction.jpg'
  },


  {
    slug: 'sublease-portal',
    title: 'Subleasing Portal ',
    description: 'Leasey is a full-stack sublease platform enabling secure listings, authentication, and live conversations between users Powered by React, Python, and Socket.io for real-time interactions with over 1000 daily messages. Deployed using Docker on Google Cloud Run with Cloud SQL to ensure smooth, scalable performance.',
    link: 'https://www.youtube.com/watch?v=HO9593NK9HA',
    cover: 'leasey.png'
  },

];
</script>

<template>
  <Container class="mt-16 sm:mt-32">
    <header class="max-w-4xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
       If you love building cool stuff, take a look at what I’ve been working on..
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Below you’ll find a collection of projects I’ve worked on, each built with curiosity, creativity, and attention to detail. I’ve poured a lot of effort into them, and I hope that reflects in the work. If there’s a project or idea you’d like to see me explore next, feel free to reach out.</p>
    </header>

    <div class="mt-4 sm:mt-6">
      <div class="md:pl-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="mt-4 space-y-7 text-base text-zinc-600 dark:text-zinc-400" v-for="project in projects" :key="project.slug">
            <a :href="project.link">
            <NuxtImg
                :src="`/images/courses/${project.cover}`"
                :alt="project.title"
                class="w-full rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"/>
            </a>
            <h2 class="font-semibold text-zinc-800 dark:text-zinc-100">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank" rel="noopener noreferrer">
              <div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500">
                Learn More
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current">
                  <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  </Container>
</template>