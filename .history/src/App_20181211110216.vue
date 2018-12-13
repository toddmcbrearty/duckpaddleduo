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
          </span>
        </div>
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

.call-to-action {
  $img-size: 15em;
  .g-c-f {
    @include font-delius;
  }

  .logo-title {
    @include font-condiment;
    font-size: 5em;
    margin-bottom: 0;
    padding-bottom: 0;
  }

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
