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
    // pageTransition: { name: 'page', mode: 'out-in' },
    head:{
      title:"Ahmed El Newery",
      link:[ { rel:"icon", href: 'https://raw.github.com/eladnava/material-letter-icons/master/dist/png/A.png' }]
    }
   },
   plugins:[
    { src: '~/plugins/particles', ssr: false },
    { src: '~/plugins/store', ssr: false }

   ]   
})
