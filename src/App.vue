<template>
  <div id="app">
    <div class="d-flex h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3>iRecall</h3>
          <dynamic-nav
              @update-login="updateLoginEvent"
              :logged-in="loggedIn"
              :recalls="recalls"
              @show-recall-alert="handleShowRecalled"
              :garage="garage"
              @add-registered-vehicle="addRegisteredVehicle"
          ></dynamic-nav>
        </div>
        <b-alert variant="danger" show v-if="showRecalledVehicle" dismissible>
          {{ getStringifiedText(this.searchedVehicle) }} has been
          recalled.
          If you own a vehicle like this, please contact your local dealership immediately!
        </b-alert>
      </header>

      <main role="main">
        <h1>{{ mastheadContent }}</h1>
        <p class="lead">{{ mastheadDescription }}</p>
        <b-button v-b-modal.modal-1 v-if="!loggedIn">Register</b-button>
        <register @update-login="updateLoginEvent"></register>
        <garage v-if="loggedIn" :garage="garage" :recalls="recalls"></garage>
      </main>

      <footer class="mt-auto">
        <div>
          <p>newnhamj@deakin.edu.au</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import DynamicNav from "@/components/DynamicNav";
import Register from "@/components/Register";
import Garage from "@/components/Garage";

export default {
  name: 'Index',
  props: {},
  components: {
    Garage,
    DynamicNav,
    Register
  },

  data: function () {
    return {
      loggedIn: false,
      mastheadContent: "Check your vehicle!",
      mastheadDescription: "Don't miss important vehicle recall notifications",
      buttonText: "Register now",
      showRecalledVehicle: false,
      searchedVehicle: {},
      garage: [
        {
          make: "Toyota",
          model: "Camry",
          year: "2000",
        },
        {
          make: "Honda",
          model: "Civic",
          year: "2002",
        },
        {
          make: "Suzuki",
          model: "Swift",
          year: "1998",
        },
      ],
      recalls: [
        {
          make: "Suzuki",
          model: "Swift",
          year: "1998",
          recalled: true,
        },
      ]
    }
  },

  methods: {
    // This method is called via child components
    updateLoginEvent: function (value) {
      this.loggedIn = value;
      if (this.loggedIn) {
        // Change the masthead content to be different
        this.mastheadContent = "Welcome back!"
        this.mastheadDescription = "Your garage:"
      } else {
        // Default back to the original values
        this.mastheadContent = "Check your vehicle!";
        this.mastheadDescription = "Don't miss important vehicle recall notifications";
      }
    },

    // Handles the show recalled search event
    handleShowRecalled: function (car) {
      this.showRecalledVehicle = true;
      this.searchedVehicle = car;
    },

    // Method to handle event of registered vehicle addition, simply pushes the argument to the array
    addRegisteredVehicle: function (car) {
      this.garage.push(car);
    },

    // Helper method to turn car object into pretty string
    getStringifiedText(car) {
      return car.year + " " + car.make + " " + car.model;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  height: 100%;
  background: linear-gradient(to bottom, rgba(93, 78, 67, 0.9) 0%, rgba(93, 78, 67, 0.9) 100%), url("assets/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

h3, h1, p {
  color: rgba(255, 255, 255, .7);
}

h3 {
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  white-space: nowrap;
}

.nav > a:hover {
  background-color: #333;
}

a:hover {
  color: #d6370c;
  text-decoration: underline
}
</style>

<style scoped>
main {
  padding-top: 5rem;
  position: center;
}

footer {
  position: fixed;
  bottom: 0;
  align-self: center;
}
</style>