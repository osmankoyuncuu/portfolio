<template>
  <div
    class="fixed top-0 w-full bg-dark text-white px-4 md:px-8 flex justify-end md:justify-center items-center h-16 z-50 duration-300"
    id="navbar">
    <transition appear @beforeEnter="beforeNavbar" @enter="enterLogo">
      <img ref="logoRef" src="/img/logo.png" alt="logo" width="125"
        class="cursor-pointer absolute left-4 md:left-6 xl:left-28" @click="handleScrool('top')">
    </transition>
    <transition appear @beforeEnter="beforeNavbar" @enter="enterNav">
      <nav class="hidden md:flex gap-8 items-center">
        <h3 v-for="nav in navList" :key="nav.id" class="capitalize hover:text-secondary cursor-pointer font-semibold"
          @click="handleScrool(nav.name)">
          {{ nav.name }}
        </h3>
      </nav>
    </transition>
    <transition appear @beforeEnter="beforeNavbar" @enter="enterSwitch">
      <div class="hidden md:block absolute right-4 md:right-6 xl:right-28">
        <DarkModeSwitchButton :darkMode="darkMode" :changeDarkMode="changeDarkMode" />
      </div>
    </transition>
    <transition appear @beforeEnter="beforeNavbar" @enter="enterLogo">
      <div class="hamburgerIcon block md:hidden z-50" :class="{ open: openHamburgerMenu }" @click="toggleHamburgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </transition>
    <div ref="mobileNavbar" class="md:hidden absolute right-0 top-0 h-screen">
      <nav v-if="openHamburgerMenu"
        class="mobileNavbar h-full flex flex-col items-center justify-center gap-8 bg-dark w-[200px] z-40">
        <h3 v-for="nav in navList" :key="nav.id" class="capitalize hover:text-secondary cursor-pointer font-semibold"
          @click="handleScrool(nav.name)">
          {{ nav.name }}
        </h3>
        <DarkModeSwitchButton :darkMode="darkMode" :changeDarkMode="changeDarkMode" />
      </nav>
    </div>
  </div>
</template>

<script setup>
import { watch, ref, onMounted } from "vue";
import { gsap } from "gsap";
import { navList } from "../../data/data";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DarkModeSwitchButton from "./DarkModeSwitchButton.vue";

gsap.registerPlugin(ScrollTrigger);

const mobileNavbar = ref(null)

const beforeNavbar = (el) => {
  el.style.opacity = '0'
  el.style.transform = 'translateY(-100px)'
}

const enterLogo = (el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1
  })
}
const enterNav = (el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.33
  })
}
const enterSwitch = (el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.66
  })
}

const props = defineProps({
  openHamburgerMenu: {
    type: Boolean,
    description: "openHamburgerMenu",
  },
});

const emit = defineEmits(["toggleMenu", "toggleMenuClose"]);

const darkMode = ref(
  typeof window !== "undefined"
    ? localStorage.getItem("theme") === null ||
      localStorage.getItem("theme") === "dark"
      ? true
      : false
    : true
);

const toggleHamburgerMenu = () => {
  emit("toggleMenu");
  gsap.from(mobileNavbar.value, {
    x: '100%',
    opacity: 0,
    duration: .5
  })
  gsap.to(mobileNavbar.value, {
    x: 0,
    opacity: 1,
    duration: 0.5,
  });
};

const handleScrool = (name) => {
  const element = document.getElementById(name);
  element.scrollIntoView({
    behavior: "smooth",
  });
  emit("toggleMenuClose");
};
const changeDarkMode = () => {
  darkMode.value = !darkMode.value;
};

const darkModeChanged = () => {
  if (darkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "white");
  }
};

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 64) {
    navbar.classList.add("shadow-2xl");
  } else {
    navbar.classList.remove("shadow-2xl");
  }
});

watch(darkMode, darkModeChanged);

onMounted(darkModeChanged);
</script>

<style>
.hamburgerIcon {
  width: 25px;
  height: 17px;
  position: relative;
  transform: rotate(0);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.hamburgerIcon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 9px;
  opacity: 1;
  transform: rotate(0);
  transition: 0.25s ease-in-out;
}

.hamburgerIcon span:nth-child(1) {
  top: 0;
  left: 0;
  transform-origin: left center;
}

.hamburgerIcon span:nth-child(2) {
  top: 7px;
  right: 0;
  transform-origin: left center;
}

.hamburgerIcon span:nth-child(3) {
  top: 14px;
  left: 0;
  transform-origin: left center;
}

.hamburgerIcon.open span:nth-child(1) {
  transform: rotate(-45deg);
  top: 15px;
  left: 8px;
  height: 4px;
}

.hamburgerIcon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
  height: 4px;
}

.hamburgerIcon.open span:nth-child(3) {
  transform: rotate(45deg);
  top: -3px;
  left: 8px;
  height: 4px;
}

.lineAnimate {
  display: inline-block;
  padding-bottom: 0.1rem;
  position: relative;
}

.lineAnimate::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #5871f1;
  transition: width 0.25s ease-in-out;
}

.lineAnimate:hover::before {
  width: 100%;
}
</style>
