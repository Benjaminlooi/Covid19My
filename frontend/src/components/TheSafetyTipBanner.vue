<template>
  <v-card color="#54fff4" class="mx-1 rounded-xl safety-tip-banner">
    <v-row>
      <v-col cols="5" class="py-0">
        <v-img src="../assets/images/doctor.png" contain width="100%" class="banner-img ml-3" style="bottom: -2px;"></v-img>
      </v-col>
      <v-col cols="7" class="pa-2 my-auto">
        <v-card-text class="py-0 font-weight-medium">Stay home to</v-card-text>
        <v-card-text class="py-0 font-weight-medium">Stop corona virus</v-card-text>

        <v-card-actions class="pl-4 py-1">
          <v-btn small dark color="deep-purple accent-4" to="/covid-information">Learn More</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.safety-tip-banner {
  -webkit-box-shadow: 0px 5px 20px -2px rgba(84, 255, 244, 0.65) !important;
  -moz-box-shadow: 0px 5px 20px -2px rgba(84, 255, 244, 0.65) !important;
  box-shadow: 0px 5px 20px -2px rgba(84, 255, 244, 0.65) !important;
}

.banner-img {
  margin-top: -35px;
}
</style>