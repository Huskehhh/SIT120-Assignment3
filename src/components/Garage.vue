<template>
  <div>
    <b-alert
        variant="danger"
        show
        v-for="veh in recalledVehicles" :key="veh">Your {{ veh }} has been recalled! Contact your local dealership
      immediately!
    </b-alert>

    <b-table
        id="cars"
        striped hover
        :items="buildTable">
    </b-table>

    <p>Legend: RED = recalled, GREEN = not recalled</p>

  </div>
</template>

<script>

export default {
  name: "Garage",
  components: {},
  props: {
    garage: Array,
    recalls: Array,
  },
  methods: {
    // Turns the car object into a pretty string
    getStringifiedText(car) {
      return car.year + " " + car.make + " " + car.model;
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

    // Checks if string1 = string2 ignoring case
    equalsIgnoreCase(string1, string2) {
      return string1.toLowerCase() === string2.toLowerCase();
    },
  },

  computed: {
    // Get all recalled vehicles of the user
    recalledVehicles: function () {
      let arr = [];

      for (let i = 0; i < this.garage.length; i++) {
        let c = this.garage[i];
        if (this.isRecalled(c)) {
          arr.push(this.getStringifiedText(c));
        }
      }

      return arr;
    },

    // Method to build the table depending on the car recall status
    buildTable: function () {
      let arr = [];

      for (let i = 0; i < this.garage.length; i++) {
        let car = this.garage[i];

        // Default to success row variant
        let newObj = {
          year: car.year,
          make: car.make,
          model: car.model,
          _rowVariant: "success"
        };

        // If the vehicle however, is recalled, then set as danger row variant (red)
        if (this.isRecalled(car)) {
          newObj._rowVariant = "danger";
        }

        // Push the new car obj to the array
        arr.push(newObj);
      }

      return arr;
    },
  }
}
</script>

<style scoped>
#cars {
  background: #fff;
}
</style>