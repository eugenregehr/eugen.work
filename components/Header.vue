<script setup lang="ts">
import { Mail, Github } from "lucide-vue-next";
import { Button } from "~/components/ui/button";

import { Sun, Moon } from "lucide-vue-next";

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <header class="max-w-lg mx-auto text-center">
    <Button
      variant="outline"
      size="icon"
      class="absolute top-2 right-2"
      @click="toggleTheme">
      <Sun :class="colorMode.preference === 'dark' ? 'hidden' : ''" />
      <Moon :class="colorMode.preference === 'dark' ? '' : 'hidden'" />
    </Button>

    <div class="flex items-center justify-center gap-2 absolute top-2 left-2">
      <Button
        variant="outline"
        size="icon"
        as="a"
        href="mailto:mail@eugen.work">
        <Mail />
      </Button>
      <Button
        variant="outline"
        size="icon"
        as="a"
        href="https://github.com/eugenregehr">
        <Github />
      </Button>
    </div>

    <NuxtImg
      src="/img/avatar.jpg"
      alt="Eugen Regehr "
      class="rounded-full w-20 h-20 mx-auto mb-4" />
    <h1 class="h1">
      Hi, Eugen hier, <br />
      Full Stack Developer & Interactive Designer
    </h1>
    <p>
      Ich realisiere professionelle Webprojekte – von Webdesign und
      Webentwicklung über CMS bis hin zu komplexen Animationen und Tools.
    </p>

    <Button size="sm" class="mt-4" as="a" href="mailto:mail@eugen.work">
      Kontakt
    </Button>
  </header>
</template>
