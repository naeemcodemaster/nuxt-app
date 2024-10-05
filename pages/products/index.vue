<template lang="">
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
               <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>
<script setup>

definePageMeta({layout:'products'})

// Fetch products 
const {data:products} = await useFetch('https://fakestoreapi.com/products');


// Meta Tags for this component  (first way) second way I did in [id].vue details page
useHead({
    title:'Nuxt Product Page',
    meta:[
        {name:'description',content:'This is Product page description'}
    ]
})

</script>
<style lang="">
    
</style>