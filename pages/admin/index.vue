<script setup > 

// const user = computed(()=>{
//   if(process.client){
//     return JSON.parse(localStorage.getItem("user")).email
//   }
// })
 const  user = inject("user",null)



definePageMeta({
  layout: "admin",
});

</script>
<template>
  <NuxtLayout name="admin">
    <div>
    <div v-if="user">hello {{user.email}}</div>
    <div v-else>
      please login ..
    </div>
    </div>
    <!-- <div class="flex items-center justify-center text-lightest-slate">
      <div class="md:w-1/2 w-full min-h-screen py-40">
      <h2 class="text-5xl font-mono mb-8 text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-8">
          <label for="email" class="label">Email</label>
          <input id="email" class="input" type="text" v-model="state.email" />
        </div>
        <div class="mb-8">
          <label for="password" class="label">password</label>
          <input id="password" class="input" type="password" v-model="state.password" />
        </div>
        <div class="flex items-center justify-center">
            <button class="btn-lg btn-primary">Login</button>
        </div>
      </form>
      </div>
    </div> -->
  </NuxtLayout>
</template>