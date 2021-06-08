<template>
  <client-only>
    <div>
      <bar-chart
        :chart-data="{ ...chartData, labels }"
        :options="options"
      ></bar-chart>

      <div class="my-2">
        <v-chip
          color="pink"
          label
          text-color="white"
          @click="setChartFilter(null)"
          >All</v-chip
        >

        <v-chip color="pink" label text-color="white" @click="setChartFilter(7)"
          >Latest 7 days</v-chip
        >

        <v-chip
          color="pink"
          label
          text-color="white"
          @click="setChartFilter(30)"
          >Latest 30 days</v-chip
        >

        <v-chip
          color="pink"
          label
          text-color="white"
          @click="setChartFilter(90)"
          >Latest 90 days</v-chip
        >
      </div>
    </div>
  </client-only>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    covidMyCases: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    chartFilter: null,
    chartData: {
      datasets: [
        {
          type: 'bar',
          label: 'New Cases',
          backgroundColor: 'rgb(255, 99, 132, 0.3)',
          borderColor: 'rgb(255, 99, 132, 0.7)',
          borderWidth: 1,
          data: [],
        },
        {
          type: 'bar',
          label: 'Recoveries',
          backgroundColor: 'rgb(4, 212, 0, 0.3)',
          borderColor: 'rgb(4, 212, 0, 0.7)',
          borderWidth: 1,
          data: [],
        },
      ],
    },
    options: {
      tooltips: {
        mode: 'index',
        intersect: false,
      },
    },
  }),
  computed: {
    labels() {
      const startDate = dayjs('2021-01-23')
      const generatedDates = this.covidMyCases.newCases.map((n, index) =>
        startDate.add(index, 'day').format('DD/MM')
      )
      return this.chartFilter
        ? generatedDates.slice(this.chartFilter)
        : generatedDates
    },
  },
  mounted() {
    this.chartData.datasets[0].data = this.covidMyCases.newCases
    this.chartData.datasets[1].data = this.covidMyCases.recoveries
  },
  methods: {
    setChartFilter(days) {
      this.chartFilter = -days
      this.filterDataset()
    },
    filterDataset() {
      this.chartData.datasets[0].data = this.chartFilter
        ? this.covidMyCases.newCases.slice(this.chartFilter)
        : this.covidMyCases.newCases
      this.chartData.datasets[1].data = this.chartFilter
        ? this.covidMyCases.recoveries.slice(this.chartFilter)
        : this.covidMyCases.recoveries
    },
  },
}
</script>
