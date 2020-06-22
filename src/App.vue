<template>
  <v-app>
    <TheAppBar />
    <v-main>
      <router-view />
    </v-main>
    <TheFooter class="mt-2" v-if="$route.path == '/'" />
    <v-snackbar v-model="isOffline" color="error" timeout="-1" vertical multi-line>
      You are not connecting to an internet connection.
      <br />The latest updates will be available once an internet connection is detected.
      <template
        v-slot:action="{ attrs }"
      >
        <v-btn color="white" text v-bind="attrs" @click="isOffline = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import TheAppBar from "./components/TheAppBar";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: {
    TheAppBar,
    TheFooter
  },
  data: () => ({
    isOffline: null
  }),
  created() {
    if (navigator.onLine) {
      this.isOffline = false;
    } else {
      this.isOffline = true;
    }
  }
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