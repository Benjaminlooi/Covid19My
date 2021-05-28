<template>
  <client-only>
    <line-chart
      :data="{ ...chartData, labels }"
      :options="options"
    ></line-chart>
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
          type: 'line',
          label: 'Recoveries',
          backgroundColor: 'rgb(4, 212, 0, 0.3)',
          borderColor: 'rgb(4, 212, 0, 0.7)',
          borderWidth: 1,
          data: [],
        },
      ],
    },
    options: {
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'xy',
          },
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  }),
  computed: {
    labels() {
      const startDate = dayjs('2021-01-23')
      return this.chartData.datasets[0].data.map((n, index) =>
        startDate.add(index, 'day').format('DD/MM')
      )
    },
  },
  mounted() {
    this.chartData.datasets[0].data = this.covidMyCases.newCases
    this.chartData.datasets[1].data = this.covidMyCases.recoveries
  },
}
</script>
