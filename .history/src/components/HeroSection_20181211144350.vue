<template>
  <div class="hero-section is-flex" :class="{'reversed': isReversed}">
    <div class="text" v-html="getText"></div>
    <figure class="image">
      <img :src="getImage">
    </figure>
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
      isReversed: true
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

<style scoped>
.hero-section {
}
.reversed {
  flex-direction: row-reverse;
}
</style>
