<template>
  <div class="logo is-flex">
    <span class="title-container is-flex">
      <figure class="logo-image">
        <img src="./assets/duck-head.svg" class="logo-image">
      </figure>
      <span class="logo-title">Duck Paddle Duo</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss">
@import "./assets/bootstrap.scss";

.logo {
  justify-content: center;

  .title-container {
    flex: 0 0 600px;
    $img-size: 6em;
    $gap: 0.5em;
    align-content: center;

    .logo-image {
      margin-right: $gap;
    }

    .logo-title {
      align-content: center;

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
}
</style>
