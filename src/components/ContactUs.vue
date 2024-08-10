<script setup lang="ts">
    import InfoItem from '@/components/InfoItem.vue'
    import PhoneIcon from './icons/IconPhone.vue'
    import EmailIcon from './icons/IconEmail.vue'
    import PointIcon from './icons/IconPoint.vue'
</script>

<template>
    <InfoItem>
        <template #heading>Kontakt</template>
        <div>
            <div class="contact-element">
                <PhoneIcon class="contact-element-icon"/>
                <a href="tel:666666666">666666666</a>
            </div>
            <div class="contact-element">
                <EmailIcon class="contact-element-icon"/>
                <a href="mailto:pogromcamasla@gmail.com">pogromcamasla@gmail.com</a>
            </div>
            <div class="contact-element">
                <PointIcon class="contact-element-icon"/>
                <p class="pl-1">Łączna 3/4, Lipinki Łóżyckie</p>
            </div>
        </div>
    </InfoItem>
</template>