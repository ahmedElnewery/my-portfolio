<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./../../config/firebase";
const route = useRoute();
const state = reactive({
  email: "",
  password: "",
});

const user = inject("user", () => {});
const token = inject("token", "");
const updateUser = inject("updateUser", () => {});

const handleLogin = (e) => {
  const auth = getAuth(app);
  const { email, password } = state;
 
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const firebaseUser = userCredential.user;

      localStorage.setItem("user", JSON.stringify(firebaseUser));
      localStorage.setItem(
        "token",
        JSON.stringify(firebaseUser.stsTokenManager.accessToken)
      );
      updateUser(firebaseUser);
      if (userCredential) {
        navigateTo("/admin");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

definePageMeta({
  layout: "admin",
});
</script>
<template>
  <NuxtLayout name="admin">
    <div class="flex items-center justify-center text-lightest-slate">
      <div class="md:w-1/2 w-full min-h-screen py-40">
        <h2 class="text-5xl font-mono mb-8 text-center">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-8">
            <label for="email" class="label">Email</label>
            <input id="email" class="input" type="text" v-model="state.email" required/>
          </div>
          <div class="mb-8">
            <label for="password" class="label">password</label>
            <input
              id="password"
              class="input"
              type="password"
              v-model="state.password"
              required
            
            />
          </div>
          <div class="flex items-center justify-center">
            <button class="btn-lg btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>