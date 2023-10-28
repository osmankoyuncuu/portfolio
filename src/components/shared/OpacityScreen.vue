<template>
  <div class="w-full h-full absolute top-0 left-0 bg-black opacity-80 z-20" @click="closeOpacity"></div>
</template>

<script setup>
const emit = defineEmits(["close"]);
const closeOpacity = () => {
  emit("close");
};
</script>
