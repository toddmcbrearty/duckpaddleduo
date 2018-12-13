<template>
  <div>
    <logo class="has-background-company"/>
    <call-board/>
    <services/>
    <hero-section
      class="container"
      v-for="service in services"
      :section="service.name"
      :key="service.name"
    />
    <contact class="container"/>

    <footer class="footer"></footer>
  </div>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";

import store from "./store.js";

export default {
  name: "App",

  components: { CallBoard, Logo, Services, HeroSection, Contact },

  data() {
    return {
      services: store.services
    };
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
