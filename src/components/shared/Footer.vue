<template>
  <div
    class="bg-dark flex flex-col gap-4 py-8 md:py-0 border-t-2 md:border-t-0 border-t-dark shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.3)]">
    <transition appear @beforeEnter="before" @enter="enter">
      <div
        class="md:fixed bottom-0 left-6 xl:left-28 flex flex-row md:flex-col gap-6 justify-center items-center text-white md:text-dark dark:text-white">
        <Icon icon="fa-brands fa-linkedin-in fa-xl" href="https://www.linkedin.com/in/osman-koyuncu/" />
        <Icon icon="fa-brands fa-github fa-xl" href="https://github.com/osmankoyuncuu" />
        <Icon icon="fa-brands fa-stack-overflow fa-xl" href="https://stackoverflow.com/users/20064147/osman-koyuncu" />
        <div class="hidden md:block h-32 w-1 bg-dark dark:bg-white"></div>
      </div>
    </transition>
    <transition appear @beforeEnter="before" @enter="enter">
      <div
        class="md:fixed bottom-0 right-6 xl:right-28 flex flex-col justify-center items-center gap-6 text-white md:text-dark dark:text-white">
        <a href="mailto:osmannnkoyuncuuu@gmail.com"
          class="vertical-text font-semibold hover:text-secondary">osmannnkoyuncuuu@gmail.com</a>
        <div class="hidden md:block h-32 w-1 bg-dark dark:bg-white"></div>
      </div>
    </transition>
    <div class="block md:hidden">
      <p class="text-center text-white px-4">
        © Copyright 2023 - Developed by Osman KOYUNCU. All right reserved
      </p>
    </div>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { gsap } from 'gsap';

const before = (el) => {
  el.style.opacity = 0
}
const enter = (el) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    delay: 2.5
  })
}
</script>

<style scope>
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
}

@media screen and (max-width: 767px) {
  .vertical-text {
    display: none;
  }
}
</style>
