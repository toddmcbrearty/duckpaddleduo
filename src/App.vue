<template>
  <div class="main container">
    <logo class="has-background-company-light"/>

    <section class="new-section">
      <call-board/>
    </section>

    <section class="new-section">
      <services class="has-background-company-light"/>
      <hero-section
        class="container"
        v-for="(service, index) in services"
        :section="service.name"
        :key="service.name"
        :reversed="index%2 === 0"
      />
    </section>

    <section class="new-section container columns">
      <div class="column is-8 is-offset-2">
        <contact-form :services="services"></contact-form>
      </div>
    </section>

    <big-footer :company="company"></big-footer>
  </div>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import BigFooter from "./components/BigFooter";

import store from "./store.js";

export default {
  name: "App",

  components: {
    CallBoard,
    Logo,
    Services,
    HeroSection,
    ContactForm,
    BigFooter
  },

  data() {
    return { ...store };
  }
};
</script>

<style lang="scss">
@import "./assets/scss/bootstrap.scss";

.hero-items {
  display: flex;
  flex-direction: column;
}
.new-section {
  padding: 2em 0;
}

.main {
  background: $company;
}
</style>
