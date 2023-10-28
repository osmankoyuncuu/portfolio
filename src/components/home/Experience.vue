<template>
  <div ref="experienceRef" class="min-h-1/2 md:min-h-[70vh] py-24 flex flex-col justify-center gap-16" id="experience">
    <Header header="Where I've Worked" />
    <div class="flex flex-col md:flex-row gap-12 dark:text-white">
      <div class="md:w-3/12 flex flex-col">
        <div class="flex flex-row gap-4 items-center cursor-pointer" v-for="(item, index) in experience" :key="index"
          @click="selected(item.title)">
          <span :class="`w-1 h-16 ${select == item.title
            ? 'bg-secondary dark:bg-light'
            : 'bg-dark dark:bg-primary'
            }`"></span>
          <h3>{{ item.title }}</h3>
        </div>
      </div>
      <div class="md:w-9/12 flex flex-col gap-4" v-for="f in filterList" :key="f.id">
        <div class="flex flex-col md:flex-row gap-2">
          <h3>{{ f.mission }}</h3>
          <span class="hidden md:inline-block">-</span>
          <a :href="f.website" class="text-secondary" target="_blank">
            <h3>{{ f.title }}</h3>
          </a>
        </div>
        <h5 class="opacity-50">{{ f.date }}</h5>
        <ul v-for="(c, index) in f.content" :key="index">
          <li>{{ c }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "../shared/Header.vue";
import { experience } from "../../data/data";

const experienceRef = ref(null)

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.from(experienceRef.value, {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: experienceRef.value,
      start: window.innerWidth < 768 ? 'top bottom' : '200 bottom',
      markers: false,
    }
  });
});

const select = ref("Rest Play");
const filterList = computed(() =>
  experience.filter((item) => item.title == select.value)
);

const selected = (item) => {
  select.value = item;
};
</script>

<style scope>
ul li {
  list-style: square;
  list-style-position: inside;
}

.active {
  background-color: var(--dark-color) !important;
  transition: all 0.2s;
}
</style>
