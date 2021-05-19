<template>
  <v-card class="mx-auto text-center" color="green" dark>
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="malaysiaDataValue"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="12"
          auto-draw
          line-width="1"
          stroke-linecap="round"
          smooth="1"
          show-labels
          label-size="4"
        >
          <template v-slot:label="item">
            <template v-if="item.index % 3 == 0 || item.index == malaysiaDataValue.length - 1">
              {{malaysiaDataHeader[item.index]}}
              <tspan dx=-9 dy="4px">{{malaysiaDataValue[item.index]}}</tspan>
            </template>
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="headline font-weight-thin">Confirmed cases in Malaysia</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text>Go to Report</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import API from "../API";

export default {
  data: () => ({
    malaysiaDataHeader: [],
    malaysiaDataValue: []
  }),
  computed: {
    //
  },
  methods: {},
  async created() {
    const data = await API.getDataCsv();
    let lines = data.split("\n");
    let headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
      let currentLine = lines[i].split(",");
      if (currentLine[1] == "Malaysia") {
        for (let j = 4; j < headers.length; j++) {
          if (j == headers.length - 1)
            this.malaysiaDataHeader.push(headers[j].slice(0, -4));
          else this.malaysiaDataHeader.push(headers[j].slice(0, -3));
          this.malaysiaDataValue.push(parseInt(currentLine[j]));
        }
      }
    }
    // console.log(this.malaysiaDataHeader);
    // console.log(this.malaysiaDataValue);
  }
};
</script>

<style>
</style>