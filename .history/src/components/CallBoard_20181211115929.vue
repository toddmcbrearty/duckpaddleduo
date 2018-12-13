<template>
  <div class="call-board content">
    <div class="top has-text-centered">
      <div class="title">We offer 3 kinds of service:</div>
      <div class="title font-delius">GOOD • CHEAP • FAST</div>
      <div class="title">But you can only pick 2</div>
    </div>
    <div class="call-tag">
      <div class="has-text-centered">
        <span class="call">
          Good
          <span class="amper"></span> Cheap
        </span>
        <span class="to">won't be</span>
        <span class="action">Fast</span>
      </div>
      <div class="has-text-centered">
        <span class="call">
          Fast
          <span class="amper"></span> Good
        </span>
        <span class="to">won't be</span>
        <span class="action">Cheap</span>
      </div>
      <div class="has-text-centered">
        <span class="call">
          Cheap
          <span class="amper"></span> Fast
        </span>
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
  width: 20em;
  background: white;
  border-radius: 8px;
  padding: 0.3em;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 700;

  .call,
  .action {
    @include font-delius;
    font-weight: 700;
  }

  .to {
    font-size: 0.7em;
  }

  .amper {
    &::after {
      content: "&";
      color: red;
    }
  }
}
</style>
