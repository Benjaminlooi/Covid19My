<template>
  <transition
    appear
    appear-active-class="animate__animated animate__fadeIn">
    <div id="covid-information">
      <v-img src="../assets/images/family.png"></v-img>
      <v-card flat class="rounded-t-xl white pa-3">
        <v-card-title class="pb-0 text-h4">Be aware</v-card-title>
        <v-card-title class="pt-0 text-h4">Stay healthy</v-card-title>
        <v-card-text class="py-0 font-weight-medium">Know more about how to prevent covid-19</v-card-text>
        <v-card-actions class="px-4 mt-10">
          <v-spacer></v-spacer>
          <v-btn right color="#a6fffb" class="text-uppercase">Get started</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#covid-information {
  background-color: #cfe3fc;
}
</style>