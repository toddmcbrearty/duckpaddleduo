<template>
  <section class="hero is-warning is-large">
    <div class="hero-body">
      <div class="logo is-flex">
        <span class="title-container is-flex">
          <figure class="logo-image">
            <img src="./assets/duck-head.svg" class="logo-image">
          </figure>
          <span class="logo-title">Duck Paddle Duo</span>
        </span>
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

<style lang="scss">
</style>
