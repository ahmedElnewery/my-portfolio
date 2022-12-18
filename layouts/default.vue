

<script>
import logo from '~~/components/logo.vue';
import metaData from './../constants/constants'
export default {
  components: { logo },
  computed:{
    navbar(){
        return metaData.navbar
    }
  }
  };
</script>
<template>
  <div>
    <nav
      class="
        flex
        items-center
        justify-between
        container
        mx-auto
        py-4
        px-12
        h-24
      "
    >
      <NuxtLink to="/" class="text-green w-10 h-10 flex-shrink-0"
        ><Logo/>
      </NuxtLink>
    <div class="flex items-center">
      <ul class="flex items-center text-sm font-mono">
        <li class="mx-2.5 " v-for="(item,i) in navbar" :key="i">
            <NuxtLink :to="item.path" class="navbar-item">{{item.label}}</NuxtLink> 
        </li>
      </ul>
    <button class="btn-primary ">
        Resume
    </button>
    </div>
    </nav>
    <div class="container">
      <slot />
    </div>
  </div>
</template>
<style>
</style>