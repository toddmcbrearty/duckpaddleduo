<template>
  <section class="hero is-warning is-large">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <span class="title-container is-flex">
            <figure class="logo-image">
              <img src="./assets/duck-head.svg" class="logo-image">
            </figure>
            <span class="logo-title">Duck Paddle Duo</span>
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

<style lang="scss">
@import "./assets/bootstrap.scss";

.g-c-f {
  @include font-delius;
}

.title-container {
  $img-size: 5em;
  $gap: 0.5em;

  .image {
    margin-right: $gap;
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
