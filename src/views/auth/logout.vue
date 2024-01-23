<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      token_admin: "",
      callback: "http://demo.iziway.tk/api/auth/admin",
    };
  },
  mounted() {
    let session = localStorage;

    session.clear();

    this.$router.push({ name: "Home" });
  },
};
</script>