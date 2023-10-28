<template>
  <div class="min-h-1/2 md:min-h-screen py-24 flex flex-col justify-center gap-12" id="work">
    <div ref="headerRef">
      <Header header="Some Things I’ve Built" />
    </div>
    <div class="flex flex-col gap-8 md:gap-20">
      <FeaturedCard v-for="f in features" :key="f.id" :id="f.id" :img="f.img" :header="f.header" :content="f.content"
        :tabs="f.tabs" :github="f.github" :live="f.live" />
    </div>
    <div>
      <h2 ref="otherHeaderRef" class="text-center mt-24 mb-8 font-semibold dark:text-white">
        Other Noteworthy Projects
      </h2>
      <div class="flex flex-wrap gap-[2%]">
        <OtherCard v-for="o in others" :key="o.id" :id="o.id" :github="o.github" :live="o.live" :header="o.header"
          :content="o.content" :tabs="o.tabs" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "../shared/Header.vue";
import FeaturedCard from "./FeaturedCard.vue";
import OtherCard from "./OtherCard.vue";
import { features, others } from '../../data/data'

gsap.registerPlugin(ScrollTrigger);

const headerRef = ref(null)
const otherHeaderRef = ref(null)

onMounted(() => {
  gsap.from(headerRef.value, {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: headerRef.value,
      start: window.innerWidth < 768 ? '-100 bottom' : '200 bottom',
      markers: false,
    }
  });
  gsap.from(otherHeaderRef.value, {
    y: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: otherHeaderRef.value,
      start: window.innerWidth < 768 ? '-100 bottom' : '200 bottom',
      markers: false,
    }
  });
});
</script>
