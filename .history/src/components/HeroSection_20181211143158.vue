<template>
  <div class="columns">
    <div class="col-6 text" v-html="text"></div>
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

      return service.text;
    },
    getImage() {
      const service = this.services.filter(
        service => service.name === this.section
      );
      console.log(service[0].image);
      return service.image;
    }
  }
};
</script>

<style scoped>
</style>
