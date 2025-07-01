<script setup lang="ts">
import { projects } from "@/content/projects";
</script>

<template>
  <div
    class="marquee relative md:w-[calc(100%+3rem)] overflow-hidden -mx-4 md:-mx-6">
    <div
      class="absolute top-0 left-0 w-10 md:w-52 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
    <client-only>
      <Vue3Marquee
        :duration="100"
        class="h-full"
        :pauseOnHover="true"
        delay="1">
        <a
          v-for="project in projects"
          :key="`${project.title}`"
          :href="project.url ?? undefined"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-foreground/5 shadow-sm max-w-96 h-full w-full ml-4 block">
          <NuxtPicture
            class="aspect-[1600/900] w-full h-full object-cover object-top"
            :src="project.image"
            :alt="project.title"
            format="avif"
            width="1600"
            height="900"
            loading="lazy"
            placeholder />
        </a>
      </Vue3Marquee>
    </client-only>
    <div
      class="absolute top-0 right-0 w-10 md:w-52 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
  </div>
</template>

<style>
.marquee img {
  @apply aspect-[1600/900] w-full h-full object-cover object-top;
}
</style>
