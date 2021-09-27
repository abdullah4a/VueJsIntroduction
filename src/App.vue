<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <bootstrap />
    <!-- <h1>{{ Data | cur }}</h1> -->
    <!-- <Home msg="Hello from parents" /> -->
  </div>
</template>

<script>
import bootstrap from "./components/bootstrap.vue";
// import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    bootstrap,
    // Home,
  },
  data() {
    return {
      Data: 10000,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
