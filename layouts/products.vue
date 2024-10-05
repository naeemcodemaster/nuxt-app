<template lang="">
    <div>
        <header class="shadow-sm bg-white">

            <nav class="container max-auto p-4">
                <nuxt-link to="/" class="font-bold">Products Page</nuxt-link>
                
            </nav>

        </header>
        

        <!-- page content -->
        <div class="container mx-auto p-4">
            <slot/>
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            
           
                <nuxt-link to="/" class="font-bold">Logo</nuxt-link>
                <ul class="flex gap-4">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products">Products</nuxt-link></li>
                </ul>
         

        </footer>
        
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: #8b2683;
}
</style>