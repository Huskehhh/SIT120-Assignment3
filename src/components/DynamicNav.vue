<template>
  <b-navbar type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="#">iRecall</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <b-button @click="contactUs(true)">Home</b-button>
      </b-nav-item>
      <b-nav-item v-if="!loggedIn" @click="click(true)">
        <b-button>Login</b-button>
      </b-nav-item>
      <b-nav-item v-if="loggedIn" @click="click(false)">
        <b-button>Logout</b-button>
      </b-nav-item>
      <b-nav-item>
        <b-button v-b-modal.search id="search-recall">Search Recalls</b-button>
      </b-nav-item>
      <search-recalls
          :recalls="recalls"
          @vehicle-recalled="showRecallModal"
          @simulate-loading="simulateLoading"></search-recalls>
      <b-nav-item v-if="loggedIn">
        <b-button v-b-modal.register-vehicle id="register-vehicle">Register Vehicle</b-button>
      </b-nav-item>
      <register-vehicle :garage="garage" @vehicle-registered="handleRegisteredVehicleEvent"></register-vehicle>
      <b-nav-item>
        <b-button @click="contactUs(false)">Contact us</b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
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

    // Emits contact us event
    contactUs(forceOff) {
      this.$emit("contact-us", forceOff);
    },

    simulateLoading(timeout) {
      this.$emit("simulate-loading", timeout);
    }
  }
}
</script>

<style scoped>
a {
  align-content: center;
  font-weight: 400;
  color: rgba(255, 255, 255, .7);
  text-align: center;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
  display: block;
  padding: .5rem 1rem;
  box-sizing: border-box;
  text-decoration: none;
}
</style>