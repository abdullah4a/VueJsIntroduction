<template>
  <div>
    <div v-if="togle">
      <Componet2 :HomeChild="displayData" />
    </div>
    <button @click="toggle">Toggle</button>
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
      togle: true,
      displayData: "Hello form Parent",
    };
  },
  methods: {
    ChangeData(data) {
      this.displayData = data;
    },
    toggle() {
      this.togle = !this.togle;
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
