<template>
  <VerifyForm />
</template>

<script>
import VerifyForm from "../components/verifyForm";
export default {
  middleware: "authenticated",
  name: "verify",
  components: {
    VerifyForm,
  },
};
</script>

<style>
</style>