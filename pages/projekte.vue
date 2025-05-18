<script setup lang="ts">
import { projects } from "@/content/projects";
import { ArrowLeft } from "lucide-vue-next";
</script>

<template>
  <NuxtLayout>
    <div class="flex justify-between items-center mt-20 mb-10">
      <div>
        <NuxtLink to="/">
          <Button size="lg" variant="outline" class="cursor-pointer">
            <ArrowLeft class="size-5" />Zurück
          </Button>
        </NuxtLink>
      </div>
      <h1 class="h1 !mb-0">Alle Projekte</h1>
    </div>
    <div class="flex flex-col gap-14">
      <div
        class="flex flex-col md:flex-row md:odd:flex-row-reverse gap-6 group"
        v-for="project in projects"
        :key="project.title">
        <div class="w-full md:w-1/2 relative">
          <a
            :href="project.url ?? undefined"
            target="_blank"
            rel="noopener noreferrer">
            <NuxtImg
              class="object-cover aspect-video bg-foreground/10 object-top rounded-sm w-full h-full shadow-sm dark:shadow-none"
              :src="project.image"
              loading="lazy"
              decoding="async"
              :alt="project.title"
              placeholder />
          </a>
          <div
            class="absolute top-2 right-2 flex-col gap-[1px] hidden group-hover:flex items-end">
            <div
              v-for="tag in project.tags"
              :key="tag"
              class="bg-background/80 text-foreground rounded-sm text-center leading-none">
              <span
                class="text-[0.6rem] leading-none inline-block p-[5px] pt-[4px]"
                >{{ tag }}</span
              >
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <h3 class="h3">{{ project.title }}</h3>
          <p class="text-sm text-foreground/70">{{ project.description }}</p>
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-primary mt-4 block font-light hover:text-primary/80">
            Projekt ansehen
          </a>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
