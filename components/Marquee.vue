<script setup lang="ts">
import { projects } from "@/content/projects";
</script>

<template>
  <div class="relative w-[calc(100%+3rem)] overflow-hidden -mx-6">
    <div
      class="absolute top-0 left-0 w-52 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
    <div class="flex animate-marquee whitespace-nowrap py-1">
      <div
        v-for="project in projects"
        :key="`first-${project.title}`"
        class="mx-2 flex-shrink-0 bg-foreground/5 shadow-sm">
        <NuxtImg
          class="aspect-video h-52 w-full object-cover object-top rounded-sm"
          :src="project.image"
          loading="lazy"
          decoding="async"
          :alt="project.title"
          placeholder />
      </div>
      <div
        v-for="project in projects"
        :key="`second-${project.title}`"
        class="mx-4 flex-shrink-0 bg-foreground/5 shadow-sm">
        <NuxtImg
          class="aspect-video h-52 w-full object-cover object-top rounded-sm"
          :src="project.image"
          loading="lazy"
          decoding="async"
          :alt="project.title"
          placeholder />
      </div>
    </div>
    <div
      class="absolute top-0 right-0 w-52 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee 100s linear infinite;
  width: max-content;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
