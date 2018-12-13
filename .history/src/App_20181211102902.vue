<template>
  <section class="hero is-warning is-large call-to-action">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <img src="./assets/duck-head.svg" class="home-logo">
        </div>
        <div class="column">
          <h1 class="title">Duck Paddle Duo</h1>
          <h2 class="subtitle">We do everything.</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" >
@import "./assets/bootstrap.scss";

.call-to-action {
  .title {
    font-family: "Condiment", cursive;
  }

  .home-logo {
    width: 2em;
    height: 2em;
  }
}
</style>
