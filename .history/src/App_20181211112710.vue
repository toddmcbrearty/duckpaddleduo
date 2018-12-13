<template>
  <section class="hero is-warning is-large">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-four-fifths is-offset-one-fifth">
          <div class="title-container is-flex">
            <figure class="image">
              <img src="./assets/duck-head.svg" class="logo-image">
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

<style lang="scss" scoped>
@import "./assets/bootstrap.scss";

.g-c-f {
  @include font-delius;
}

.title-container {
  $img-size: 5em;

  .image {
    margin-right: 0.3em;
  }

  .logo-title {
    @include font-condiment;
    font-size: 5em;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  figure {
    width: $img-size;
    height: $img-size;
  }
}
</style>
