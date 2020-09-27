<template>
  <VerifyForm />
</template>

<script>
import VerifyForm from "../components/Verify";
export default {
  middleware: ["authenticated"],
  name: "verify",
  components: {
    VerifyForm,
  },
};
</script>

<style>
</style>