<template>
  <div class="is-flex service-container">
    <div>
      <div class="title has-text-centered">Services We Provide</div>
      <div class="columns services is-hidden-mobile">
        <a
          :href="`#detail-section-${service.name}`"
          class="is-2 is-1-mobile service"
          v-for="service in services"
          :key="service.name"
        >
          <figure class="image is-square">
            <img class :src="`../../static/images/services/${service.image}`">
          </figure>
          <div class="service-title" v-text="service.name"></div>
        </a>
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
  $image-size: 100%;

  flex-direction: column;
  padding: 2em 1em 2.3em;

  .title {
    text-transform: capitalize;
  }

  .services {
    justify-content: center;

    .service {
      height: 16%;
      padding: 1em;
      width: 16%;

      &.is-block-mobile {
        height: 100%;
        width: 100%;
      }

      .service-title {
        text-align: center;
        text-transform: capitalize;
        padding: 0.3em 0;
        font-weight: 700;
        color: $dark;
        font-size: 1rem;
      }

      .image {
        box-shadow: 1px 1px 1px $company-invert;
        width: $image-size;
        height: $image-size;
      }
    }
  }
}
</style>
