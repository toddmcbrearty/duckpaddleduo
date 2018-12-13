<template>
  <section class="is-flex service-container">
    <div class="title">Services</div>
    <div class="columns services">
      <div class="is-2 service" v-for="service in services" :key="service.name">
        <figure class="image is-square">
          <figcaption v-text="service.name"></figcaption>
          <img class src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
      </div>
    </div>
  </section>
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
.service-container {
  flex-direction: column;

  .services {
    justify-content: center;

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
          padding: 0.3em 0;
        }
      }
    }
  }
}
</style>
