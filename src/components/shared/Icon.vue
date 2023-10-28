<template>
  <a :href="href" target="_blank" class="hover:text-secondary hover:-translate-y-1 duration-300"><i :class="icon"></i></a>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    description: "icon",
  },
  href: {
    type: String,
    description: "href",
  },
});
</script>