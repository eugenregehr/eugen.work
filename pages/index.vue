<script setup lang="ts">
import { Button } from "@/components/ui/button";

const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <NuxtLayout>
    <Header />
    <Faq class="" />
    <Button variant="outline" @click="toggleTheme">Click me</Button>
  </NuxtLayout>
</template>
