<template>
  <b-modal
      id="modal-1"
      title="Register" @on="resetModal" @hidden="resetModal" @ok="handleOk">
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
          :state="emailState"
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required">
        <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          :state="passwordState"
          label="Password"
          label-for="password-input"
          invalid-feedback="Password is required">
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
    validateForm() {
      return this.validateEmail(this.email) && this.password.length > 5;
    },

    validateEmail(email) {
      // eslint-disable-next-line no-control-regex
      return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);
    },

    handleSubmit() {
      if (!this.validateForm()) return;

      this.$emit('update-login', true);

      // Hide a tick later
      this.$nextTick(() => {
        this.$bvModal.hide('modal-1')
      })
    },

    handleOk(bvModalEvt) {
      // Prevent modal from closing then trigger submission
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },

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