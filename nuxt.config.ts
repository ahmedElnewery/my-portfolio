// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
   app:{
    head:{
      title:"Ahmed El Newery"
    }
   },
   plugins:[
    { src: '~/plugins/particles', ssr: false },
    { src: '~/plugins/store', ssr: false }

   ]   
})
