<template>
  <div class="secion columns" :class="{'reversed': isReversed}">
    <div class="is-half text" v-html="getText"></div>
    <div class="is-half image">
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

<style scoped>
.reversed {
  flex-direction: row-reverse;
}
</style>
