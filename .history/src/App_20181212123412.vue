<template>
  <div>
    <logo class="has-background-company"/>
    <call-board/>
    <services/>
    <hero-section
      class="container"
      v-for="service in services"
      :section="service.name"
      :key="service.name"
    />
    <contact class="container"/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import CallBoard from "./components/CallBoard";
import Logo from "./components/Logo";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";

import store from "./store.js";

export default {
  name: "App",

  components: { CallBoard, Logo, Services, HeroSection, Contact },

  data() {
    return {
      services: store.services
    };
  }
};
</script>

<style lang="scss">
@import "./assets/scss/bootstrap.scss";

.hero-items {
  display: flex;
  flex-direction: column;
}
</style>
