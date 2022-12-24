<script setup>
    const props = defineProps({
        icon: {
            type:Object,
            required:false,
            default:null
        }
    })

</script>
<template>
    <div class="flex items-center gap-x-8 mb-10">
      <span class="text-green">
        <component :is="props.icon"/>
      </span>
      <h2
        class="
          text-2xl
          flex
          items-center
          text-lightest-slate
          relative
          after:h-px after:w-72 after:bg-lightest-navy after:block after:ml-6
        "
      >
        <slot/>
      </h2>
    </div>
</template>