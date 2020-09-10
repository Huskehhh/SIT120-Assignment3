<template>
  <b-modal
      id="register-vehicle"
      title="Register a vehicle!" @on="resetModal" @hidden="resetModal" @ok="handleOk">
    <form ref="form" @submit.stop.prevent="handleSubmit">

      <b-form-group
          :state="yearState"
          label="Year"
          label-for="year-input"
          invalid-feedback="Year is required">
        <b-form-input
            id="year-input"
            v-model="year"
            :state="yearState"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          :state="makeState"
          label="Make"
          label-for="make-input"
          invalid-feedback="Make is required">
        <b-form-input
            id="make-input"
            v-model="make"
            :state="makeState"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          :state="modelState"
          label="Model"
          label-for="model-input"
          invalid-feedback="Model is required">
        <b-form-input
            id="model-input"
            v-model="model"
            :state="modelState"
            required
        ></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: "RegisterVehicle",
  data() {
    return {
      make: "",
      model: "",
      year: "",
      makeState: null,
      modelState: null,
      yearState: null,
    }
  },
  props: {
    garage: Array
  },
  methods: {
    // Further form validation
    validateForm() {
      let numeric = this.year.match(/\d+/g);

      // Make sure all inputs aren't empty and that year only contains numeric characters with a length of 4
      return this.make !== "" &&
          this.model !== "" &&
          this.year !== "" &&
          numeric != null &&
          this.year.length === 4;
    },

    // Method to handle form submission
    handleSubmit() {
      // If validation fails, return immediately.
      if (!this.validateForm()) return;

      // Replace all spaces with nothing to avoid weird inputs
      let make = this.replaceAll(this.make, " ", "");
      let model = this.replaceAll(this.model, " ", "");
      let year = this.replaceAll(this.year, " ", "");

      // Capitalise first letter for cleanliness
      make = this.capitaliseFirst(make);
      model = this.capitaliseFirst(model);

      // Build car object again
      let car = {
        year: year,
        make: make,
        model: model,
      };

      // Hide a tick later
      this.$nextTick(() => {
        this.$bvModal.hide("register-vehicle")
      });

      // Check if already registered, if not, emit event
      if (!this.isAlreadyRegistered(car)) {
        this.$emit("vehicle-registered", car);
      } else {
        alert("This vehicle is already registered on your account!");
      }
    },

    // Method to handle when the user clicks "Ok"
    handleOk(bvModalEvt) {
      // Prevent modal from closing then trigger submission
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },

    // Reset data when modal closes
    resetModal() {
      this.make = "";
      this.makeState = null;
      this.model = "";
      this.modelState = null;
      this.year = "";
      this.yearState = null;
    },

    // Helper method to check if an inputted car is already registered
    isAlreadyRegistered(car) {
      // Iterate over all recalls and see if provided 'car' meets any of them
      for (let i = 0; i < this.garage.length; i++) {
        let iterate = this.garage[i];

        // Compare make, model and year, if all match, return true, if not, continue iteration
        if (this.equalsIgnoreCase(iterate.make, car.make) &&
            this.equalsIgnoreCase(iterate.model, car.model) &&
            this.equalsIgnoreCase(iterate.year, car.year)) {
          return true;
        }
      }

      // If we make it here, no matches were found so return false
      return false;
    },

    // Had to write some helper methods cause javascript is silly and doesn't have these

    // This simply checks if two strings are == ignoring case sensitivity
    equalsIgnoreCase(string1, string2) {
      return string1.toLowerCase() === string2.toLowerCase();
    },

    // This replaces all occurrences of 'q1' with 'q2' in 'input'
    replaceAll(input, q1, q2) {
      let result = input;
      while (result.includes(q1)) {
        result = input.replace(q1, q2);
      }
      return result;
    },

    // This capitalises the first letter in the string
    capitaliseFirst(input) {
      return input.charAt(0).toUpperCase() + input.slice(1);
    }
  }
}
</script>

<style scoped>

</style>