<template>
  <v-app>
    <TheAppBar />
    <v-content>
      <MainComponent />
    </v-content>
    <TheFooter class="mt-2" />
  </v-app>
</template>

<script>
import MainComponent from "./components/MainComponent";
import TheAppBar from "./components/TheAppBar";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",

  components: {
    MainComponent,
    TheAppBar,
    TheFooter
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
</style>