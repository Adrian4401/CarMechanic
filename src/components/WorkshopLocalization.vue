<script setup lang="ts">
    import InfoItem from './InfoItem.vue';
</script>

<template>
    <InfoItem>
        <template #heading>Lokalizacja</template>
        <div class="w-full bg-[red]">
            <iframe class="w-full h-64 lg:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.329835448148!2d19.06365381257114!3d52.654019726181794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c9965ed25e74d%3A0xb89d47306e6ef5e3!2zcGxhYyBXb2xub8WbY2kgMTIsIDg3LTgwMCBXxYJvY8WCYXdlaw!5e0!3m2!1spl!2spl!4v1723297652577!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </InfoItem>
</template>