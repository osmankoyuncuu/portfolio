<template>
  <transition ref="bannerRef" appear @enter="enter">
    <div class="bannerRef min-h-[50vh] md:min-h-screen pt-36 pb-24 flex flex-col justify-center" id="top">
      <h2 class="text-dark dark:text-secondary">Hi, My name is</h2>
      <h1 class="text-[3rem] md:text-[4rem] lg:text-[5rem] dark:text-white leading-tight anton">
        Osman KOYUNCU.
      </h1>
      <h2 class="text-[2rem] md:text-[3rem] lg:text-[4rem] dark:text-white opacity-60 anton">
        I build things for the web.
      </h2>
      <p class="pr-0 lg:pr-96 mt-4 text-black dark:text-white dark:opacity-70">
        I'm a developer specializing in creating exceptional digital experiences.
        I'm currently focusing on website building and dashboard creation.
      </p>
      <a href="/resume.pdf" download="osman-koyuncu-resume.pdf" class="w-max mt-4">
        <Button title="Download CV" />
      </a>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from "../shared/Button.vue";

gsap.registerPlugin(ScrollTrigger);
const bannerRef = ref(null)

onMounted(() => {
  gsap.from(bannerRef.value, {
    y: 200,
    opacity: 0,
    duration: 1,
    delay: 1.5,
    scrollTrigger: {
      trigger: bannerRef.value,
      start: 'top center',
      end: 'top center',
      markers: false,
    }
  });
})
</script>