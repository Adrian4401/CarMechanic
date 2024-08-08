<script setup lang="ts">
  import WelcomeItem from '../components/WelcomeItem.vue'
  import InfoIcon from '../components/icons/IconInfo.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <InfoIcon />
    </template>
    <template #heading>O firmie</template>

    Skierski Auto Serwis jest jednoosobową działalnością prowadzoną przez młodego i ambitnego chłopaka. <br><br>
    Wiedzę zaczął zdobywać już od najmłodszych lat naprawiając oraz modernizując mechanicznie skutery przechodząc sukcesywnie do samochodów. <br><br>
    Każde zlecone zadanie wykonuje z należytą starannością oraz dokładnością, a do tego charakteryzuje się uczciwością.
  </WelcomeItem>
</template>