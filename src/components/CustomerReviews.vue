<script setup lang="ts">
    import InfoItem from './InfoItem.vue';
    import ReviewItem from './ReviewItem.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import 'swiper/swiper-bundle.css'
    import { Pagination } from 'swiper/modules';
</script>

<template>
    <InfoItem>
        <template #heading>Opinie</template>
        <div class="w-full">
            <Swiper 
                :modules="[Pagination]"
                :loop="true" 
                :grab-cursor="true" 
                :slides-per-view="1"
                :breakpoints="{
                    768: { slidesPerView: 2 },
                    1366: { slidesPerView: 3 },
                    1680: { slidesPerView: 4 }
                }"
                class="w-full items-center justify-items-center" 
            >
                <SwiperSlide>
                    <ReviewItem image="assets/users/a.png" username="Alan K." rating="4/5" review="Bardzo fajny warsztat, polecam gorąco!" />
                    <!-- THIS UNDER WORKS LOCALLY -->
                    <!-- <ReviewItem image="/src/assets/users/a.png" username="Alan K." rating="4/5" review="Bardzo fajny warsztat, polecam gorąco!" /> -->
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem image="assets/users/man1.png" username="Ahmed" rating="5/5" review="Very nice good people i like it!!!!" />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem image="/assets/users/s.png" username="Sandra R." rating="5/5" review="Polecam, pojechałam, ceny niskie i wszystko sprawnie zrobione." />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem image="/assets/users/man2.png" username="Musammed" rating="2/5" review="Bad man, everything go bad." />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem image="/assets/users/man2.png" username="Maciej H." rating="5/5" review="Uszczelka pod głowicą zrobiona idealnie." />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem image="/assets/users/man1.png" username="Janusz" rating="1/5" review="ja bym zrobil to lepiej" />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem image="/assets/users/a.png" username="Adrian K." rating="5/5" review="Polecam, pojechałam, ceny niskie i wszystko sprawnie zrobione." />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewItem image="/assets/users/s.png" username="Sabina" rating="4/5" review="Wszystko ok" />
                </SwiperSlide>
            </Swiper>
        </div>
    </InfoItem>
</template>