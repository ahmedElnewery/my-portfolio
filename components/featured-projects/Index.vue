

<script setup>
import { projects } from "./../../constants/constants.js";
import Code from './../icons/Code.vue'
</script>
<template>
  <section class="section mt-24">
    <BaseTitle :icon="Code"> Featured Projects </BaseTitle>
    <div class="grid grid-cols-3 gap-4">
      <div class="" v-for="project in projects" :key="project.id">
        <div
          class="
            relative
            w-full
            h-full
            bg-light-navy
            rounded-md
            py-8
            px-7
            flex flex-col
            justify-between
            items-start
            min-h-[300px]
            transform
            hover:-translate-y-2
            transition
          "
        >
          <div>
            <div class="w-full flex items-center justify-between mb-8">
              <div class="text-green">
                <IconsFolder />
              </div>
              <div class="flex items-center gap-x-2 cursor-pointer">
                <a
                  class="px-1.5 py-1 hover:text-green relative z-10"
                  :href="project.githubUrl"
                   v-if="project.githubUrl"

                  target="blank"

                >
                  <IconsGithub />
                </a>
                <a
                  class="px-1.5 py-1 hover:text-green cursor-pointer relative z-10"
                  :href="project.url"
                  v-if="project.url"
                  target="blank"
                >
                  <IconsExternal />
                </a>

              </div>
            </div>
            <h3 class="capitalize text-xl text-lightest-slate mb-2.5">
              {{ project.title }}
            </h3>
            <div class="">
              <p class="text-sm text-light-slate">
                {{ project.desc }}
              </p>
            </div>
          </div>
          <div>
            <ul class="flex items-center gap-2  font-mono  text-xs">
              <li  v-for="(tag, i) in project.tags" :key="i">{{ tag }}</li>
            </ul>
          </div>
          <a class="absolute inset-0 cursor-pointer"  target="blank" :href="project.url"></a>
        </div>
      </div>
    </div>
  </section>
</template>
