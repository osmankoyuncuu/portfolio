<template>
  <div class="relative">
    <Navbar @toggleMenu="() => (openHamburgerMenu = !openHamburgerMenu)"
      @toggleMenuClose="() => (openHamburgerMenu = false)" :openHamburgerMenu="openHamburgerMenu" />
    <router-view />
    <OpacityScreen v-if="openHamburgerMenu" @close="() => (openHamburgerMenu = false)" />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/shared/Navbar.vue";
import Footer from "./components/shared/Footer.vue";
import OpacityScreen from "./components/shared/OpacityScreen.vue";
const openHamburgerMenu = ref(false);
</script>

<style></style>
