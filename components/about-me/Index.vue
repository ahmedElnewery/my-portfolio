

<script setup>
import Message from "./../icons/Message.vue";
import profileImg from './../../assets/img/profile_photo.jpeg'
import {skills} from './../../constants/constants.js'
</script>
<template>
  <section class="section mt-24" id="about">
    <BaseTitle :icon="Message">About Me </BaseTitle>
    <div class="grid grid-cols-3 gap-x-5">
      <div class="col-span-2">
        <div class="">
        <p class="mb-3" >
            
        Hello! My name is ElNewery.</p>

        <p class="leading 8">   I am Goal-oriented Full stack developer experienced in front-end , skilled at building optimized and reusable user interface components and design an efficient layout. Optimized solution seeker and challenge lover who loving learning and gaining new experience.
        </p>
        <p class="my-4 text-lightest-slate">MY  LIFE PHILOSOPHY</p>
        <blockquote><p class="italic font-semibold">"Waiting for Perfect is never as smart as making progress"</p></blockquote>
        </div>
        <div class="mt-4">
            <p class="mb-4 text-light-slate">Here are a few technologies I’ve been working with recently:</p>
            <ul class="grid grid-cols-2 gap-3">
                <li class="list-item" v-for="(skill,i) in skills" :key="i">{{skill}}</li>
            </ul>
        </div>
      </div>

      <div class="col-span-1">
        <!-- <div class="relative">
        <img :src="profileImg"/>
        <div class="absolute inset-0 bg-green opacity-30 hover:opacity-0 mix-blend-screen"></div>
        </div> -->
      </div>
    </div>
  </section>
</template>
