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
            <div class="subtitle has-text-centered">We offer 3 kinds of service:</div>
            <div class="title g-c-f has-text-centered">GOOD • CHEAP • FAST</div>
            <div class="subtitle has-text-centered">But you can only pick 2</div>
            <ul class="call-tag">
              <li>
                <span class="call">Good & Cheap</span>
                <span class="to">won't be</span>
                <span class="action">Fast</span>
              </li>
              <li>
                <span class="call">Fast & Good</span>
                <span class="to">won't be</span>
                <span class="action">Cheap</span>
              </li>
              <li>
                <span class="call">Cheap & Fast</span>
                <span class="to">won't be</span>
                <span class="action">Good</span>
              </li>
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

  .call-tag {
    text-transform: uppercase;
    font-size: 2em;

    .call,
    .action {
      @include font-delius;
    }

    .to {
      font-size: 0.7rem;
    }
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
