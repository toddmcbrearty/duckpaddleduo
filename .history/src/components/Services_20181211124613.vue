<template>
  <div class="services">
    <div v-for="service from services" :key="service.name">{{service.name}}</div>
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
