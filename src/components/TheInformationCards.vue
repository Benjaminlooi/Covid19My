<template>
  <v-row dense class="mt-5">
    <v-col v-for="card in cards" :key="card.title" cols="6">
      <v-card :color="card.color" dark>
        <v-card-title class="subtitle-1 font-weight-bold">{{card.title}}</v-card-title>

        <v-card-subtitle class="display-1 white--text">{{card.data}}</v-card-subtitle>
        <v-divider class="mx-4" style="border-color: rgba(255, 255, 255, 0.4)"></v-divider>
        <v-card-subtitle class="subtitle-2 white--text">{{card.dataChanges}}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["covidMyCases"],
  data: () => ({
    //
  }),
  computed: {
    cards: function() {
      return [
        {
          title: "Confirmed",
          data: this.covidMyCases.dataConfirmed,
          dataChanges: this.covidMyCases.dataConfirmedChanges,
          color: "#FDB058"
        },
        {
          title: "Recovered",
          data: this.covidMyCases.dataRecovered,
          dataChanges: this.covidMyCases.dataRecoveredChanges,
          color: "#4AD579"
        },
        {
          title: "Deaths",
          data: this.covidMyCases.dataDeaths,
          dataChanges: this.covidMyCases.dataDeathsChanges,
          color: "#FD5858"
        },
        {
          title: "In Treatment",
          data: this.covidMyCases.dataInTreatment,
          dataChanges: this.covidMyCases.dataInTreatmentChanges,
          color: "#83afdc"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>