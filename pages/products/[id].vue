<template>
    <div>
        <!-- second way -->
        <Head>
            <Title>Nuxt Product Details | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>
  
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

// Get the route parameters (product id)
const { id } = useRoute().params;

// Fetch the product data from the API
const product = ref(null);

const uri = `https://fakestoreapi.com/products/${id}`;
const { data, pending, error } = await useFetch(uri);



// Assign the fetched data to the product ref when the fetch is complete
if (data.value) {
    product.value = data.value;
}


//   if product not found , mean did not get any id, and some one access
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found'})
}

// Define page layout meta
definePageMeta({ layout: 'products' });
</script>
  
<style scoped>
/* Add any specific styles here */
</style>
  