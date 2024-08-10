<script setup lang="ts">
  import Navigation from '@/components/TopNavigation.vue'
  import Adversiment from '@/components/TopAdversiment.vue'
  import AboutUs from '@/components/AboutUs.vue'
  import Strenghts from '@/components/WorkshopStrenghts.vue'
  import Contact from '@/components/ContactUs.vue'
  import Localization from '@/components/WorkshopLocalization.vue'
  import Reviews from '@/components/CustomerReviews.vue'
</script>

<template>
  <header class="leading-6 w-full max-h-screen lg:flex lg:items-center lg:pr-[calc(var(--section-gap) / 2)] sticky top-0 z-50">
    <Navigation />
  </header>

  <main>
    <Adversiment id="adversiment" class="mx-8 lg:mx-16"/>
    <AboutUs id="aboutus" class="mx-8 lg:mx-16"/>
    <Strenghts id="strenghts" class="mx-8 lg:mx-16"/>
    <Contact id="contact" class="mx-8 lg:mx-16" />
    <Localization id="localization" class="mx-8 lg:mx-16" />
    <Reviews id="reviews" class="mx-8 lg:mx-16" />
  </main>

  <footer class="text-center mt-12 lg:mt-32 text-sm lg:text-base">
    <p>&copy; Adrian Zakrzewski 2024</p>
  </footer>
</template>
