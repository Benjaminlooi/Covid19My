<template>
  <v-app>
    <TheAppBar />
    <v-main>
      <MainComponent />
    </v-main>
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

.purple-gradient-bg {
  background: rgb(108, 60, 228) !important;
  background: linear-gradient(
    120deg,
    rgba(108, 60, 228, 1) 0%,
    rgba(63, 26, 167, 1) 50%,
    rgba(146, 53, 170, 1) 100%
  ) !important;
}
</style>