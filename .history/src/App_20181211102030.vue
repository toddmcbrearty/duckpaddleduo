<template>
  <section class="hero is-warning is-large call-to-action">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img src="./assets/duck-head.svg" alt="Duck Paddle Duo">
          </figure>
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

<style lang="scss" scoped>
@import "./assets/bootstrap.scss";

@import url("https://fonts.googleapis.com/css?family=Condiment");

.call-to-action {
  .title {
    font-family: "Condiment", cursive;
  }

  .home-logo {
    width: 4em;
    height: 4em;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
