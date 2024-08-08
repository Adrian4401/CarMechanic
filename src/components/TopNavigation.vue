<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <img alt="Vue logo" class="block mx-auto mb-8 w-48" src="@/assets/logo.png" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
</template>