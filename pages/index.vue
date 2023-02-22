<script setup>
const state = reactive({
  typeValue: "",
  typeStatus: false,
//   typeArray: ["HI! My name is Ahmed ElNewery..."," Frontend Developer who falls in love with Javascript...",`Believe That "Waiting for Perfect is never as SMART as making progress"...`,"Thanks for Your Time. Feel Free to Take a tour in my portfolio"],
//   typeArray: ["HI! My name is Ahmed ElNewery..."," Frontend Developer who falls in love with Javascript...","Optimized solution seeker and challenge lover who loving learning and gaining new experience.","Thanks for Your Time. Feel Free to Take a tour in my portfolio"],
// typeArray:["fixing","Making"],
typeArray:["Frontend Developer","Javascript Lover","Goal-oriented Person","Team player"],
  typingSpeed: 200,
  erasingSpeed: 50,
  newTextDelay: 2000,
  typeArrayIndex: 0,
  charIndex: 0,
});
// methods

const typeText = () => {
  if (state.charIndex < state.typeArray[state.typeArrayIndex].length) {
    if (!state.typeStatus) state.typeStatus = true;
    state.typeValue += state.typeArray[state.typeArrayIndex].charAt(
      state.charIndex
    );
    state.charIndex += 1;
    setTimeout(()=>typeText(), state.typingSpeed);
  } else {
    state.typeStatus = false;
    setTimeout(()=>eraseText(), state.newTextDelay);
  }
};

const eraseText = () => {
  if (state.charIndex > 0) {
    if (!state.typeStatus) state.typeStatus = true;
    state.typeValue = state.typeArray[state.typeArrayIndex].substring(
      0,
      state.charIndex - 1
    );
    state.charIndex -= 1;
    setTimeout(()=>eraseText(), state.erasingSpeed);
  } else {
    state.typeStatus = false;
    state.typeArrayIndex += 1;
    if (state.typeArrayIndex >= state.typeArray.length) state.typeArrayIndex = 0;
    setTimeout(()=>typeText(), state.typingSpeed + 1000);
  }
}
// hooks
onMounted(()=>{  
      setTimeout(()=>typeText(), state.newTextDelay + 200);
})


</script>
<template>
  <section class="section">
    <div class="w-full mt-20">
      <div class="mb-8">
        <h2 class="text-green text-base mb-4 ml-1 font-mono">Hi, my name is</h2>
        <h2 class="text-7xl font-sans text-lightest-slate mb-8 font-semibold">
          Ahmed ElNewery.
        </h2>
      </div>
         <h3 class="text-5xl  leading-relaxed tracking-wider uppercase ml-8">
        👋🏻  i AM
      <span class="typed-text whitespace-pre-wrap text-green">{{ state.typeValue }}</span>
      <span class="cursor" :class="{'typing': state.typeStatus}">&nbsp;</span>
    </h3>
    <div class="mt-32">
        <a
          class="inline-block btn-primary btn-lg tracking-wide cursor-pointer"
          href="https://drive.google.com/file/d/1L8KEBZXiLrQ0-pw4w4YJw1ejxAW410Ux/view?usp=sharing"
          target="blank"
          download="Ahmed_Elnewery_CV"
          >Check out My CV !</a
        >
      </div>
      
    
    </div>
    
    
      

  </section>
</template>
<style>


   span.typed-text {
      /* color: #D2B94B; */
    }
    span.cursor {
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
    }
    span.cursor.typing {
      animation: none;
    }
  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>
