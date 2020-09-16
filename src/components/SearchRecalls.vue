<template>
  <b-modal
      id="search"
      title="Search Recalls" @on="resetModal" @hidden="resetModal" @ok="handleOk">
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
  name: "SearchRecalls",
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
    recalls: Array
  },
  methods: {
    validateForm() {
      let numeric = this.year.match(/\d+/g);

      // Make sure all inputs aren't empty and that year only contains numeric characters with a length of 4
      return this.make !== "" &&
          this.model !== "" &&
          this.year !== "" &&
          numeric != null &&
          this.year.length === 4;
    },

    handleSubmit() {
      if (!this.validateForm()) return;

      // Replace all spaces with nothing to avoid weird inputs
      let make = this.replaceAll(this.make, " ", "");
      let model = this.replaceAll(this.model, " ", "");
      let year = this.replaceAll(this.year, " ", "");

      // Build our car object again
      let car = {
        year: year,
        make: make,
        model: model,
      };

      // Hide a tick later
      this.$nextTick(() => {
        this.$bvModal.hide("search")
      });

      // Simulate loading for 300ms
      this.$emit("simulate-loading", 300);

      // Check if recalled
      if (this.isRecalled(car)) {
        this.$emit("vehicle-recalled", car);
      } else {
        alert("That vehicle has no recall attached to it!");
      }
    },

    // This handles when the user clicks "Ok"
    handleOk(bvModalEvt) {
      // Prevent modal from closing then trigger submission
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },

    // Reset local data when the modal closes
    resetModal() {
      this.make = "";
      this.makeState = null;
      this.model = "";
      this.modelState = null;
      this.year = "";
      this.yearState = null;
    },

    // Helper method to check if a vehicle is recalled
    isRecalled(car) {
      // Iterate over all recalls and see if provided 'car' meets any of them
      for (let i = 0; i < this.recalls.length; i++) {
        let recall = this.recalls[i];

        // Compare make, model and year, if all match, return true, if not, continue iteration
        if (this.equalsIgnoreCase(recall.make, car.make) &&
            this.equalsIgnoreCase(recall.model, car.model) &&
            this.equalsIgnoreCase(recall.year, car.year)) {
          return true;
        }
      }

      // If we make it here, return false
      return false;
    },

    // Helper methods

    // Checks if string1 == string2 ignoring case
    equalsIgnoreCase(string1, string2) {
      return string1.toLowerCase() === string2.toLowerCase();
    },

    // Replaces all occurrences of 'q1' with 'q2' in 'input', and returns resulting string
    replaceAll(input, q1, q2) {
      let result = input;
      while (result.includes(q1)) {
        result = input.replace(q1, q2);
      }
      return result;
    }
  }
}
</script>

<style scoped>

</style>