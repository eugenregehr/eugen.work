<script setup lang="ts">
import { Mail, Github } from "lucide-vue-next";
</script>

<template>
  <header class="max-w-lg mx-auto text-center pt-20">
    <NuxtImg
      src="/img/avatar.jpg"
      alt="Eugen Regehr "
      class="rounded-full w-20 h-20 mx-auto mb-4" />
    <h1 class="h1">
      Hi, I'm Eugen, <br />
      Full Stack Developer & Interactive Designer
    </h1>
    <p>
      I realise professional web projects - from web design and web development,
      including CMS, to complex animations and tools.
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
