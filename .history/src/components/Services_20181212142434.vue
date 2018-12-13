<template>
  <div class="is-flex service-container">
    <div class="title has-text-centered">Services</div>
    <div class="columns services">
      <a
        :href="`#detail-section-${service.name}`"
        class="is-2 service"
        v-for="service in services"
        :key="service.name"
      >
        <figure class="image is-square">
          <figcaption v-text="service.name"></figcaption>
          <img class :src="`../../static/images/services/${service.image}`">
        </figure>
      </a>
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
  },

  computed: {
    getLink() {
      if (this.service.name !== "undefined") {
        location.href = this.service.name;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/bootstrap.scss";
.service-container {
  $image-size: 10pc;

  flex-direction: column;
  padding: 2em 1em;

  .title {
    text-transform: capitalize;
  }

  .services {
    justify-content: center;

    .service {
      padding: 1em;

      .image {
        box-shadow: 1px 1px 1px $company-invert;
        width: $image-size;
        height: $image-size;

        figcaption {
          text-align: center;
          text-transform: capitalize;
          padding: 0.3em 0;
          font-weight: 700;
          color: $dark;
          font-size: 1pc;
        }
      }
    }
  }
}
</style>
