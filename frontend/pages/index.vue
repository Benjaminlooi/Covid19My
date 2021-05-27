<template>
  <div>
    <v-container fluid class="top-section purple-gradient-bg">
      <v-row class="white--text">
        <v-col class="text-center" style="z-index: 1">
          <h1 class="display-2 font-weight-bold">Covid-19 in Malaysia</h1>
        </v-col>
      </v-row>
    </v-container>

    <v-card class="rounded-t-xl" flat style="margin-top: -24px">
      <v-container>
        <div class="content-container">
          <TheSafetyTipBanner class="mt-2 mb-5" />
          <h3 class="px-1">Transmission Update</h3>
          <p class="px-1 caption mb-0">Last update: {{ updatedTime }}</p>
          <TheInformationCards :covid-my-cases="covidMyCases" />

          <CasesChart class="my-6" :covid-my-cases="covidMyCases" />

          <v-row class="justify-center mt-4">
            <v-col sm="12">
              <h3 class="px-1 mb-4">States Infection Rate</h3>
              <v-card class="rounded-xl mapImage mx-1">
                <v-img :src="covidMyCases.malaysiaMapSrc"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
// import TheSparkline from "./TheSparkline";
import API from '@/API'
import moment from 'moment'
import TheInformationCards from '../components/TheInformationCards'
import TheSafetyTipBanner from '../components/TheSafetyTipBanner'
import CasesChart from '../components/CasesChart.vue'

export default {
  components: {
    TheSafetyTipBanner,
    TheInformationCards,
    CasesChart,
  },
  data: () => ({
    covidMyCases: {},
  }),
  computed: {
    updatedTime() {
      if (this.covidMyCases.updatedTime) {
        const time = moment(this.covidMyCases.updatedTime).format(
          'MMM D, YYYY h:mm a'
        )
        return time
      }
      return ''
    },
  },
  async created() {
    if (process.browser) {
      if (localStorage.getItem('covidMyCases') !== null) {
        this.covidMyCases = JSON.parse(localStorage.getItem('covidMyCases'))
      }

      if (navigator.onLine) {
        this.covidMyCases = await API.getCovidMyCaseObFirestore()
        this.saveCovidMyCasesToCache()
      } else {
        this.covidMyCases = JSON.parse(localStorage.getItem('covidMyCases'))
      }
    }
  },
  methods: {
    saveCovidMyCasesToCache() {
      localStorage.setItem('covidMyCases', JSON.stringify(this.covidMyCases))
    },
  },
}
</script>

<style lang="scss" scoped>
.top-section {
  padding-top: calc(12px + 24px + 24px);
  padding-bottom: calc(24px + 12px + 24px);
}

.content-container {
  max-width: 450px;
  margin: 0 auto;
}

.mapImage {
  -webkit-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.3) !important;
  -moz-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.3) !important;
  box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.3) !important;
}
</style>
