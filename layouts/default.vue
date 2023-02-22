

<script setup>
import { navbar, options } from "./../constants/constants";
import { loadFull } from "tsparticles";

const isMenuOpen = ref(false)
const toggleMenu = ()=>{
  isMenuOpen.value = !isMenuOpen.value
}
// particles
const particlesInit = async (engine) => {
  await loadFull(engine);
};
</script>
<template>
  <div class="min-h-screen" >
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="options"
    />
    <div class="relative z-10" >
      <!-- <header class="w-full  md:hidden block sticky top-0">
        <nav class="flex items-center justify-between w-full py-4 ">
            <ul class="flex w-full justify-between items-center text-13px font-mono space-x-2">
              <li class="" v-for="(item, i) in navbar" :key="i">
                <NuxtLink :to="item.path" class="navbar-item">{{
                  item.label
                }}</NuxtLink>
              </li>
            </ul>
          
        </nav>
      </header> -->
    
      <div class="md:hidden block fixed top-8 right-8 z-30" v-if="!isMenuOpen">
        <button @click="toggleMenu">
        <IconsThreeLines/>
        </button>  
      </div>
        <Transition name="fade" mode="out-in">
      <div class="md:hidden block fixed left-0 right-0 z-40 bg-lightest-navy" v-if="isMenuOpen">
         <button class="absolute top-8 right-8" @click="toggleMenu">
        <IconsClose/>
        </button> 
           <ul class="flex flex-col  text-sm font-mono shadow-md border-navy shadow-navy  px-2 py-8">
          <li class="" v-for="(item, i) in navbar" :key="i">
            <NuxtLink :to="item.path" class="navbar-item mb-2 " @click="toggleMenu">
              <div class="flex item-center gap-x-4">
              <component :is="item.icon" />
                <p>{{item.label}}</p>
              </div>
            </NuxtLink>
          </li>
          <div class="flex item-center justify-center">
            <button class="btn-primary btn-sm ml-4 w-1/2">Resume</button>
          </div>
        </ul>
      
      </div>
        </Transition>

      <div class="w-10 fixed right-10 bottom-0 md:block hidden">
        <ul
          class="
            flex flex-col
            items-center
            text-sm
            after:w-px after:h-32 after:bg-light-slate after:block
          "
        >
          <li class="">
            <a
              class="
                p-2.5
                block
                cursor-pointer
                hover:text-green
                transform
                hover:-translate-y-0.5
                transition-all
              "
              href="https://github.com/ahmedElnewery/"
            >
              <IconsGithub
            /></a>
          </li>
          <li>
            <a
              class="
                p-2.5
                block
                cursor-pointer
                hover:text-green
                transform
                hover:-translate-y-0.5
                transition-all
              "
              href="https://twitter.com/ahmed_elnewery"
            >
              <IconsTwitter
            /></a>
          </li>
          <li>
            <a
              class="
                p-2.5
                block
                cursor-pointer
                hover:text-green
                transform
                hover:-translate-y-0.5
                transition-all
              "
            href="https://www.linkedin.com/in/ahmed-elnewery/"

            >
              <IconsLinkedIn
            /></a>
          </li>
          <li>
            <a
              class="
                p-2.5
                block
                cursor-pointer
                hover:text-green
                transform
                hover:-translate-y-0.5
                transition-all
                mb-8
              "
             href="mailto:ahmedm.elenewery@gmail.com" 
            >
              <IconsEmail/>
          </a>
          </li>
        </ul>
      </div>
      <div class="w-10 fixed md:left-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:block hidden ">
        <ul class="flex flex-col items-center text-sm font-mono border rounded-full min-w-min px-2 py-8">
          <li class="" v-for="(item, i) in navbar" :key="i">
            <NuxtLink :to="item.path" class="navbar-item mb-2">
              <component :is="item.icon" />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div
        class="
          w-full
          min-h-screen
          py-8
          px-4
          sm:px-12
          md:px-48
          h-full
          flex items-center
        "
      >
        <Transition name="rotate" mode="out-in">

        <main class="w-full" :key="$route.fullPath">
          <slot />
        </main>
        </Transition>
      </div>
    </div>
  </div>
</template>
<style >
</style>