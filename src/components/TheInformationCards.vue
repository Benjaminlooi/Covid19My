<template>
  <v-row class="pa-2">
    <v-col v-for="card in cards" :key="card.title" cols="6" sm="3" class="pa-2">
      <v-card :color="card.color" :style="card.style" class="rounded-xl" dark>
        <v-card-title class="subtitle-2 font-weight-bold">{{card.title}}</v-card-title>

        <v-card-subtitle class="display-1 white--text pb-2">{{card.data}}</v-card-subtitle>
        <v-divider class="mx-4" style="border-color: rgba(255, 255, 255, 0.4)"></v-divider>
        <v-card-subtitle class="body-2 white--text py-2">{{card.dataChanges}}</v-card-subtitle>
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
          color: "#FDB058",
          style: `-webkit-box-shadow: 0px 5px 20px -2px rgba(253,176,88,0.65);
-moz-box-shadow: 0px 5px 20px -2px rgba(253,176,88,0.65);
box-shadow: 0px 5px 20px -2px rgba(253,176,88,0.65);`
        },
        {
          title: "Recovered",
          data: this.covidMyCases.dataRecovered,
          dataChanges: this.covidMyCases.dataRecoveredChanges,
          color: "#4AD579",
          style: `-webkit-box-shadow: 0px 5px 20px -2px rgba(74,213,121,0.65);
-moz-box-shadow: 0px 5px 20px -2px rgba(74,213,121,0.65);
box-shadow: 0px 5px 20px -2px rgba(74,213,121,0.65);`
        },
        {
          title: "Deaths",
          data: this.covidMyCases.dataDeaths,
          dataChanges: this.covidMyCases.dataDeathsChanges,
          color: "#FD5858",
          style: `-webkit-box-shadow: 0px 6px 23px -1px rgba(253,88,88,0.65);
-moz-box-shadow: 0px 6px 23px -1px rgba(253,88,88,0.65);
box-shadow: 0px 6px 23px -1px rgba(253,88,88,0.65);`
        },
        {
          title: "In Treatment",
          data: this.covidMyCases.dataInTreatment,
          dataChanges: this.covidMyCases.dataInTreatmentChanges,
          color: "#83afdc",
          style: `-webkit-box-shadow: 0px 6px 23px -1px rgba(131,175,220,0.65);
-moz-box-shadow: 0px 6px 23px -1px rgba(131,175,220,0.65);
box-shadow: 0px 6px 23px -1px rgba(131,175,220,0.65);`
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>