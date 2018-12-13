<template>
  <div class="services">
    <div v-for="service in services" :key="service.name">
      <figure class="image is-128X128"><image</figure>
    </div>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  name: "Services",

  data() {
    return {
      services: store.services
    };
  }
};
</script>

<style scoped>
</style>
