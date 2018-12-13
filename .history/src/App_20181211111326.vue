<template>
  <section class="hero is-warning is-large">
    <div class="hero-body">
      <div class="logo-container columns">
        <figure class="column image is-128by128">
          <img src="./assets/duck-head.svg">
        </figure>
        <span class="column logo-title">Duck Paddle Duo</span>
      </div>
    </div>
  </section>
</template>

<script>
import CallBoard from "./components/CallBoard";

export default {
  name: "App",

  components: { CallBoard }
};
</script>

<style lang="scss" >
@import "./assets/bootstrap.scss";

$img-size: 5em;

.logo-container {
  .logo-title {
    @include font-condiment;
    font-size: 5em;
  }

  .image {
    width: $img-size;
    height: $img-size;
  }
}
</style>
