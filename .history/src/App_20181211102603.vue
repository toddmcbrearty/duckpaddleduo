<template>
  <section class="hero is-warning is-large call-to-action">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/256x256.png">
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

<style lang="scss" >
@import "./assets/bootstrap.scss";

.call-to-action {
  .title {
    font-family: "Condiment", cursive;
  }
}
</style>
