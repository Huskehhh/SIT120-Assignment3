<template>
  <nav class="nav nav-masthead justify-content-center">
    <a class="nav-link btn btn-lg active">Home</a>
    <a class="nav-link btn btn-lg" v-if="!loggedIn" @click="click(true)">Login</a>
    <a class="nav-link btn btn-lg" v-if="loggedIn" @click="click(false)">Logout</a>
    <a class="nav-link btn btn-lg">Search Recalls</a>
  </nav>
</template>

<script>
export default {
  name: "DynamicNav",
  props: {
    loggedIn: Boolean,
  },

  methods: {
    click(newLogged) {
      this.$emit('update-login', newLogged);
    },
  }
}
</script>

<style scoped>

</style>