<template>
  <div class="flex">
    <input
      type="checkbox"
      id="darkmode-toggle"
      :checked="darkMode"
      :onChange="changeDarkMode"
      class="darkMode__input" />
    <label htmlFor="darkmode-toggle" class="darkMode__label">
      <img
        src="/img/moon.svg"
        alt="icon"
        width="23"
        height="23"
        class="absolute top-[3px] right-[3px] z-10 duration-500" />
      <img
        src="/img/sun.svg"
        alt="icon"
        width="23"
        height="23"
        class="absolute top-[3px] right-[3px] -translate-x-[46px] z-10 duration-500" />
    </label>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["darkMode", "changeDarkMode"]);
</script>

<style>
.darkMode__label {
  width: 75px;
  height: 30px;
  position: relative;
  display: block;
  background-color: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.5s;
}
.darkMode__label:after {
  content: "";
  width: 26px;
  height: 26px;
  position: absolute;
  top: 2px;
  left: 2px;
  background: linear-gradient(180deg, var(--white-color), var(--light-color));
  border-radius: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.darkMode__input {
  width: 0;
  height: 0;
  visibility: hidden;
}

.darkMode__input:checked + .darkMode__label {
  background: var(--primary-color);
}
.darkMode__input:checked + .darkMode__label:after {
  left: 73px;
  transform: translateX(-100%);
  background: linear-gradient(180deg, var(--primary-color), var(--dark-color));
}
</style>
