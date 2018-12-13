<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="hero-items">
        <logo/>
        <call-board/>
      </div>
    </div>
  </section>
  <section>
    <services/>
  </section>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";
import Services from "./components/Services";

export default {
  name: "App",

  components: { CallBoard, Logo, Services }
};
</script>

<style lang="scss">
@import "./assets/scss/bootstrap.scss";

.hero-items {
  display: flex;
  flex-direction: column;
}
</style>
