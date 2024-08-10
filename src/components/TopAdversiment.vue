<template>
    <div :class="[
        'transform transition-all ease-in-out duration-[1500ms]', 
        showAd ? 'translate-x-0' : '-translate-x-full',
        'lg:mt-20 mt-10'
    ]">
        <img src="../assets/adversiment.png" class="block m-auto lg:h-[36rem]" />
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    const showAd = ref(false)

    onMounted(() => {
        setTimeout(() => {
            showAd.value = true
            console.log('Komponent zamontowany, showAd:', showAd.value)
        }, 100)
    })
</script>