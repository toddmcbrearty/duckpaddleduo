<template>
  <div class="services">
    <div v-for="service in services" :key="service.name">
      <figure class="image is-128x128">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
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
