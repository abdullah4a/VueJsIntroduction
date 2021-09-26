<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ displayData }}</h1>
    <button @click="exampleFun">Click me</button>
    <!-- <Componet2 HomeChild="This is first Child of home" />
    <Componet2 HomeChild="This is 2nd Child" /> -->
  </div>
</template>
<script>
// import Componet2 from "./Componet-2.vue";
export default {
  name: "Home",
  components: {
    // Componet2,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      displayData: "Hello form Child",
    };
  },
  methods: {
    exampleFun() {
      alert("Hello from Function");
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
