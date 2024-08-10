<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'
    import InfoItem from '@/components/InfoItem.vue'

    const showList = ref(Array(5).fill(false))
    const observer = ref<IntersectionObserver | null>(null)

    const startAnimation = (entries: IntersectionObserverEntry[]) => {
        console.log('Entries:', entries);
        if(entries[0].isIntersecting) {
        console.log('Element in view, starting animation...');
        showList.value.forEach((_, index) => {
            setTimeout(() => {
            showList.value[index] = true
            }, index * 300)
        });
        if(observer.value) {
            observer.value.disconnect()
        }
        }
    }

    onMounted(() => {
        const options = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
        }

        observer.value = new IntersectionObserver(startAnimation, options)

        const target = document.querySelector('.info-section')
        if(target) {
        observer.value.observe(target)
        }
    })

    onUnmounted(() => 
    {
        if(observer.value) {
        observer.value.disconnect()
        }
    })
</script>

<template>
    <InfoItem class="info-section">
        <template #heading>Warsztat kieruje się</template>
        <ul>
            <li :class="['transform-transition', showList[0] ? 'translate-visible' : 'translate-hidden-left']" class="custom-rounded about-list about-list-red">Profesjonalizmem</li>
            <li :class="['transform-transition', showList[1] ? 'translate-visible' : 'translate-hidden-right']" class="about-list">Uczciwością</li>
            <li :class="['transform-transition', showList[2] ? 'translate-visible' : 'translate-hidden-left']" class="custom-rounded about-list about-list-red">Jakością</li>
            <li :class="['transform-transition', showList[3] ? 'translate-visible' : 'translate-hidden-right']" class="about-list">Terminowością</li>
            <li :class="['transform-transition', showList[4] ? 'translate-visible' : 'translate-hidden-left']" class="custom-rounded about-list about-list-red">Komunikatywnością</li>
        </ul>
    </InfoItem>
</template>