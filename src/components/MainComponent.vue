<template>
  <v-container id="main-component">
    <v-row class="hero-section white--text">
      <v-col class="mb-4 text-center" style="z-index: 1">
        <h1 class="display-2 font-weight-bold mb-3">Covid-19 in Malaysia</h1>

        <p v-if="covidMyCases" class="subheading font-weight-regular">
          <span class="display-1">{{covidMyCases.dataConfirmed}}</span> Confirmed cases in Malaysia as of Mar 16, 2020 5:30 PM
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-5" cols="12">
        <TheSparkline />
      </v-col>
    </v-row>
    <TheInformationCards />
  </v-container>
</template>

<script>
import TheSparkline from "./TheSparkline";
import TheInformationCards from "./TheInformationCards";
import API from "../API";

export default {
  components: {
    TheSparkline,
    TheInformationCards
  },
  data: () => ({
    covidMyCases: null
  }),
  async created() {
    this.covidMyCases = await API.getCovidMyCases();

    let dateToday = new Date();
    console.log("created -> dateToday", dateToday);
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  margin-top: -68px;
  padding-top: 52px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #fa84d4, #66eece);
    border-radius: 0 0 50% 50%/ 0 0 100% 100%;
    transform: scaleX(1.8);
  }
}
</style>