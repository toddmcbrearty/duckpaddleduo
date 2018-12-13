<template>
  <div>
    <logo/>
    <call-board/>
    <services/>
    <hero-section :text="() => getText('construction')" :image="() => getImage('construction')"/>
  </div>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";

import store from "./store.js";

export default {
  name: "App",

  components: { CallBoard, Logo, Services, HeroSection },

  data() {
    return { ...store };
  },

  methods: {
    getText(text) {
      return this.store.services
        .map(item => (item.name === text ? item.description : false))
        .filter();
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/bootstrap.scss";

.hero-items {
  display: flex;
  flex-direction: column;
}
</style>
