<template>
  <div class="logo is-flex" :class="pos">
    <span class="title-container is-flex">
      <figure class="logo-image is-hidden-mobile">
        <img src="../assets/images/duck-head.svg" class="logo-image">
      </figure>
      <span class="logo-title is-size-1 is-block-mobile">
        <span class="logo-word is-block-mobile has-text-centered">Duck</span>
        <span class="logo-word is-block-mobile has-text-centered">Paddle</span>
        <span class="logo-word is-block-mobile has-text-centered">Duo</span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Logo",

  props: {
    position: {
      default: "centered"
    }
  },

  data() {
    return {
      pos: ""
    };
  },

  created() {
    this.pos = this.position;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/bootstrap.scss";

.logo {
  justify-content: flex-start;
  padding: 1em;

  &.right {
    justify-content: flex-end !important;
  }
  &.centered {
    justify-content: center !important;
  }
  .title-container {
    flex: 0 0 600px;
    $img-size: 5em;
    $gap: 0.5em;
    align-content: center;

    .logo-image {
      margin-right: $gap;
    }

    .logo-title {
      align-content: center;

      @include font-delius;
      letter-spacing: normal;
      margin-bottom: 0;
      padding-bottom: 0;

      &,
      .logo-word {
        width: 100%;
      }
    }

    figure {
      width: $img-size;
      height: $img-size;
    }
  }
}
</style>
