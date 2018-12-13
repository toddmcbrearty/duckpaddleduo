<template>
  <div class="call-board is-flex" :class="pos">
    <div class="board content">
      <div class="top has-text-centered">
        <div class="call-title">We offer 3 kinds of service:</div>
        <div class="g-c-f font-delius">GOOD • CHEAP • FAST</div>
        <div class="call-title">But you can only pick 2</div>
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
  </div>
</template>

<script>
export default {
  name: "CallBoard",

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

<style lang="scss" >
@import "../assets/bootstrap.scss";
.call-board {
  justify-content: flex-start;

  &.right {
    justify-content: flex-end !important;
  }
  &.centered {
    justify-content: center !important;
  }
  background: red;

  .board {
    width: 16em;
    background: white;
    border-radius: 8px;
    padding: 0.3em;
    text-transform: uppercase;
    font-size: 3em;

    .call-title {
      font-size: 1.6rem;
    }

    .g-c-f {
      font-weight: 700;
      background: red;
      color: white;
      border-radius: 4px;
    }

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
}
</style>
