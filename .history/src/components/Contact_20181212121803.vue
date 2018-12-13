<template>
  <div id="contact-form">
    <div class="is-company">Contact Us</div>
    <form action>
      <div class="field">
        <label for class="label">Name:</label>
        <div class="class">
          <input type="text" class="input" placeholder="Name">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  name: "Contact"
};
</script>

<style scoped>
</style>
