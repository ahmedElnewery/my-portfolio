

<script setup>
import { navbar } from "./../constants/constants";

</script>
<template>
  <div class="min-h-screen">
    
    <div class="relative z-10">
      <header class="w-full sticky top-0">
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
      </header>
      <div class="w-10 fixed left-10 bottom-0 md:block hidden">
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
                vertical-mode
                mb-6
              "
              href="mailto:ahmedm.elnewery@gmail.com"
            >
              ahmedm.elnewery@gmail.com</a
            >
          </li>
        </ul>
      </div>
      <div
        class="
          w-100
          min-h-screen
          py-0
          px-12
          md:px-28
          xl:px-32
          2xl:px-48
          w-full
          h-full
          p-t-[100px]
        "
      >
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
<style >
</style>