<template>
  <div class="flex items-center gap-4 md:gap-8 py-4 dark:text-white">
    <h2 class="anton text-[1.5rem] md:text-[2rem] whitespace-nowrap">
      {{ header }}
    </h2>
    <div class="w-full md:w-96 h-[2px] bg-secondary"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  header: {
    typeof: String,
    description: "header",
  },
});
</script>