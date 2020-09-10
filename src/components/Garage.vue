<template>
  <div>
    <b-alert
        variant="danger"
        show
        v-for="veh in recalledVehicles" :key="veh">Your {{ veh }} has been recalled! Contact the manufacturer
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
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    getStringifiedText(car) {
      return car.year + " " + car.make + " " + car.model;
    },

    isRecalled(car) {
      // Iterate over all recalls and see if provided 'car' meets any of them
      for (let i = 0; i < this.recalls.length; i++) {
        let recall = this.recalls[i];

        // Compare make, model and year, if all match, return true, if not, continue iteration
        if (recall.make === car.make &&
            recall.model === car.model &&
            recall.year === car.year) {
          return true;
        }
      }

      // If we make it here, return false
      return false;
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

        let newObj = {
          year: car.year,
          make: car.make,
          model: car.model,
          _rowVariant: "success"
        };

        if (this.isRecalled(car)) {
          newObj._rowVariant = "danger";
        }

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