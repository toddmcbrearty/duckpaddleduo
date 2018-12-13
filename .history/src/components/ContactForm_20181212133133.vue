<template>
  <div>
    <form>
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
        <div class="control">
          <recaptcha></recaptcha>
        </div>
      </div>

      <div class="field is-grouped has-text-right">
        <div class="control">
          <button class="button is-company" @click="submit">Submit</button>
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

export default {
  name: "ContactForm",

  components: { Recaptcha },

  props: ["services"],

  data() {
    return {
      key: "04558ab2-1079-47fa-a73f-d175cf604702"
    };
  },

  method: {
    submit() {},

    sendEmail() {
      Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        To: "them@website.com",
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
      }).then(message => alert(message));
    }
  }
};
</script>

<style scoped>
</style>
