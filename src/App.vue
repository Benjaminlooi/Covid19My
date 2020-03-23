<template>
  <v-app>
    <v-app-bar app color="transparent" elevation="0" dark>
      <div class="d-flex align-center">Covid-19 <sup>MY</sup></div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <MainComponent />
    </v-content>
  </v-app>
</template>

<script>
import MainComponent from "./components/MainComponent"

export default {
  name: "App",

  components: {
    MainComponent
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">

</style>