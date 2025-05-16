<script setup lang="ts">
import { Mail, Github } from "lucide-vue-next";
</script>

<template>
  <header class="max-w-lg mx-auto text-center pt-20">
    <NuxtImg
      src="/img/avatar.jpg"
      alt="Eugen Regehr "
      class="rounded-full w-20 h-20 mx-auto" />
    <h1 class="text-5xl font-bold mt-4">
      Hi, I'm Eugen, <br />
      Full Stack Developer & Designer
    </h1>
    <p class="mt-4 text-foreground/70">
      I realise professional web projects - from web design and web development,
      including CMS, to complex tools.
    </p>

    <div class="mt-4 flex items-center justify-center gap-2">
      <a href="mailto:mail@eugen.work" class="opacity-70 hover:opacity-100"
        ><Mail
      /></a>
      <a
        href="https://github.com/eugenregehr"
        class="opacity-70 hover:opacity-100"
        ><Github
      /></a>
    </div>
  </header>
</template>
