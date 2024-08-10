<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full lg:flex items-center py-4 bg-[black]">
    <img alt="Vue logo" class="w-28 block mx-auto mb-4 lg:mb-0 lg:w-40 lg:pl-8" src="@/assets/logo_flat.png" />
    <nav class="w-full justify-between text-center text-xs lg:text-xl">
      <RouterLink to="/" class="nav-link">O firmie</RouterLink>
      <RouterLink to="/about" class="nav-link">Kontakt</RouterLink>
      <RouterLink to="/about" class="nav-link">Adres</RouterLink>
      <RouterLink to="/about" class="nav-link">Opinie</RouterLink>
    </nav>
  </div>
</template>