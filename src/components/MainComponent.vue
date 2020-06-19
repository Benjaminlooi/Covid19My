<template>
  <div>
    <v-container fluid class="pt-0">
      <v-row class="hero-section white--text">
        <v-col class="mb-4 text-center" style="z-index: 1">
          <h1 class="display-2 font-weight-bold mb-3">Covid-19 in Malaysia</h1>

          <p v-if="covidMyCases" class="subheading font-weight-regular mb-5">
            <span class="display-1">{{covidMyCases.dataConfirmed}}</span>
            Confirmed cases in Malaysia as of {{updatedTime}}
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container id="main-component">
      <v-row>
        <v-col>
          <v-card class="mx-auto" color="#26c6da" dark max-width="400">
            <v-card-title>
              <v-icon large left>mdi-twitter</v-icon>
              <span class="title font-weight-light">Twitter</span>
            </v-card-title>

            <v-card-text
              class="headline font-weight-bold"
            >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evanve</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-row>
      <v-col class="mb-5" cols="12">
        <TheSparkline />
      </v-col>
      </v-row>-->
      <TheInformationCards :covidMyCases="covidMyCases" />
    </v-container>
  </div>
</template>

<script>
// import TheSparkline from "./TheSparkline";
import TheInformationCards from "./TheInformationCards";
import API from "../API";
import moment from "moment";

export default {
  components: {
    // TheSparkline,
    TheInformationCards
  },
  data: () => ({
    covidMyCases: {}
  }),
  computed: {
    updatedTime: function() {
      if (this.covidMyCases.updatedTime) {
        const time = moment(this.covidMyCases.updatedTime).format(
          "MMM D, YYYY h:mm a"
        );
        return time;
      }
      return "";
    }
  },
  async created() {
    this.covidMyCases = await API.getCovidMyCaseObFirestore();
    // console.log("created -> covidMyCases", this.covidMyCases);
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  margin-top: -68px;
  padding-top: 52px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #fa84d4, #66eece);
    border-radius: 0 0 50% 50%/ 0 0 100% 100%;
    transform: scaleX(2);
  }
}

#main-component {
  max-width: 400px;
}
</style>