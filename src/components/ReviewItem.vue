<script setup lang="ts">
    import { defineProps } from 'vue';

    defineProps({
        image: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="review-container">
        <div class="review-container-top">
            <div class="review-user-info">
                <img :src="image" class="review-img"/>
                <!-- <img src="../assets/users/a.png" class="review-img"/> -->
                <p class="review-username">{{ username }}</p>
            </div>
            <div class="">
                <p class="review-rate">{{ rating }}</p>
            </div>
        </div>
        <div class="review-container-bottom">
            <textarea readonly disabled maxlength="200" class="review-textarea" :value="review"></textarea>
        </div>
    </div>
</template>