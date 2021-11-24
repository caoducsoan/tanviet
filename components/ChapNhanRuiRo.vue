<template>
<div class="container">
    <h2>Chấp nhận rủi ro</h2>
    <VueSlickCarousel v-bind="settings">
        <div v-for="(i,index) in arrQuestion1" class="position-relative" :key="i.id">
            <img v-if="i.image !== '' && i.image !== undefined" :src="i.image" :alt="i.cauhoi" class="img_bg_cnrr">
            <h5>{{i.cauhoi}}</h5>
            <div class="tra_loi">
                <div v-for="j in i.cauTraLoi" :key="j.id">
                    <input type="radio" :id="'traloi'+i.id+j.id" @change="updatePoint(i.id, j.value)" :name="'traloi'+i.id" :value="j.value">
                    <label :for="'traloi'+i.id+j.id">{{j.name}}</label>
                </div>
            </div>
            <button v-if="index == arrQuestion1.length - 1" @click="checkPoint()" class="btn btn-outline-success">Xem kết quả</button>
        </div>
    </VueSlickCarousel>
    <div class="container mt-5">
        <div class="row">
            <div v-if="isCheckSum == true" v-html="textWarning"></div>
        </div>
    </div>
</div>

</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    data() {
        return {
            settings: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
            },
            arrQuestion1: [{
                    id: 1,
                    cauhoi: "Độ tuổi hiện tại của bạn là?",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Trên 70',
                            value: 1
                        },
                        {
                            id: 2,
                            name: '66 đến 70',
                            value: 2
                        },
                        {
                            id: 3,
                            name: '56 đến 65',
                            value: 3
                        },
                        {
                            id: 4,
                            name: '41 đến 55',
                            value: 4
                        },
                        {
                            id: 5,
                            name: '18 đến 40',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://timo.vn/wp-content/uploads/%C4%91%E1%BA%A7u-t%C6%B0-t%C3%A0i-ch%C3%ADnh.jpg'
                },
                {
                    id: 2,
                    cauhoi: "Bạn tự đánh giá về kiến thức tài chính của mình như thế nào?",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Hoàn toàn không có kiến thức gì về lĩnh vực này',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Chỉ có một ít kiến thức cơ bản về tài chính',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Có kiến thức cơ bản về tài chính',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Có kiến thức khá về tài chính',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Có kiến thức rất tốt về tài chính.',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://sof.edu.vn/wp-content/uploads/2021/03/tu-van-dau-tu-tai-chinh-la-gi.jpg'
                },
                {
                    id: 3,
                    cauhoi: "Khi đầu tư, bạn chấp nhận mức độ tổn thất nào dưới đây?",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Không chấp nhận lỗ vốn gốc',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Chấp nhận lỗ 5% vốn gốc',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Chấp nhận lỗ không quá 15% vốn gốc',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Chấp nhận lỗ không quá 30% vốn gốc',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Chấp nhận lỗ cao hơn 30% vốn gốc',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: ''
                },
                {
                    id: 4,
                    cauhoi: "Khi đầu tư, bạn chấp nhận mức độ tổn thất nào dưới đây?Bạn đã có kinh nghiệm đầu tư vào sản phẩm đầu tư chưa (cổ phiếu, trái phiếu, ngoại hối, vàng …)?",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Chưa bao giờ',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Ít hơn 3 năm',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Từ 3 đến 6 năm',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Từ 6-10 năm',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Trên 10 năm',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://static.tapchitaichinh.vn/images/upload/tranhuyentrang/03102021/dau-tu-tien-nhan-roi-feature.jpg'
                },
                {
                    id: 5,
                    cauhoi: "Nếu khoản đầu tư bị lỗ quá 15% và thị trường đang không thuận lợi, bạn sẽ phản ứng như thế nào?",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Không ngủ được, muốn bán ngay lập tức',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Lo lắng và muốn bán 1/2 khoản đầu tư để hạn chế tổn thất',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Cảm thấy lo lắng nhưng vẫn quan sát thêm',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Đây là cơ hội để đầu tư thêm trong thời gian tới',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Tin rằng giá sẽ tăng lại và đầu tư thêm khi giá xuống thấp',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://static.tapchitaichinh.vn/images/upload/tranhuyentrang/03102021/dau-tu-tien-nhan-roi-feature.jpg'
                },
                {
                    id: 6,
                    cauhoi: "Thu nhập khả dụng của bạn (sau khi trừ thuế và các chi phí khác)",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Dưới 10 triệu',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Từ 10 - 30 triệu',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Từ 30 - 60 triệu',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Từ 60 - 100 triệu',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Trên 100 triệu',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://i1.wp.com/idautu.com/wp-content/uploads/2021/08/Dau-tu-tai-chinh-ca-nhan-cho-nguoi-tre-bia.png?fit=1640%2C924&ssl=1'
                },
                {
                    id: 7,
                    cauhoi: "Bạn định đầu tư trong bao lâu",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Dưới 1 năm',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Từ 1-3 năm',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Từ 3-6 năm',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Từ 6 - 10 năm',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Trên 10 năm',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://i1.wp.com/idautu.com/wp-content/uploads/2021/08/Dau-tu-tai-chinh-ca-nhan-cho-nguoi-tre-bia.png?fit=1640%2C924&ssl=1'
                },
                {
                    id: 8,
                    cauhoi: "Bạn sẵn sàng đầu tư bao nhiêu % giá trị tài sản ròng (sau khi trừ các chi phí, dự phòng tài chính) vào các sản phẩm đầu tư",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Dưới 20%',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Từ 20%-40%',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Từ 41%-60%',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Từ 61%-80%',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Trên 80%',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://i1.wp.com/idautu.com/wp-content/uploads/2021/08/Dau-tu-tai-chinh-ca-nhan-cho-nguoi-tre-bia.png?fit=1640%2C924&ssl=1'
                },
                {
                    id: 9,
                    cauhoi: "Giá trị tài sản ròng bạn đang có là bao nhiêu?",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Dưới 1 tỷ',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Từ 1 tỷ - 5 tỷ',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Từ 5 tỷ - 10 tỷ',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Từ 10 tỷ - 20 tỷ',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Trên 20 tỷ',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://tapdoanvset.com/wp-content/uploads/2021/08/dau-tu-tai-chinh-la-gi-bi-quyet-lam-giau.jpeg'
                },
                {
                    id: 10,
                    cauhoi: "Mục tiêu đầu tư của bạn là gì?",
                    cauTraLoi: [{
                            id: 1,
                            name: 'Bảo toàn vốn gốc',
                            value: 1
                        },
                        {
                            id: 2,
                            name: 'Thu nhập cao, đều đặn',
                            value: 2
                        },
                        {
                            id: 3,
                            name: 'Cân bằng giữa thu nhập và tăng trưởng giá trị theo thời gian',
                            value: 3
                        },
                        {
                            id: 4,
                            name: 'Tăng trưởng ổn định trong thời gian dài',
                            value: 4
                        },
                        {
                            id: 5,
                            name: 'Chấp nhận rủi ro cao để có lợi nhuận cao',
                            value: 5
                        }

                    ],
                    point: 0,
                    image: 'https://fx.com.vn/wp-content/uploads/2020/10/C%C3%B3-n%C3%AAn-%C4%91%E1%BA%A7u-t%C6%B0-t%C3%A0i-ch%C3%ADnh-Forex-trong-2020-Th%E1%BB%8B-Tr%C6%B0%E1%BB%9Dng-Forex-c%C3%B3-an-to%C3%A0n-kh%C3%B4ng.png'
                }
            ],
            sumP: 0,
            textWarning: '',
            isCheckSum: false
        }
    },
    methods: {
        updatePoint(id, point) {
            this.arrQuestion1.filter(e => e.id == id)[0].point = point
        },
        checkPoint() {
            var tempSum = 0;
            this.arrQuestion1.forEach(item => {
                tempSum += item.point;
            })
            this.sumP = tempSum
            if (this.sumP <23) {
                this.textWarning = '<p>thấp hơn 23</p><p class="font-weight-bold pb-5">Để nhận được bản đầy đủ và chi tiết hơn, vui lòng cung cấp thông tin cho VFM</p>'
            } else if (this.sumP >= 23 && this.sumP <= 32) {
                this.textWarning = '<p>Trung Bình: Bạn sẵn sàng chấp nhận rủi ro Trung Bình để đạt được lợi suất đầu tư kỳ vọng nhanh hơn tỷ lệ lạm phát và cao hơn lãi suất tiền gửi ngân hàng trong chu kỳ đầu tư khoảng 5 năm</p><br/><p>Để nhận được bản đầy đủ và chi tiết hơn, vui lòng cung cấp thông tin cho VFM</p>'
            } else if (this.sumP >= 33 && this.sumP <= 42) {
                this.textWarning = '<p>Cao: Bạn sẵn sàng chấp nhận rủi ro cao để đạt được lợi suất đầu tư kỳ vọng nhanh hơn tỷ lệ lạm phát và cao hơn lãi suất tiền gửi ngân hàng trong chu kỳ đầu tư dài hơn 5 năm</p><br/><p>Quỹ trái phiếu của TVFM là sự lựa chọn phù hợp với bạn để gia tăng thu nhập cho tương lai.</p>'
            } else if (this.sumP >= 43) {
                this.textWarning = '<p>Rất Cao: Bạn sẵn sàng chấp nhận rủi ro rất cao để đạt được lợi suất đầu tư kỳ vọng nhanh hơn tỷ lệ lạm phát và cao hơn lãi suất tiền gửi ngân hàng trong chu kỳ đầu tư dài hơn 5 năm</p>'
            }
            this.isCheckSum = true
        }
    }
}
</script>

<style scoped>
.img_bg_cnrr {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right;
    bottom: 0;
    right:0
    }

.slick-dots li button {
    background: #609638;
    border-radius: 50%;
    border: none;
}

.slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
}

.slick-dots li button:before {
    color: #fff
}
</style>
