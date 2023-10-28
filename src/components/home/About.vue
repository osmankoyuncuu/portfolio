<template>
  <div ref="aboutRef" class="aboutRef min-h-[50vh] md:min-h-[70vh] py-24 flex flex-col justify-center" id="about">
    <Header header="About Me" />
    <div class="flex flex-col-reverse md:flex-row gap-4 items-center dark:text-white">
      <div class="w-full md:w-3/4 pr-0 lg:pr-24 flex flex-col gap-8 dark:opacity-80">
        <p>
          Hello, I'm Osman! I would like to tell you a little bit about myself.
          I am a Full Stack Developer and my passion for the software world, my
          interest in technological projects and my hunger for continuous
          learning led me to develop myself in this field.
        </p>
        <p>
          I started my software development journey in 2022 and since then I
          have worked on a wide range of projects such as web applications,
          databases, user interfaces and more. I have experience in front-end
          and back-end development and this helps me to make my projects more
          efficient and user-friendly.
        </p>
        <p>
          I see coding as an art and every project is a new opportunity. Solving
          problems, optimizing my code and improving the user experience excites
          me every day.
        </p>
        <p>
          I am always open to learning and improving myself while working, and
          in a world where technology is changing rapidly, I am motivated to
          keep up with new technologies and trends. I also care about
          collaboration and completing projects successfully with everyone in
          the team.
        </p>
      </div>
      <div class="w-3/5 sm:w-1/2 md:w-[45%]">
        <img src="/img/profile.png" alt="profile" class="w-full z-20" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "../shared/Header.vue";

gsap.registerPlugin(ScrollTrigger);

const aboutRef = ref(null)

onMounted(() => {
  gsap.from(aboutRef.value, {
    y: 200,
    opacity: 0,
    duration: 1,
    delay: window.innerWidth < 768 ? 1.5 : 0,
    scrollTrigger: {
      trigger: aboutRef.value,
      start: '50 bottom',
      markers: false,
    }
  });
});

</script>
