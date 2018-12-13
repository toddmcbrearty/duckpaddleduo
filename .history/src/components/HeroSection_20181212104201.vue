<template>
  <div class="hero-section is-flex" :class="{'reversed': reversed}">
    <div class="text">
      <h2 class="title has-text-centered" v-text="service.name"></h2>
      <div class="description" v-html="service.description"></div>
    </div>
    <div class="image-container">
      <div class="image-overlay" :class="{'reversed': reversed}"></div>
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

  props: {
    section: {
      default: ""
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      services: store.services,
      service: {}
    };
  },

  created() {
    this.service = this.services
      .filter(service => service.name === this.section)
      .shift();
  },

  computed: {
    getImage() {
      return `../../static/images/services/${this.service.image}`;
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 400px;

.hero-section {
  height: $height;

  .text {
    background: white;
    flex: 0 0 50%;
    font-size: 1.3rem;
    font-weight: 300;
    font-style: italic;
    align-content: center;

    .title {
      text-transform: capitalize;
    }

    .description {
      display: table-cell;
      vertical-align: middle;
      height: calc($height);
      width: 100%;
      background: red;
    }
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

      &.reversed {
        background-image: linear-gradient(to right, transparent, white);
      }
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
