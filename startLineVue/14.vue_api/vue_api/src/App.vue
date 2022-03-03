<template>
  <div>
    <VueWatch />
    <br />
    <VueWatchDemo />
  </div>
</template>

<script>
import VueWatch from "./components/VueWatch.vue";
import VueWatchDemo from "./components/VueWatchDemo.vue";

export default {
  name: "App",
  components: {
    VueWatch,
    VueWatchDemo,
  },
};
</script>

<style></style>
