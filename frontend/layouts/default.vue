<template>
  <v-app>
    <TheAppBar />
    <v-main>
      <nuxt />
    </v-main>
    <TheFooter v-if="$route.path == '/'" class="mt-2" />
    <v-snackbar
      v-model="isOffline"
      color="error"
      timeout="-1"
      vertical
      multi-line
    >
      You are not connecting to an internet connection.
      <br />The latest updates will be available once an internet connection is
      detected.
      <template #action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="isOffline = false"
          >Close</v-btn
        >
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import TheAppBar from '@/components/TheAppBar'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    TheAppBar,
    TheFooter,
  },
  data: () => ({
    isOffline: null,
  }),
  created() {
    if (process.browser) {
      if (navigator.onLine) {
        this.isOffline = false
      } else {
        this.isOffline = true
      }
    }
  },
}
</script>

<style lang="scss">
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
