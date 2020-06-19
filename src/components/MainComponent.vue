<template>
  <div>
    <v-container fluid class="top-section purple-gradient-bg">
      <v-row class="white--text">
        <v-col class="mb-4 text-center" style="z-index: 1">
          <h1 class="display-2 font-weight-bold mb-3">Covid-19 in Malaysia</h1>

          <p v-if="covidMyCases" class="subheading font-weight-regular mb-5">
            <span class="display-1">{{covidMyCases.dataConfirmed}}</span>
            Confirmed cases in Malaysia as of {{updatedTime}}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="rounded-t-xl" flat style="margin-top:-40px;">
      <v-container id="main-component">
        <TheInformationCards :covidMyCases="covidMyCases" />

        <v-row class="justify-center">
          <v-col sm="6">
            <v-card class="rounded-xl mapImage">
              <v-img :src="covidMyCases.malaysiaMapSrc"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// import TheSparkline from "./TheSparkline";
import TheInformationCards from "./TheInformationCards";
import API from "../API";
import moment from "moment";

export default {
  components: {
    // TheSparkline,
    TheInformationCards
  },
  data: () => ({
    covidMyCases: {}
  }),
  computed: {
    updatedTime: function() {
      if (this.covidMyCases.updatedTime) {
        const time = moment(this.covidMyCases.updatedTime).format(
          "MMM D, YYYY h:mm a"
        );
        return time;
      }
      return "";
    }
  },
  methods: {
    saveCovidMyCasesToCache() {
      localStorage.setItem("covidMyCases", JSON.stringify(this.covidMyCases));
    }
  },
  async created() {
    if (localStorage.getItem("infiniteScrollEnabled") !== null) {
      this.covidMyCases = JSON.parse(localStorage.getItem("covidMyCases"));
    }

    if (navigator.onLine) {
      this.covidMyCases = await API.getCovidMyCaseObFirestore();
      console.log("created -> covidMyCases", this.covidMyCases);
      this.saveCovidMyCasesToCache();
    } else {
      this.covidMyCases = JSON.parse(localStorage.getItem("covidMyCases"));
    }
  }
};
</script>

<style lang="scss" scoped>
.top-section {
  margin-top: -56px;
  padding-top: 56px;
  padding-bottom: 50px;
}

#main-component {
  // max-width: 400px;
}

.mapImage {
  -webkit-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.30) !important;
  -moz-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.30) !important;
  box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.30) !important;
}
</style>