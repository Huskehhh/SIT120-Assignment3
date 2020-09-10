<template>
  <nav class="nav nav-masthead justify-content-center">
    <a class="nav-link btn btn-lg active"><b-button>Home</b-button></a>
    <a class="nav-link btn btn-lg" v-if="!loggedIn" @click="click(true)"><b-button>Login</b-button></a>
    <a class="nav-link btn btn-lg" v-if="loggedIn" @click="click(false)"><b-button>Logout</b-button></a>
    <a class="nav-link btn btn-lg"><b-button v-b-modal.search id="search-recall">Search Recalls</b-button></a>
    <search-recalls :recalls="recalls" @vehicle-recalled="showRecallModal"></search-recalls>
  </nav>
</template>

<script>
import SearchRecalls from "@/components/SearchRecalls";
export default {
  name: "DynamicNav",
  components: {SearchRecalls},
  props: {
    loggedIn: Boolean,
    recalls: Array,
  },

  methods: {
    // Calls an event for parent component to update prop value
    click(newLogged) {
      this.$emit('update-login', newLogged);
    },

    showRecallModal(car) {
      this.$emit("show-recall-alert", car);
    }
  }
}
</script>

<style scoped>
a, .nav-link, .btn, .btn-lg {
  align-content: center;
  font-weight: 400;
  color: rgba(255, 255, 255, .7);
  text-align: center;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
  display: block;
  padding: .5rem 1rem;
  box-sizing: border-box;
  text-decoration: none;
}
</style>