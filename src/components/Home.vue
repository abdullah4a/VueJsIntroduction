<template>
  <div class="hello">
    <h1>{{ displayData }}</h1>
    <a :href="google">Google</a>
    <br />
    <br />
    <br />
    <h1 style="white-space:pre-line">{{ data }}</h1>
    <textarea id="test" cols="30" rows="10" v-model="data"></textarea>
    <br />
    <p>{{ UName }}</p>
    <label for="UName">User Name</label>
    <input
      type="text"
      id="UName"
      v-model="UName"
      placeholder="Enter User Name "
    />
    <h2 :style="{ color: 'blue' }">Style arguments</h2>
    <br /><br />
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
      UName: "",
      data: "test",
      google: "https://google.com",
      displayData: "Hello form Parent",
    };
  },
  methods: {
    ChangeData(data) {
      this.displayData = data;
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
