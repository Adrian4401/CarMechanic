<script setup lang="ts">
  import InfoItem from '../components/InfoItem.vue'
  import InfoIcon from '../components/icons/IconInfo.vue'
</script>

<template>
  <div class="lg:flex items-center my-8">
    <InfoItem class="w-full">
      <template #icon>
        <InfoIcon />
      </template>
      <template #heading>O firmie</template>
      <div class="lg:text-base">
        <p class="mb-2">Skierski Auto Serwis jest jednoosobową działalnością prowadzoną przez młodego i ambitnego chłopaka.</p>
        <p class="mb-2">Wiedzę zaczął zdobywać już od najmłodszych lat naprawiając oraz modernizując mechanicznie skutery przechodząc sukcesywnie do samochodów.</p>
        Każde zlecone zadanie wykonuje z należytą starannością oraz dokładnością, a do tego charakteryzuje się uczciwością.
      </div>
    </InfoItem>
  </div>
</template>