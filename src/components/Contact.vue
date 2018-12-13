<template>
  <div id="contact-form" class="has-background-company">
    <div class="columns">
      <div class="column is-3">
        <contact-form :services="services"></contact-form>
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
  font-size: 1.2rem;
  a {
    color: black !important;

    &:hover {
      text-decoration: underline;
    }
  }

  .address {
    text-indent: 20%;
  }
}
</style>
