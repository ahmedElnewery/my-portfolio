

<script setup>
import { navbar, options } from "./../constants/constants";
import { loadFull } from "tsparticles";

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
      <!-- <header class="w-full sticky top-0">
        <nav class="flex items-center justify-between py-4 px-12 h-24">
          <NuxtLink to="/" class="text-green w-10 h-10 flex-shrink-0"
            ><Logo />
          </NuxtLink>
          <div class="md:flex items-center hidden">
            <ul class="flex items-center text-13px font-mono">
              <li class="mx-2.5" v-for="(item, i) in navbar" :key="i">
                <NuxtLink :to="item.path" class="navbar-item">{{
                  item.label
                }}</NuxtLink>
              </li>
            </ul>
            <button class="btn-primary btn-sm ml-4">Resume</button>
          </div>
        </nav>
      </header> -->
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
            >
              <IconsFacebook
            /></a>
          </li>
        </ul>
      </div>
      <div class="w-10 fixed left-10 top-1/2 -translate-y-1/2 md:block hidden">
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
          w-100
          min-h-screen
          py-0
          px-12
          md:px-48
          w-full
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