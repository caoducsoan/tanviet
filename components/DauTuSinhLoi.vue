<!-- Please remove this file from your project -->
<template>
<div class="container bg-light">
    <h1 class="text-center mt-5 mb-5">đầu tư sinh lời</h1>
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
                <vue-numeric class="form-control" v-model="soTienBanDau"></vue-numeric>
                <vue-numeric currency="$" :read-only="true" separator="," v-model="soTienBanDau"></vue-numeric>
            </div>
            <div class="form-group">
                <label for="usr">Số tiền đầu tư mỗi tháng:</label>
                <vue-numeric class="form-control" v-model="soTienMoiThang"></vue-numeric>
                <vue-numeric currency="$" :read-only="true" separator="," v-model="soTienMoiThang"></vue-numeric>
            </div>

            <button class="btn btn-success" @click="dauTuSinhLoi()">Tính toán</button>
            <vue-numeric currency="$" :read-only="true" separator="," v-model="ketQua"></vue-numeric>
        </div>
        <div class="col-6">
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

</div>
</template>

<script>
export default {
    data() {
        return {
            loiNhuanHangNam: 9, // lãi suất dự kiến
            soNam: 10, //kỳ hạn đầu tư (year)
            soTienBanDau: 0,
            soTienMoiThang: 0, // số tiền đầu tư mỗi tháng
            type: 0, // Thanh toán đầu kỳ/cuối kỳ (1/0)
            ketQua: 0,
            pageCha: 1,
            page: 1,
            limit: 12,
            arrChitiet: [],
            barChartData: {
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                },
                labels: [],
                datasets: [{
                    label: 'Visits',
                    data: [1, 5, 7, 89, 45],
                    backgroundColor: '#003f5c'
                }, ]
            },

            barChartOptions: {
                responsive: true,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Biểu đồ minh họa',
                    fontSize: 24,
                    fontColor: '#6b7280'
                },
                tooltips: {
                    backgroundColor: '#17BF62'
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                }
            },
            arrChiTiet: [],
            checkClick: 0
        }
    },
    watch: {
        'checkClick': function () {
            this.inBangChiTiet()
        }
    },
    created() {
        if (this.soNam > 16) {
            this.soNam = 16
        } else {
            this.soNam = this.soNam
        }
        for (var i = 0; i <= this.soNam; i++)
            this.barChartData.labels.push(i)

    },
    methods: {
        cal_FV(rate, nper, pmt, pv, type) {
            var pow = Math.pow(1 + rate, nper),
                fv;
            if (rate) {
                fv = (pmt * (1 + rate * type) * (1 - pow) / rate) - pv * pow;
            } else {
                fv = -1 * (pv + pmt * nper);
            }
            return fv.toFixed(2);
        },
        Previous() {
            return this.pageCha -= 1
        },
        Next() {
            return this.pageCha += 1
        },
        clickPage(num) {
            this.pageCha = num
        },
        dauTuSinhLoi() {
            this.ketQua = -this.cal_FV(this.loiNhuanHangNam / 100 / 12, this.soNam * 12, this.soTienBanDau, this.soTienMoiThang, 0)
            this.checkClick += 1
            this.inBangChiTiet()
        },
        inBangChiTiet() {
            this.arrChiTiet = []
            for (var i = 1; i <= this.soNam; i++) {
                var objChiTiet = {}
                objChiTiet.nam = i
                objChiTiet.thang = []
                for (var j = 0; j < 12; j++) {
                    var objThang = {}
                    objThang.thang = j + 1
                    if (objThang.thang == 1) {
                        objThang.tienmoithang = parseInt(this.soTienMoiThang)
                        objThang.phanBo = parseInt(this.soTienBanDau)
                        objThang.tongGT = parseInt(this.soTienMoiThang * this.loiNhuanHangNam / 100 / 12 + objThang.tienmoithang)
                    } else {
                        objThang.tienmoithang = parseInt(objChiTiet.thang[j - 1].tienmoithang)
                        objThang.phanBo = parseInt(objThang.tienmoithang + objChiTiet.thang[j - 1].phanBo)
                        objThang.tongGT = parseInt((objChiTiet.thang[j - 1].tongGT + objThang.tienmoithang) * this.loiNhuanHangNam / 100 / 12 + (objChiTiet.thang[j - 1].tongGT + objThang.tienmoithang))
                    }
                    objChiTiet.thang.push(objThang)

                }
                this.arrChiTiet.push(objChiTiet)
            }
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
