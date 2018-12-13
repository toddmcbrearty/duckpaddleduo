<template>
  <div class="services columns">
    <div class="is-2 serivce" v-for="service in services" :key="service.name">
      <figure class="image is-128x128">
        <img class src="https://bulma.io/images/placeholders/128x128.png">
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

<style lang="scss">
</style>
