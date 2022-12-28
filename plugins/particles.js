import Particles from "vue3-particles/src/components/index";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Particles)
  })