<template>
  <div>
    <logo/>
    <call-board class="container"/>
    <services class="container"/>
    <hero-section reversed class="container" section="construction"/>
  </div>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";

export default {
  name: "App",

  components: { CallBoard, Logo, Services, HeroSection }
};
</script>

<style lang="scss">
@import "./assets/scss/bootstrap.scss";

.hero-items {
  display: flex;
  flex-direction: column;
}
</style>
