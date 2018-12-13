<template>
  <div class="columns">
    <div class="col-6 text" v-html="text"></div>
    <div class="col-6 image">
      <img :src="`../../static/images/${image}`">
    </div>
  </div>
</template>

<script>
import store from "../store.js";
console.log(store);
export default {
  name: "HeroSection",

  props: ["text", "image"],

  data() {
    return { ...store.services };
  }
};
</script>

<style scoped>
</style>
