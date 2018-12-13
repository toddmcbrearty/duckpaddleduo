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

export default {
  name: "HeroSection",

  props: ["section"],

  data() {
    return { services: store.services };
  }

  computed: {

  }
};
</script>

<style scoped>
</style>
