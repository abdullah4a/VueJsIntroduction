<template>
  <div>
    <!-- <h1>{{ HomeChild }}</h1> -->
    <!-- <h2>{{ displayMsg }}</h2> -->
    <div>
      <label for="FName">Enter First Name</label><br />
      <input type="text" id="FName" v-model="firstName" />
      <br /><br />
      <label for="LastName">Enter Last Name</label><br />
      <input type="text" id="LastName" v-model="SecondName" />
      <br /><br />
      <button @click="FullName">Show Full Name</button>
      <p>{{ ComputdValue }}</p>
      <p>{{ fulname }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Component2",
  props: {
    HomeChild: String,
  },
  data() {
    return {
      ComputdValue: " Hello from Data",
      firstName: null,
      SecondName: null,
      //   displayMsg: "Value",
    };
  },
  computed: {
    fulname: function() {
      return this.firstName + " " + this.SecondName;
    },
  },
  methods: {
    FullName() {
      this.ComputdValue = this.firstName + " " + this.SecondName;
    },
    changeProp() {
      this.$emit("ChangeProps", "Helllo from Child");
    },
  },
};
</script>
