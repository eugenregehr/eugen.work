<script setup lang="ts">
import { projects } from "@/content/projects";
const colorMode = useColorMode();
</script>

<template>
  <div class="relative md:w-[calc(100%+3rem)] overflow-hidden -mx-4 md:-mx-6">
    <div
      class="absolute top-0 left-0 w-10 md:w-52 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
    <client-only>
      <Vue3Marquee :duration="100" class="h-full">
        <div
          v-for="project in projects"
          :key="`${project.title}`"
          class="bg-foreground/5 shadow-sm max-w-96 h-full ml-4">
          <NuxtImg
            class="aspect-video h-full w-full object-cover object-top rounded-sm"
            :src="project.image"
            :alt="project.title"
            placeholder />
        </div>
      </Vue3Marquee>
    </client-only>
    <div
      class="absolute top-0 right-0 w-10 md:w-52 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
  </div>
</template>
