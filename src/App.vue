<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Navigation from '@/components/TopNavigation.vue'
</script>

<template>
  <header class="leading-6 max-h-screen lg:flex lg:items-center lg:pr-[calc(var(--section-gap) / 2)] sticky top-0 z-50">
    <Navigation />
  </header>

  <main class="relative lg:mx-16">
    <RouterView />
  </main>
</template>
