<template>
  <div class="hello">
    <h1>{{ displayData }}</h1>

    <a :href="google">Google</a>
    <h2 :style="{ color: 'blue' }">Style arguments</h2>
    <Componet2 @ChangeProps="ChangeData($event)" />
  </div>
</template>
<script>
import Componet2 from "./Componet-2.vue";
export default {
  name: "Home",
  components: {
    Componet2,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      google: "https://google.com",
      displayData: "Hello form Parent",
    };
  },
  methods: {
    ChangeData(data) {
      this.displayData = data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
