

<script>
export default {

}
</script>
<template>
  <div>
    <nav class="flex items-center justify-between container mx-auto py-4 px-12 h-24">
        <div>Ahmed</div>
        <ul class="flex items-center">
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </nav>
    <div class="container">
        <slot/>
    </div>
  </div>
</template>
<style>

</style>