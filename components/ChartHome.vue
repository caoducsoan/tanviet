<template>
  <highchart :options="chartOpts" />
</template>

<script>
export default {
  data () {
    return {
      series: [],
      domain: process.env.VUE_APP_DOMAIN    }
  },
  fetch () {
    const symbols = ['goog']
    symbols.forEach(s => this.fetchData(s))
  },
  computed: {
    chartOpts () {
      return {
        rangeSelector: {
          selected: 10
        },

        yAxis: {
          labels: {
            formatter () {
              return (this.value > 0 ? ' + ' : '') + this.value + '%'
            }
          },
          plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
          }]
        },

        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
        },

        series: this.series
      }
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    async fetchData (symbol) {
      const data = await fetch(this.domain+'/assets/goog-c.json').then(r => r.json())
      this.series.push({
        name: symbol,
        data
      })
    }
  }
}
</script>
