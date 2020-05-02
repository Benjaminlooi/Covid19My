<template>
  <div>
    <v-container fluid class="pt-0">
      <v-row class="hero-section white--text">
        <v-col class="mb-4 text-center" style="z-index: 1">
          <h1 class="display-2 font-weight-bold mb-3">Covid-19 in Malaysia</h1>

          <p v-if="covidMyCases" class="subheading font-weight-regular mb-5">
            <span class="display-1">{{covidMyCases.dataConfirmed}}</span>
            Confirmed cases in Malaysia as of {{updatedTime}}
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="main-component">
      <!-- <v-row>
      <v-col class="mb-5" cols="12">
        <TheSparkline />
      </v-col>
      </v-row>-->
      <TheInformationCards :covidMyCases="covidMyCases" />
    </v-container>
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
  async created() {
    this.covidMyCases = await API.getCovidMyCaseObFirestore();
    // console.log("created -> covidMyCases", this.covidMyCases);
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  margin-top: -68px;
  padding-top: 52px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #fa84d4, #66eece);
    border-radius: 0 0 50% 50%/ 0 0 100% 100%;
    transform: scaleX(2);
  }
}
</style>