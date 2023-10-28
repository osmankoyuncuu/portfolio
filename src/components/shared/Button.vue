<template>
  <div
    class="px-16 py-4 border-2 border-dark dark:border-white w-max hover:bg-dark dark:hover:bg-white dark:hover:text-dark hover:text-white dark:text-white cursor-pointer rounded-md font-bold">
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    description: "title",
  },
});
</script>
