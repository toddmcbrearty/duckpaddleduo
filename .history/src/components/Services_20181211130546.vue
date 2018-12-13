<template>
  <div class="services">
    <h3 class="title">Services</h3>
    <div class="columns">
      <div class="is-2 service" v-for="service in services" :key="service.name">
        <figure class="image is-square">
          <figcaption v-text="service.name"></figcaption>
          <img class src="https://bulma.io/images/placeholders/128x128.png">
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
@import "../assets/scss/bootstrap.scss";
.services {
  .service {
    $image-size: 164px;

    padding: 1em;

    .image {
      width: $image-size;
      height: $image-size;

      figcaption {
        @include font-condiment;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
}
</style>
