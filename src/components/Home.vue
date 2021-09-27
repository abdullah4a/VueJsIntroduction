<template>
  <div>
    <div>
      <h1>{{ displayData | Upper }}</h1>
      <h2>{{ PKR | cur }}</h2>
      <br /><br />
      <Componet2 @ChangeProps="ChangeData($event)" />
      <label for="Test">Enter Amount </label><br />
      <input type="number" id="Test" v-model="PKR" />
    </div>
  </div>
</template>
<script>
//date-fns
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
      togle: true,
      PKR: 10000,
      displayData: "hello from parent",
    };
  },
  watch: {
    displayData: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(` Old Value = ${oldValue}, New Value= ${newValue}`);
      },
    },
  },
  methods: {
    ChangeData(data) {
      this.displayData = data;
    },
    toggle() {
      this.togle = !this.togle;
    },
    SaveAmount() {
      this.PKR = document.querySelector("input").HTMLElement;
    },
  },
  beforeMount() {
    console.log("DOM is ready");
  },
  mounted() {
    console.log("DOM is Mounted");
  },
  beforeCreate() {
    this.UName = "abc";
    console.log("Before create" + this.UName);
  },
  created() {
    console.log("Created");
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
