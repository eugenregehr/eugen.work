<script setup lang="ts">
import { SquareArrowOutUpRight } from "lucide-vue-next";
import { projects } from "@/content/projects";
</script>

<template>
  <div>
    <h2 class="h2">Latest Projects</h2>
    <div class="flex flex-col gap-2">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex justify-between items-end gap-4">
        <div class="shrink-0">
          <h3 class="h3">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
        <div class="w-full flex justify-between gap-4">
          <div class="border-b border-border w-full"></div>
          <SquareArrowOutUpRight class="w-4 h-4" />
        </div>
      </a>
    </div>
  </div>
</template>
