<template>
  <section class="hero is-warning is-large">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter columns">
          <div class="title-container">
            <figure class="image home-logo">
              <img src="./assets/duck-head.svg">
            </figure>
            <span class="logo-title">Duck Paddle Duo</span>
          </div>
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

$img-size: 5em;
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
</style>
