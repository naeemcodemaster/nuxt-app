<template lang="">
    <div>
       
        <h2>About page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut ut doloribus fuga dignissimos iusto, reprehenderit accusantium adipisci maiores sit rem nesciunt? Amet error veniam ipsum, doloremque quae sit vel?</p>
        <!-- <div>{{data}}</div> -->
    </div>
</template>
<script setup>
    // const {data} = await useFetch('/api/data');

    // get request
    // const {data} = await useFetch('/api/data?name=khan');


    // Post request
    const {data} = await useFetch('/api/data?name=khan',{
        method:'POST',
        body:{age:25}
    });

    // private key api data
    // const {data} = await useFetch('/api/data');



   




</script>
<style lang="">
   
</style>