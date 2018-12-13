<template>
  <div class="columns">
    <div class="col-6 text" v-html="text"></div>
    <div class="col-6 image">
      <img :src="`../../static/images/${image}`">
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",

  props: ["text", "image"]
};
</script>

<style scoped>
</style>
