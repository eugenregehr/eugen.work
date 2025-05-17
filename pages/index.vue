<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-vue-next";

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <NuxtLayout>
    <Button
      variant="outline"
      size="icon"
      class="absolute top-2 right-2"
      @click="toggleTheme">
      <Sun v-if="colorMode.preference === 'dark'" />
      <Moon v-else />
    </Button>
    <Header />

    <div class="mt-20 flex flex-col gap-10">
      <About />
      <Projects />
      <Faq />
    </div>
  </NuxtLayout>
</template>
