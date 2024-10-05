<template>
  <div class="error-page">
    <h1 class="text-4xl">{{ error.statusCode }}</h1>
    <p class="text-lg">{{ error.message }}</p>
    <nuxt-link to="/">Go back to home</nuxt-link>
  </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style scoped>
.error-page {
    text-align: center;
    margin: 2rem;
}
</style>
