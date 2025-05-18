<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <div class="max-w-lg mx-auto text-center">
    <NuxtImg
      src="/img/avatar.jpg"
      alt="Eugen Regehr "
      class="rounded-full w-20 h-20 mx-auto mb-4" />
    <h1 class="h1">
      Hi, Eugen hier, <br />
      Full Stack Developer & Interactive Designer
    </h1>
    <p>
      Ich realisiere professionelle Webprojekte – von ansprechendem Webdesign
      und leistungsstarken Content-Management-Systemen über interaktive Web-Apps
      bis hin zu komplexen Animationen und individuellen Tools.
    </p>

    <Button size="sm" class="mt-4" as="a" href="mailto:mail@eugen.work">
      Let's talk
    </Button>
  </div>
</template>
