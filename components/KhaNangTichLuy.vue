<!-- Please remove this file from your project -->
<template>
<div class="container bg-light">
    <h1 class="text-center mt-5 mb-5">khả năng tích lũy</h1>
    <div class="row">
        <div class="col-6 boc_range position-relative">
            <div class="form-group">
                <label for="range">Lợi nhuận kỳ vọng hàng năm:</label>
                <input type="range" min="9" max="22" v-model.number="loiNhuanHangNam" class="form-control-range">
                <span>{{loiNhuanHangNam}}</span>
            </div>
            <div class="form-group">
                <label for="usr">Kỳ hạn đầu tư (Tính theo năm):</label>
                <input type="text" v-model.number="soNam" class="form-control" id="usr">
            </div>
            <div class="form-group">
                <label for="usr">Số tiền đầu tư ban đầu:</label>
                <vue-numeric class="form-control" v-model="soTienDuDinh"></vue-numeric>
                <vue-numeric currency="$" :read-only="true" separator="," v-model="soTienDuDinh"></vue-numeric>
            </div>

            <button class="btn btn-success" @click="dauTuDinhKy()">Tính toán</button>
            <vue-numeric currency="$" :read-only="true" separator="," v-model="ketQua"></vue-numeric>
        </div>
        <div class="col-6">
            <ChartBarBase :chart-data="chartData" />
        </div>
    </div>
    <table class=" mt-5 table bao_table_chitiet">
        <thead class="text-center">
            <div class="HEader_table">
                <span class="col_nam">Tháng</span>
                <span class="col_nam">Số tiền đầu tư mỗi Tháng</span>
                <span class="col_nam">Tổng vốn góp</span>
                <span class="col_nam">Tổng giá trị đầu tư tích lũy</span>
            </div>
        </thead>
        <div class="bao_ngoai_table" v-for="(i, index) in arrChiTiet.slice(pageCha - 1,pageCha)" :key="index">
            <div class="bao_sonam" align="center"> Năm thứ {{i.nam}}</div>
            <div v-for="(j, jindex) in i.thang.slice(page, limit)" :key="jindex" class="bao_noidung_table">
                <vue-numeric currency="Month" :read-only="true" separator="," v-model="j.thang"></vue-numeric>
                <vue-numeric currency="$" :read-only="true" separator="," v-model="j.tienmoithang"></vue-numeric>
                <vue-numeric currency="$" :read-only="true" separator="," v-model="j.phanBo"></vue-numeric>
                <vue-numeric currency="$" :read-only="true" separator="," v-model="j.tongGT"></vue-numeric>
            </div>
        <ul class="pagination mt-5 justify-content-end">
            <li class="page-item" @click="Previous()"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item" v-for="(x, xindex) in arrChiTiet" @click="clickPage(x.nam)" :key="xindex"><a class="page-link" href="#">{{x.nam}}</a></li>
            <li class="page-item" @click="Next()"><a class="page-link" href="#">Next</a></li>
        </ul>
        </div>
    </table>
</div>
</template>

<script>
export default {
    data() {
        return {
            loiNhuanHangNam: 9, // lãi suất dự kiến
            soNam: 10, //kỳ hạn đầu tư (year)
            soTienDuDinh: 0, // số tiền đầu tư ban đầu
            type: 0, // Thanh toán đầu kỳ/cuối kỳ (1/0)
            ketQua: 0,
            pageCha: 1,
            page: 1,
            limit: 12,
            arrSoNam: [],
            tienDauTu: [],
            checkClick: 0,
            arrChiTiet: [],
            chartData: {
                labels: [],
                datasets: [{
                    backgroundColor: "#de98ab",
                    borderColor: "#0c0306",
                    data: [],
                    label: "Số tiền đầu tư mỗi tháng"
                }]
            }
        }
    },
    watch: {
        'checkClick': function () {
            this.createTableData()
        }
    },
    created() {
        if (this.soNam > 16) {
            this.soNam = 16
        } else {
            this.soNam = this.soNam
        }
    },
    methods: {
        cal_pmt(rate_per_period, number_of_payments, present_value, future_value, type) {
            if (rate_per_period != 0) {
                // Interest rate exists
                var q = Math.pow(1 + rate_per_period, number_of_payments);
                return (rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
            } else if (number_of_payments != 0.0) {
                // No interest rate, but number of payments exists
                return (future_value + present_value) / number_of_payments;
            }
            return 0;
        },
        Previous(){
            return this.pageCha -= 1
        },
        Next(){
            return this.pageCha += 1
        },
        clickPage(num){
            this.pageCha = num
            console.log(num, this.pageCha);
        },
        createTableData() {
            for (var i = 1; i <= this.soNam - 1; i++) {
                var objChiTiet = {}
                objChiTiet.nam = i
                objChiTiet.thang = []
                for (var j = 0; j < 12; j++) {
                    var objThang = {}
                    objThang.thang = j + 1
                    if (objThang.thang == 1) {
                        objThang.tienmoithang = parseInt(this.ketQua)
                        objThang.phanBo = parseInt(this.ketQua)
                        objThang.tongGT = parseInt(this.ketQua * this.loiNhuanHangNam / 100 / 12 + objThang.phanBo)
                    } else {
                        objThang.tienmoithang = parseInt(objChiTiet.thang[j - 1].tienmoithang)
                        objThang.phanBo = parseInt(objThang.tienmoithang + objChiTiet.thang[j - 1].tongGT)
                        objThang.tongGT = parseInt((objChiTiet.thang[j - 1].tongGT + objThang.tienmoithang) * this.loiNhuanHangNam / 100 / 12 + (objChiTiet.thang[j - 1].tongGT + objThang.tienmoithang))
                    }
                    objChiTiet.thang.push(objThang)

                }
                this.arrChiTiet.push(objChiTiet)
            }
        },
        dauTuDinhKy() {
            this.ketQua = this.cal_pmt(this.loiNhuanHangNam / 100.0 / 12, this.soNam * 12, 0, this.soTienDuDinh, 1)
            this.checkClick = this.checkClick + 1
            this.tienDauTu.push(parseFloat(this.ketQua / 1000000).toFixed(2))
            this.arrSoNam.push(this.soNam)
            this.arrSoNam.sort((a, b) => a - b);
            this.chartData = {
                labels: this.arrSoNam,
                datasets: [{
                    backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
                    borderColor: "#0c0306",
                    data: this.tienDauTu,
                    label: "Số tiền đầu tư (tính theo triệu VND)"
                }]
            }
            // console.log(this.chartData.labels);
            // this.barChartData = {

            //     labels: [],
            //     datasets: [{
            //         label: 'Số tiền đầu tư trong ' + this.soNam + ' năm',
            //         data: [roundedString],
            //         backgroundColor: '#003f5c'
            //     }, ]
            // }

            // var x = [1,3,7,3,435,12,45,12];
            // var y = x.splice(Math.floor(Math.random() * x.length), 4);
            // console.log("y: ", y);

        }
    }
}
</script>

<style lang="css" scoped>
.col-6.boc_range.position-relative {
    padding: 15px;
    box-shadow: 1px 1px 5px #aeaeae;
    border-radius: 0 15px 15px;
    border: 1px solid #003f5c
}

.HEader_table {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    font-weight: bold;
    border-bottom: 1px solid;
}

.bao_noidung_table {
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: 8%;
    padding: 15px;
    border-bottom: 1px solid;
}
a.page-link {
    color: #565656;
}
.bao_sonam {
    padding: 15px;
    border-bottom: 1px dashed;
}
</style>
