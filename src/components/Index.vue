<template>
  <div class="d-flex h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <div>
        <h3>SIT120 Project Proposal</h3>
        <dynamic-nav @update-login="updateLoginEvent"></dynamic-nav>
      </div>
    </header>
    <main role="main">
      <h1>Check your vehicle!</h1>
      <p class="lead">{{ mastheadDescription }}</p>
      <b-button v-b-modal.modal-1 v-if="!loggedIn">Register</b-button>
      <b-modal id="modal-1" title="Register">
        <register v-on:update-login="updateLoginEvent"></register>
      </b-modal>
    </main>
    <footer class="mt-auto">
      <div>
        <p>newnhamj@deakin.edu.au</p>
      </div>
    </footer>
  </div>
</template>

<script>
import DynamicNav from "@/components/DynamicNav";
import Register from "@/components/Register";

export default {
  name: 'Index',
  props: {},
  components: {
    DynamicNav,
    Register
  },

  data: function () {
    return {
      loggedIn: false,
      mastheadContent: "Check your vehicle!",
      mastheadDescription: "Don't miss important vehicle recall notifications",
      buttonText: "Register now",
    }
  },

  methods: {
    updateLoginEvent: function (value) {
      this.loggedIn = value;
      if (this.loggedIn) {
        this.mastheadContent = "Welcome back!"
        this.mastheadDescription = "Your garage:"
      }
    },
  }
}
</script>

<style scoped>

main {
  padding-top: 20%;
}

footer {
  padding-top: 30%;
}
</style>
