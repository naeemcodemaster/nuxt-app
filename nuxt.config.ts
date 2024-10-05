// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:'Logo Site',
      meta:[
        {name:'description',content:'Nuxt 3 Description'}
      ],
      link:[
        {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig:{
    mykey: process.env.MYKEY
  }

})
