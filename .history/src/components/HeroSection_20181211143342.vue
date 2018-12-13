<template>
  <div class="columns">
    <div class="col-6 text" v-html="getText"></div>
    <div class="col-6 image">
      <img :src="getImage">
    </div>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  name: "HeroSection",

  props: ["section"],

  data() {
    return { services: store.services };
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

      return `../../static/images/services/service[0].image`;
    }
  }
};
</script>

<style scoped>
</style>
