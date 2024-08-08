<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full items-center py-4 bg-background lg:flex lg:py-8">
    <img alt="Vue logo" class="w-28 block mx-auto mb-4 lg:mb-0 lg:w-40" src="@/assets/logo_flat.png" />
    <nav class="w-full text-xs text-center justify-between lg:text-lg">
      <RouterLink to="/" class="nav-link">O firmie</RouterLink>
      <RouterLink to="/about" class="nav-link">Kontakt</RouterLink>
      <RouterLink to="/about" class="nav-link">Adres</RouterLink>
      <RouterLink to="/about" class="nav-link">Opinie</RouterLink>
    </nav>
  </div>
</template>