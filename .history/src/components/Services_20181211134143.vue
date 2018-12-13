<template>
  <section class="is-flex service-container">
    <div class="title has-text-centered">Services</div>
    <div class="columns services">
      <div class="is-2 service" v-for="service in services" :key="service.name">
        <figure class="image is-square">
          <figcaption v-text="service.name"></figcaption>
          <img class :src="getImage(service.image)">
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
  },

  methods: {
    getImage(image) {
      return require(`../assets/images/services/${image}`);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/bootstrap.scss";
.service-container {
  flex-direction: column;

  .title {
    text-transform: capitalize;
  }

  .services {
    justify-content: center;

    .service {
      $image-size: 164px;

      padding: 1em;

      .image {
        width: $image-size;
        height: $image-size;

        figcaption {
          text-align: center;
          text-transform: capitalize;
          padding: 0.3em 0;
        }
      }
    }
  }
}
</style>
