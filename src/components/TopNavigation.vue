<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full lg:flex items-center py-4 bg-[black]">
    <img alt="Vue logo" class="w-28 block mx-auto mb-4 lg:mb-0 lg:w-40 lg:pl-8" src="@/assets/logo_flat.png" />
    <nav class="w-full justify-between text-center text-md lg:text-2xl">
      <a href="#aboutus" class="nav-link">O firmie</a>
      <a href="#contact" class="nav-link">Kontakt</a>
      <a href="#localization" class="nav-link">Adres</a>
      <a href="#reviews" class="nav-link">Opinie</a>
    </nav>
  </div>
</template>