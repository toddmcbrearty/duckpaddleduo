<template>
  <div>
    <logo/>
    <call-board/>
    <services/>
    <section text image/>
  </div>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";
import Services from "./components/Services";
import Section from "./components/Section";

import store from './store.js';

export default {
  name: "App",

  components: { CallBoard, Logo, Services }

  data() {
    return { ...store }
    return { ...store }
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
