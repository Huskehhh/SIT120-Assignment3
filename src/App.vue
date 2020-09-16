<template>
  <div id="app">
    <div class="vld-parent">
      <loading :active.sync="isLoading"
               :can-cancel="false"
               :is-full-page="fullPage"></loading>
    </div>
    <div class="d-flex h-100 p-3 mx-auto flex-column">
      <div>
        <dynamic-nav
            @update-login="updateLoginEvent"
            :logged-in="loggedIn"
            :recalls="recalls"
            @show-recall-alert="handleShowRecalled"
            :garage="garage"
            @add-registered-vehicle="addRegisteredVehicle"
            @contact-us="handleContactUs"
            @simulate-loading="simulateLoading"
        ></dynamic-nav>
      </div>
      <header class="mb-auto">
        <b-alert variant="danger" show v-if="showRecalledVehicle" dismissible>
          {{ getStringifiedText(this.searchedVehicle) }} has been
          recalled.
          If you own a vehicle like this, please contact your local dealership immediately!
        </b-alert>
      </header>

      <main role="main" v-if="showMain">
        <h1>{{ mastheadContent }}</h1>
        <p class="lead" id="mastheadDescription">{{ mastheadDescription }}</p>
        <b-button v-b-modal.modal-1 v-if="!loggedIn">Register</b-button>
        <register @update-login="updateLoginEvent"></register>
        <garage v-if="loggedIn" :garage="garage" :recalls="recalls"></garage>
      </main>

      <main role="main" v-if="showContactUs" id="contact-us">
        <h1>Contact us!</h1>
        <a href="https://github.com/Huskehhh/">
          <font-awesome-icon :icon="['fab', 'github-square']" size="5x"/>
        </a>

        <a href="mailto:newnhamj@deakin.edu.au">
          <font-awesome-icon :icon="['fas', 'envelope-square']" size="5x"/>
        </a>
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
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Index',
  props: {},
  components: {
    Garage,
    DynamicNav,
    Register,
    FontAwesomeIcon,
    Loading
  },

  data: function () {
    return {
      isLoading: false,
      fullPage: true,
      loggedIn: false,
      mastheadContent: "About us!",
      mastheadDescription: "iRecall is a service that enables you to register an account complete with your personal vehicles." +
          " Once registered, we will track recalls that affect your vehicles and notify you if your vehicles are impacted.",
      buttonText: "Register now",
      showRecalledVehicle: false,
      showMain: true,
      showContactUs: false,
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
      this.simulateLoading(1500);
      this.loggedIn = value;
      if (this.loggedIn) {
        // Change the masthead content to be different
        this.mastheadContent = "Your garage:"
        this.mastheadDescription = ""
      } else {
        // Default back to the original values
        this.mastheadContent = "About us!";
        this.mastheadDescription = "iRecall is a service that enables you to register an account complete with your personal vehicles." +
            " Once registered, we will track recalls that affect your vehicles and notify you if your vehicles are impacted.";
      }
    },

    simulateLoading: function (timeout) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false
      }, timeout)
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

    // Inverse both
    handleContactUs(forceOff) {
      this.simulateLoading(100);
      if (forceOff) {
        this.showContactUs = false;
        this.showMain = true;
      } else {
        this.showMain = !this.showMain;
        this.showContactUs = !this.showContactUs;
      }
    }
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

#mastheadDescription {
  margin: auto;
  width: 40%;
  padding-bottom: 1rem;
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
  position: absolute;
  top: 30%;
  align-self: center;
}

footer {
  position: fixed;
  bottom: 0;
  align-self: center;
}

#contact-us, #contact-us > a:hover, #contact-us > a:focus, #contact-us > a {
  background-color: inherit;
  color: inherit;
  padding-left: 10px;
  padding-right: 10px;
}

#contact-us > a:hover {
  color: #333;
  transition: color .20s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>