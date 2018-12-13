<template>
  <section class="hero is-warning is-large">
    <div class="hero-body">
      <logo/>
    </div>
  </section>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";

export default {
  name: "App",

  components: { CallBoard, Logo }
};
</script>

<style lang="scss">
@import "./assets/bootstrap.scss";
</style>
