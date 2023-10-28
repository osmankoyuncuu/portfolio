<template>
  <div ref="otherRef" class="bg-primary w-full md:w-[49%] lg:w-[32%] px-4 py-6 rounded-md mb-4 text-white">
    <div class="h-full justify-between flex flex-col gap-6">
      <div class="flex flex-col gap-4">
        <div class="flex justify-between items-center">
          <i class="fa-regular fa-file fa-2xl"></i>
          <div class="flex gap-4">
            <Icon :href="github" icon="fa-brands fa-github fa-lg" />
            <Icon :href="live" icon="fa-solid fa-arrow-up-right-from-square fa-lg" />
          </div>
        </div>
        <h2 class="font-semibold">{{ header }}</h2>
        <p class="opacity-80">
          {{ content }}
        </p>
      </div>
      <div class="flex flex-wrap-reverse gap-y-2 gap-x-4">
        <span v-for="t in tabs" :key="t" class="text-secondary">{{ t }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from "../shared/Icon.vue";

gsap.registerPlugin(ScrollTrigger);
const otherRef = ref(null)

const props = defineProps({
  id: {
    typeof: Number,
    description: "id",
  },
  header: {
    type: String,
    description: "header",
  },
  content: {
    type: String,
    description: "content",
  },
  tabs: {
    type: Array,
    description: "tabs",
  },
  github: {
    type: String,
    description: "github",
  },
  live: {
    type: String,
    description: "live",
  },
});

onMounted(() => {
  gsap.from(otherRef.value, {
    y: 300,
    opacity: 0,
    duration: 1.5,
    stagger: {
      each: 0.2
    },
    scrollTrigger: {
      trigger: otherRef.value,
      start: window.innerWidth < 768 ? '0 bottom' : '100 bottom',
      markers: false,
    }
  });
})
</script>
