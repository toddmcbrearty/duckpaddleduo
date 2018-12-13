<template>
  <div class="hero-section is-flex" :class="{'reversed': isReversed}">
    <div class="text" v-html="getText"></div>
    <div class="image-container">
      <div class="image-overlay"></div>
      <figure class="image">
        <img :src="getImage">
      </figure>
    </div>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  name: "HeroSection",

  props: ["section", "reversed"],

  data() {
    return {
      services: store.services,
      isReversed: false
    };
  },

  computed: {
    getText() {
      const service = this.services.filter(
        service => service.name === this.section
      );

      return service[0].description;
    },
    getImage() {
      const service = this.services.filter(
        service => service.name === this.section
      );

      return `../../static/images/services/${service[0].image}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  height: 400px;

  .text {
    background: white;
    flex: 0 0 50%;
  }

  .image-container {
    position: relative;

    .image-overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to left, transparent, white);
      z-index: 2;
    }

    .image {
      z-index: 1;
      flex: 0 0 50%;
      width: 100%;
      height: 100%;
      overflow: hidden;

      $angle: -10deg;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
.reversed {
  flex-direction: row-reverse;
}
</style>
