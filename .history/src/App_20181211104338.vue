<template>
  <section class="hero is-warning is-large call-to-action">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter columns">
          <span class="logo-container">
            <figure class="home-logo">
              <img src="./assets/duck-head.svg">
            </figure>
          </span>
          <span class="title-container">
            <div class="logo-title">Duck Paddle Duo</div>
            <ul>
              <h3 class="subtitle">We offer 3 kinds of service:</h3>
              <h2 class="title">GOOD • CHEAP • FAST</h2>
            </ul>
          </span>
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
  .logo-title {
    font-family: "Condiment", cursive;
    font-size: 5em;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-bottom: 0;
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
