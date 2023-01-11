

<script setup>
import Message from "./../icons/Message.vue";
import profileImg from './../../assets/img/profile_photo.jpeg'
const {data:skills}= await useFetch("/api/skills")


</script>
<template>
  <section class="section " id="about">
    <BaseTitle :icon="Message">About Me </BaseTitle>
    <div class="w-full">
      <div class=" lg:w-2/3 w-full">
        <div >
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
      
      </div>
    </div>
  </section>
</template>
