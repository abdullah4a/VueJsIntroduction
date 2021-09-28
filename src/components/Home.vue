<template>
  <div>
    <h1>APIs</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in employee" :key="emp.id">
          <td>{{ emp.employee_name }}</td>
          <td>{{ emp.employee_salary }}</td>
          <td>{{ emp.employee_age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import apimixin from "../components/mixins/apimixin.js";
Vue.use(axios);
export default {
  name: "Home",
  components: {},
  props: {
    msg: String,
  },
  mixins: [apimixin],
  // data() {
  //   return {
  //     employee: undefined,
  //   };
  // },
  // mounted() {
  //   axios
  //     .get("https://dummy.restapiexample.com/api/v1/employees")
  //     .then((resp) => {
  //       // console.warn(resp.data.data);
  //       this.employee = resp.data.data;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // },
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
