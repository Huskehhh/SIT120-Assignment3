<template>
  <b-modal
      id="modal-1"
      title="Register" @hidden="resetModal" @ok="handleOk" @on="resetModal">
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
          :state="emailState"
          invalid-feedback="Email is required"
          label="Email"
          label-for="email-input">
        <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          :state="passwordState"
          invalid-feedback="Password is required"
          label="Password"
          label-for="password-input">
        <b-form-input
            id="password-input"
            v-model="password"
            :state="passwordState"
            required
            type="password"
        ></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      emailState: null,
      passwordState: null,
    }
  },
  methods: {
    // Validates the form input
    validateForm() {
      return this.validateEmail(this.email) && this.password.length > 5;
    },

    // Validates the email input against regex
    validateEmail(email) {
      // eslint-disable-next-line no-control-regex
      return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);
    },

    handleSubmit() {
      // If we fail to validate the form, bail out
      if (!this.validateForm()) return;

      // Calls event to notify parent of login update
      this.$emit('update-login', true);

      // Hide a tick later
      this.$nextTick(() => {
        this.$bvModal.hide('modal-1')
      })
    },

    // Handles when the user clicks ok
    handleOk(bvModalEvt) {
      // Prevent modal from closing then trigger submission
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },

    // Reset local data on modal close
    resetModal() {
      this.email = ''
      this.emailState = null
      this.password = ''
      this.passwordState = null
    },
  }
}
</script>

<style scoped>

</style>