<template>
  <div id="contact-form" class="has-background-company">
    <div class="columns">
      <div class="column is-4 is-offset-2">
        <h2 class="title">Contact Us</h2>

        <div class="contact-info">
          <div class="contact-item">
            <strong>Email:</strong>
            <span class="item-data">
              <a :href="`mailto:${company.name}`" v-text="company.email.primary"></a>
            </span>
          </div>
          <div class="contact-item">
            <strong>Phone:</strong>
            <span class="item-data">
              <div
                class="tag has-background-company number"
                :key="number"
                v-for="number in company.phoneNumbers"
              >
                <a :href="`tel:${number}`" v-text="number"></a>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div class="column is-4">
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
            <div class="control">
              <recaptcha></recaptcha>
            </div>
          </div>

          <div class="field is-grouped has-text-right">
            <div class="control">
              <button class="button is-company">Submit</button>
            </div>
            <div class="control">
              <button class="button is-text">Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import Recaptcha from "../components/Recaptcha";

export default {
  name: "Contact",

  components: { Recaptcha },

  data() {
    return {
      ...store
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
@import "../../node_modules/bulma/bulma.sass";

#contact-form {
  a {
    color: $company-invert !important;
  }
}
</style>
