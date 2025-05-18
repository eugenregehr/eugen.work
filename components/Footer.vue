<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex justify-between items-center pb-5 pt-20">
      <p class="!text-[0.7rem]">eugen.work © {{ new Date().getFullYear() }}</p>
      <div class="flex items-center gap-2">
        <NuxtLink
          class="!text-[0.7rem] text-foreground/70 font-light"
          to="/impressum">
          Impressum
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
