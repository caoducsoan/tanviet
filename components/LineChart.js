import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['data', 'chartData', 'options'],
    mounted() {
        this.renderChart(this.data, this.options)
    },
    watch: {
        'chartData': function() {
            this.renderChart(this.chartData, this.options);
            console.log("reload watch");
        }
    },
}