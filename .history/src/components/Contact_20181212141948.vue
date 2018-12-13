<template>
  <div id="contact-form" class="has-background-company">
    <div class="columns">
      <div class="column is-3 is-offset-3">
        <h2 class="title">Contact Us</h2>
        <div class="contact-info">
          <address>
            <div class="contact-item columns">
              <div class="column is-2">
                <strong>Email:</strong>
              </div>
              <div class="column item-data">
                <a :href="`mailto:${company.name}`" v-text="company.email.primary"></a>
              </div>
            </div>
            <div class="contact-item columns">
              <div class="column is-2">
                <strong>Phone:</strong>
              </div>
              <div class="item-data column">
                <div :key="number" v-for="number in company.phoneNumbers">
                  <a :href="`tel:${number}`" v-text="number"></a>
                </div>
              </div>
            </div>

            <div class="contact-item columns">
              <div class="column is-2">
                <strong>Address:</strong>
              </div>
              <div class="column">
                <a
                  href="https://www.google.com/maps/place/52+Duckpuddle+Rd,+Nobleboro,+ME+04555/@44.0924322,-69.4594747,17z/data=!3m1!4b1!4m5!3m4!1s0x4cadea2edc4b2b8f:0x6b1deeccfa5656eb!8m2!3d44.0924284!4d-69.4572807"
                  title="Open in Google Maps"
                >
                  <span>{{company.address}}</span>
                  <br>
                  <span>{{company.city}} {{company.state}}, {{company.postalcode}}</span>
                </a>
              </div>
            </div>
          </address>
        </div>
      </div>
      <div class="column is-3">
        <contact-form :services="services" class="box"></contact-form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import ContactForm from "../components/ContactForm";

export default {
  name: "Contact",

  components: { ContactForm },

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
    color: $company-light !important;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .address {
    text-indent: 20%;
  }
}
</style>
