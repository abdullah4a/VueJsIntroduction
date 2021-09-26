<template
  ><div>
    <h1>{{ HomeChild }}</h1>
    <!-- <h2>{{ displayMsg }}</h2> -->
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
      //   displayMsg: "Value",
    };
  },
  methods: {
    changeProp() {
      this.$emit("ChangeProps", "Helllo from Child");
    },
  },
  destroyed() {
    alert("Destroyed");
  },
  beforeDestroy() {
    alert("Before Destroying");
  },
};
</script>
