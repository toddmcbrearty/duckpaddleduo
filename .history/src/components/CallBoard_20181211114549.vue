<template>
  <div class="call-board content">
    <div class="top has-text-centered">
      <div class="subtitle">We offer 3 kinds of service:</div>
      <div class="title g-c-f">GOOD • CHEAP • FAST</div>
      <div class="subtitle">But you can only pick 2</div>
    </div>
    <div class="call-tag">
      <div class="has-text-centered">
        <span class="call">Good & Cheap</span>
        <span class="to">won't be</span>
        <span class="action">Fast</span>
      </div>
      <div class="has-text-centered">
        <span class="call">Fast & Good</span>
        <span class="to">won't be</span>
        <span class="action">Cheap</span>
      </div>
      <div class="has-text-centered">
        <span class="call">Cheap & Fast</span>
        <span class="to">won't be</span>
        <span class="action">Good</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallBoard"
};
</script>

<style lang="scss" >
@import "../assets/bootstrap.scss";

.call-board {
  width: 25em;
  background: white;
  text-transform: uppercase;
  font-size: 2em;

  .call,
  .action {
    @include font-delius;
  }

  .to {
    font-size: 0.7em;
  }
}
</style>
