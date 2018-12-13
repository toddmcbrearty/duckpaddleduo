<template>
  <div>
    <logo/>
    <call-board/>
    <services/>
  </div>
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
