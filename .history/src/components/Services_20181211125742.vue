<template>
  <div class="services">
    <h3 class="title">Services</h3>
    <div class="services columns">
      <div class="is-2 serivce" v-for="service in services" :key="service.name">
        <figure class="image is-square">
          <img class src="https://bulma.io/images/placeholders/256x256.png">
        </figure>
      </div>
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
