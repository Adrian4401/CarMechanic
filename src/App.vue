<script setup lang="ts">
  import Navigation from '@/components/TopNavigation.vue'
  import Adversiment from '@/components/TopAdversiment.vue'
  import AboutUs from '@/components/AboutUs.vue'
</script>

<template>
  <header class="leading-6 w-full max-h-screen lg:flex lg:items-center lg:pr-[calc(var(--section-gap) / 2)] sticky top-0 z-50">
    <Navigation />
  </header>

  <main>
    <Adversiment class="mx-8 lg:mx-16"/>
    <AboutUs class="mx-8 lg:mx-16"/>
  </main>
</template>
