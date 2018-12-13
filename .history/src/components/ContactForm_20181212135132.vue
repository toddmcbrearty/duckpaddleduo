<template>
  <div>
    <div class="notification is-danger" v-show="hasError">
      <button class="delete" @click="hasError = false"></button>
      Please fill out all required fields.
    </div>
    <form>
      <div class="field">
        <label for class="label">Name:</label>
        <div class="class">
          <input type="text" model="name" class="input" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <label for class="label required">Email:</label>
        <div class="class">
          <input type="email" model="email" class="input" placeholder="Email">
        </div>
      </div>

      <div class="field">
        <label class="label">Service</label>
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
        <label class="label required">Message</label>
        <div class="control">
          <textarea
            model="message"
            class="textarea"
            placeholder="Please give a summary of the services you are looking for"
          ></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <recaptcha></recaptcha>
        </div>
      </div>

      <div class="field is-grouped has-text-right">
        <div class="control">
          <button class="button is-primary" @click.stop="submit()">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Recaptcha from "../components/Recaptcha";

import store from "../store.js";

export default {
  name: "ContactForm",

  components: { Recaptcha },

  props: ["services"],

  data() {
    return {
      key: "04558ab2-1079-47fa-a73f-d175cf604702",
      name: "",
      message: "",
      email: "",
      from: store.company.email.primary,
      hasError: false
    };
  },

  methods: {
    submit() {
      if (this.email === "" && this.name === "" && this.message === "") {
        this.hasError = true;

        return;
      }

      sendEmail();
    },

    sendEmail() {
      Email.send({
        SecureToken: this.key,
        To: this.email,
        From: this.from,
        Subject: "Website service request",
        Body: `
          from: ${this.name}<br />
          service: ${
            this.service === "" ? "no service selected" : this.service
          }<br />
          message: ${this.message}
        `
      }).then(message => alert(message));
    }
  }
};
</script>

<style lang="scss" >
.required::after {
  content: "*";
  font-size: 1.3rem;
  color: red;
}
</style>
