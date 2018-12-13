<template>
  <footer class="footer">
    <div class="columns">
      <div class="column is-4 is-offset-3">
        <h2 class="subtitle is-size-4">Contact Us</h2>
        <div cass="contact-info">
          <address>
            <div class="contact-item">
              <div class="item-data">
                <a :href="`mailto:${company.name}`" v-text="company.email.primary"></a>
              </div>
            </div>

            <div class="contact-item">
              <div class="item-data">
                <span :key="number" v-for="(number, index) in company.phoneNumbers">
                  <a :href="`tel:${number}`" v-text="number" :class="{'dot': index%2 === 0}"></a>
                </span>
              </div>
            </div>

            <div class="contact-item">
              <div class="item-data">
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
        <h2 class="subtitle is-size-4">Services</h2>
        <ul>
          <li v-for="service in services" :key="service.name">
            <a :href="`#${service.name}`" class="is-link" v-text="service.name"></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import store from "../store.js";

export default {
  name: "BigFooter",

  data() {
    return { ...store };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/bootstrap.scss";

.footer {
  h2.subtitle {
    @include font-source-sans;
  }

  .contact-item {
    padding: 0 0 0.7em;
  }

  a {
    color: $dark;

    &.dot::after {
      content: " • ";
    }
  }
}
</style>
