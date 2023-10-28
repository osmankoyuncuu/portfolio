<template>
  <div ref="contactRef"
    class="min-h-[70vh] md:min-h-[90vh] flex flex-col gap-8 justify-center items-center dark:text-white" id="contact">
    <h3 class="anton">What's Next?</h3>
    <h2 class="anton text-secondary">Get In Touch</h2>
    <p class="text-center md:px-48 dark:opacity-70">
      Although I’m not currently looking for any new opportunities, my inbox is
      always open. Whether you have a question or just want to say hi, I’ll try
      my best to get back to you!
    </p>
    <a href="mailto:osmannnkoyuncuuu@gmail.com">
      <Button title="Say Hello" />
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from "../shared/Button.vue";

gsap.registerPlugin(ScrollTrigger);
const contactRef = ref(null)

onMounted(() => {
  gsap.from(contactRef.value, {
    y: 400,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: contactRef.value,
      start: window.innerWidth < 768 ? '-100 bottom ' : '100 bottom',
      end: '100 bottom',
      markers: false,
    }
  });
});
</script>
