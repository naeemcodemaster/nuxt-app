<template>
    <div class="card text-center">
        <img :src="product.image" alt="Product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`" class="btn my-4">

            View Details

        </nuxt-link>
    </div>
</template>
  
<script setup>
// Correctly defining props
const props = defineProps({
    product: Object // or specify more detailed typing if needed
})
</script>
  
<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>
  