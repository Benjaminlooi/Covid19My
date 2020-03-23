<template>
  <v-container id="main-component">
    <v-row>
      <v-col class="mb-4 text-center">
        <h1 class="hero-text display-2 font-weight-bold mb-3">Covid-19 in Malaysia</h1>

        <p v-if="covidMyCases" class="subheading font-weight-regular">
          <span class="display-1">{{covidMyCases.dataConfirmed}}</span> Confirmed cases in Malaysia as of Mar 16, 2020 5:30 PM
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <MainSparkline />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import MainSparkline from "./MainSparkline";
import API from "../API"

export default {
  components: {
    MainSparkline
  },
  data: () => ({
    covidMyCases: null,
  }),
  async created() {
    this.covidMyCases = await API.getCovidMyCases()
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=BioRhyme:400,700&display=swap");

#main-component {
  h1 {
    font-family: "BioRhyme", serif !important;
  }
}
</style>