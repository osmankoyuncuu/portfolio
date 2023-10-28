<template>
  <div class="bg-light dark:bg-dark">
    <div class="px-4 md:px-20 xl:px-44">
      <div class="max-w-[1200px] mx-auto">
        <Banner />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "../components/home/Banner.vue";
import About from "../components/home/About.vue";
import Experience from "../components/home/Experience.vue";
import Work from "../components/home/Work.vue";
import Contact from "../components/home/Contact.vue";

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 10);
}
</script>