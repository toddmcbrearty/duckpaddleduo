<template>
  <section class="hero is-warning is-large call-to-action">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter columns">
          <div class="column">
            <figure class="home-logo">
              <img src="./assets/duck-head.svg">
            </figure>
          </div>
          <div class="column">
            <h1 class="title">Duck Paddle Duo</h1>
            <h2 class="subtitle">We do everything.</h2>
          </div>
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
    font-size: 2em;
  }

  $img-size: 15em;

  .home-logo {
    width: $img-size;
    height: $img-size;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
