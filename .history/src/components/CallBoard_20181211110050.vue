<template>
  <div class="call-board">
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
  </div>
</template>

<script>
export default {
  name: "CallBoard"
};
</script>

<style scoped>
</style>
