<script setup lang="ts">
    import InfoItem from '@/components/InfoItem.vue'
    import PhoneIcon from './icons/IconPhone.vue'
</script>

<template>
    <InfoItem>
        <template #heading>Kontakt</template>
        <div>
            <div class="flex items-center lg:text-2xl mt-6">
                <PhoneIcon class="w-12 h-12 mr-8"/>
                <a href="tel: 666666666" class="flex">666666666</a>
            </div>
            <div class="flex items-center lg:text-2xl mt-6">
                <PhoneIcon class="w-12 h-12 mr-8"/>
                <a href="tel: 666666666" class="flex">666666666</a>
            </div>
            <div class="flex items-center lg:text-2xl mt-6">
                <PhoneIcon class="w-12 h-12 mr-8"/>
                <a href="tel: 666666666" class="flex">666666666</a>
            </div>
        </div>
    </InfoItem>
</template>