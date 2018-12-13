<template>
  <div class="hero-section is-flex" :class="{'reversed': isReversed}">
    <div class="text" v-html="getText"></div>
    <div>
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
  background: red;
  height: 300px;

  .text {
    background: white;
    flex: 0 0 50%;
  }

  .image {
    flex: 0 0 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::after {
      content: " ";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 70%;
      z-index: 1;
      background: white;
      transform-origin: bottom right;
      -ms-transform: skew(-30deg, 0deg);
      -webkit-transform: skew(-30deg, 0deg);
      transform: skew(-30deg, 0deg);
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
.reversed {
  flex-direction: row-reverse;
}
</style>
