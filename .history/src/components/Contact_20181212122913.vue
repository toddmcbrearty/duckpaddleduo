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

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select>
              <option value>Select a Service</option>
              <option v-for="service in services" v-text="service.name" :key="service.name"></option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Please give a summary of the services you are looking for"
          ></textarea>
        </div>
      </div>

      <div class="field">
        <script>
          grecaptcha.ready(function() {
            grecaptcha
              .execute("6LdvyYAUAAAAAFXRROVEwa-dyUcGq0d_6y-A5qV-", {
                action: "action_name"
              })
              .then(function(token) {
                // Verify the token on the server.
              });
          });
        </script>
      </div>
    </form>
  </div>
</template>

<script>
import store from "../store.js";

export default {
  name: "Contact",

  data() {
    return {
      ...store
    };
  }
};
</script>

<style scoped>
</style>
