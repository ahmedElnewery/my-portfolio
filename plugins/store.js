import Particles from "vue3-particles/src/components/index";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        let user = JSON.parse(localStorage.getItem("user")) ?? null
        nuxtApp.vueApp._component.data = () => {
            return {
                user,
            }
        }

        const updateUser = (user) => {
            user = { ...user }
        }

        nuxtApp.vueApp.provide("user", user)
        nuxtApp.vueApp.provide("updateUser", updateUser)
        nuxtApp.vueApp.provide("token", user?.stsTokenManager?.accessToken ?? "")
    }
})