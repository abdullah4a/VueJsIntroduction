<template>
  <div class="hello">
    <div v-if="Istrue">
      <h1>{{ msg }}</h1>
      <h1>{{ displayData }}</h1>
    </div>
    <button @click="countFun">Count + 1</button> <br />
    <br />
    <button @click="exampleFun">Click me</button>
    <div>
      <ul v-for="a in array" :key="a.id">
        <li>
          {{ a }}
        </li>
      </ul>
    </div>
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
      Istrue: false,
      count: 1,
      displayData: "Hello form Child",
      array: [1, 1, 1, 1, 1, 1],
    };
  },
  methods: {
    exampleFun() {
      this.Istrue = true;
      this.displayData = "Data is Changed";
    },
    countFun() {
      this.count++;
      console.log(this.count);
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
