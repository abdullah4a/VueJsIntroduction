<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
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
  </div>
</template>
<script>
import apimixin from "../components/mixins/apimixin";
export default {
  mixins: [apimixin],
};
</script>
