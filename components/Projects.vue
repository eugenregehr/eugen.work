<script setup lang="ts">
import { SquareArrowOutUpRight } from "lucide-vue-next";
import { projects } from "@/content/projects";
</script>

<template>
  <div>
    <div class="flex justify-between items-end">
      <h2 class="h2">Letzte Projekte</h2>
      <Button size="sm" variant="outline">
        <NuxtLink to="/projekte">Alle Projekte</NuxtLink>
      </Button>
    </div>
    <div class="flex flex-col gap-2">
      <a
        v-for="project in projects.slice(0, 3)"
        :key="project.title"
        :href="project.url ?? undefined"
        target="_blank"
        rel="noopener noreferrer"
        class="flex justify-between items-end gap-4 group">
        <div class="md:shrink-0">
          <h3 class="h3">{{ project.title }}</h3>
          <p
            class="w-full md:max-w-sm line-clamp-2 group-hover:!text-foreground/80">
            {{ project.description }}
          </p>
        </div>
        <div class="w-full justify-between gap-4 hidden md:flex">
          <div class="border-b border-border w-full"></div>
          <SquareArrowOutUpRight
            class="text-foreground/70 group-hover:text-primary size-5" />
        </div>
      </a>
    </div>
  </div>
</template>
