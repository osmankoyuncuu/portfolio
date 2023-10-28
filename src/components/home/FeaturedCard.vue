<template>
  <div ref="borderRef"
    :class="`flex ${id % 2 == 1 ? 'flex-row' : 'flex-row-reverse'
      } border-2 md:border-0 border-black dark:border-secondary px-4 py-12 rounded-md relative overflow-hidden items-center`">
    <div ref="imageRef" class="md:w-1/2 h-max md:h-96 absolute md:relative top-0 left-0 z-10">
      <img :src="`/img/portfolio/${img}`" alt="portfolio"
        class="grayscale-[50%] hover:grayscale-0 object-contain w-full h-full hidden md:block rounded-md" />
    </div>
    <div ref="contentRef" :class="`w-full md:w-1/2 flex flex-col justify-between py-4 dark:text-white gap-4 z-20  ${id % 2 == 1 ? 'items-end' : 'items-start'
      }`">
      <div>
        <h5 :class="`text-primary ${id % 2 == 1 ? 'text-right' : 'text-left'}`">
          Featured Project
        </h5>
        <h2 :class="`${id % 2 == 1 ? 'text-right' : 'text-left'
          } anton hover:text-secondary`">
          {{ header }}
        </h2>
      </div>
      <p class="md:px-4 md:py-8 md:bg-primary md:text-white md:w-[110%] rounded-md z-10">
        {{ content }}
      </p>
      <div :class="`flex gap-4 ${id % 2 == 1 ? 'pl-4' : 'pr-4'}`">
        <span v-for="t in tabs" :key="t" class="dark:text-white text-end opacity-70 dark:opacity-50">{{ t }}</span>
      </div>
      <div class="flex gap-4 text-dark dark:text-white">
        <Icon v-if="github !== '#'" :href="github" icon="fa-brands fa-github fa-xl" />
        <Icon :href="live" icon="fa-solid fa-arrow-up-right-from-square fa-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from "../shared/Icon.vue";
const porps = defineProps({
  id: {
    typeof: Number,
    description: "id",
  },
  img: {
    type: String,
    description: "img",
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

gsap.registerPlugin(ScrollTrigger);

const imageRef = ref(null)
const contentRef = ref(null)
const borderRef = ref(null)

onMounted(() => {
  gsap.from(imageRef.value, {
    x: innerWidth * 1,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: imageRef.value,
      start: '100 bottom',
      end: '100 bottom',
      markers: false,
    }
  });
  gsap.from(window.innerWidth < 768 ? borderRef.value : contentRef.value, {
    x: innerWidth * -1,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: window.innerWidth < 768 ? borderRef.value : contentRef.value,
      start: window.innerWidth < 768 ? '0 bottom' : '100 bottom',
      end: '100 bottom',
      markers: false,
    }
  });
});
</script>
