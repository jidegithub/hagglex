<template>
  <div>
    <Login />
  </div>
</template>

<script>
import Login from "../components/Login";
export default {
  name: "index",
  data() {
    return {
      mode: "login",
    };
  },
  components: {
    Login,
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
