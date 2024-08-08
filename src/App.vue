<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from '@/components/TopNavigation.vue'
</script>

<template>
  <header class="leading-6 max-h-screen lg:flex lg:items-center lg:pr-[calc(var(--section-gap) / 2)]">
    <img alt="Vue logo" class="w-48 block mx-auto mb-8 lg:mr-8 lg:mb-0" src="@/assets/logo.png" />
    <nav class="w-full text-xs text-center mt-8 lg:text-start lg:text-base lg:ml-[-1rem] lg:pt-4 lg:mt-4">
      <RouterLink to="/" class="inline-block px-4 border-l first:border-0 border-var-color-border hover:bg-transparent">Home</RouterLink>
      <RouterLink to="/about" class="inline-block px-4 border-l border-var-color-border hover:bg-transparent">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
