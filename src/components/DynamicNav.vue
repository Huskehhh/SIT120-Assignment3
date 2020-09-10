<template>
  <nav class="nav nav-masthead justify-content-center">
    <a class="nav-link btn btn-lg" v-if="!loggedIn" @click="click(true)"><b-button>Login</b-button></a>
    <a class="nav-link btn btn-lg" v-if="loggedIn" @click="click(false)"><b-button>Logout</b-button></a>
    <a class="nav-link btn btn-lg"><b-button v-b-modal.search id="search-recall">Search Recalls</b-button></a>
    <search-recalls :recalls="recalls" @vehicle-recalled="showRecallModal"></search-recalls>
    <a class="nav-link btn btn-lg" v-if="loggedIn"><b-button v-b-modal.register-vehicle id="register-vehicle">Register Vehicle</b-button></a>
    <register-vehicle :garage="garage" @vehicle-registered="handleRegisteredVehicleEvent"></register-vehicle>
  </nav>
</template>

<script>
import SearchRecalls from "@/components/SearchRecalls";
import RegisterVehicle from "@/components/RegisterVehicle";
export default {
  name: "DynamicNav",
  components: {RegisterVehicle, SearchRecalls},
  props: {
    loggedIn: Boolean,
    recalls: Array,
    garage: Array,
  },

  methods: {
    // Calls an event for parent component to update prop value
    click(newLogged) {
      this.$emit('update-login', newLogged);
    },

    // Helper method to pass the event call from it's child to parent
    showRecallModal(car) {
      this.$emit("show-recall-alert", car);
    },

    // Helper method to pass the event call from it's child to parent
    handleRegisteredVehicleEvent(car) {
      this.$emit("add-registered-vehicle", car);
    },
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