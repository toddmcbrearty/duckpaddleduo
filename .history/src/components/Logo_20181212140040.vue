<template>
  <div class="logo is-flex" :class="pos">
    <span class="title-container is-flex">
      <figure class="logo-image">
        <img src="../assets/images/duck-head.svg" class="logo-image">
      </figure>
      <span class="logo-title">Duck Paddle Duo</span>
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
  background: #a0d6b4;
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
      font-size: 3rem;
      letter-spacing: normal;
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
