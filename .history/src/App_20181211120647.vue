<template>
  <section class="hero is-warning">
    <div class="hero-body">
      <div class="hero-items">
        <logo/>
        <call-board/>
      </div>
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

.hero-items {
  display: flex;
  flex-direction: row;
}
</style>
