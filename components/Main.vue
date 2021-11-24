
<template>
<main>
    <button onclick="topFunction()" id="myBtn" title="Go to top">
        <div class="outer">
            <div class="inner rotate"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
        </div>
    </button>
    <div class="container-fluid position-relative set_padding_mb">
        <h2 class="title_banner_main_page">Tan Viet <br> Fund Management</h2>
        <h4 class="slogan_banner_main_page">YOUR ASSETS, OUR PLANS</h4>
        <button class="btn btn_banner_main_page">TÌM HIỂU THÊM</button>
        <img src="~/assets/img/banner.png" class="img_banner_home_page" alt="">
        <div class="container chart_banner_main_page ">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-5 col-xl-5 col-lg-5 div_bao_tin_banner_main_page">
                    <div class="bao_title_tin_main_page">
                        <div class="title_tin_banner text-uppercase text-white">tin nổi bật</div>
                        <div class="bao_button_move_slide_banner_main_page">
                            <button @click="setCountBtn()" :class="countBtn == false?'btn button_move_silde_main_page':'btn button_move_silde_main_page active_btn_main'"></button>
                            <button @click="setCountBtn()" :class="countBtn == true?'btn button_move_silde_main_page':'btn button_move_silde_main_page active_btn_main'"></button>

                        </div>
                    </div>
                    <VueSlickCarousel v-bind="settings">
                        <div>
                            <a href="javascript:void(0)" class="bao_tin_slider_banner_main_page">
                                <p>Livestream: Giới thiệu quỹ mở mới</p>
                            </a>
                            <a href="javascript:void(0)" class="bao_tin_slider_banner_main_page">
                                <p> Quy trình đăng ký mua chứng chỉ quỹ đầu tư cổ phiếu tăng trưởng TVFM</p>
                            </a>
                            <a href="javascript:void(0)" class="bao_tin_slider_banner_main_page">
                                <p>TVFM thông báo chào bán chứng chỉ quỹ ra công chúng.</p>
                            </a>
                            <a href="javascript:void(0)" class="bao_tin_slider_banner_main_page">
                                <p>Livestream: Giới thiệu quỹ mở mới</p>
                            </a>
                            <a href="javascript:void(0)" class="bao_tin_slider_banner_main_page">
                                <p> Quy trình đăng ký mua chứng chỉ quỹ đầu tư cổ phiếu tăng trưởng TVFM</p>
                            </a>
                            <a href="javascript:void(0)" class="bao_tin_slider_banner_main_page">
                                <p>TVFM thông báo chào bán chứng chỉ quỹ ra công chúng.</p>
                            </a>
                        </div>
                    </VueSlickCarousel>
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-xl-7 col-lg-7">
                    <ChartHome />
                </div>
            </div>
        </div>
    </div>
    <section class="main_1">
        <div class="container">
            <h1>quản lý tài sản</h1>
            <div class="boder"></div>
        </div>
        <div class="container-fuild main1-col3">
            <div class="row justify-content-around maxwithmain1">
                <div class="col-md-6 col-xl-4 col-sm-6 col-lg-4 col-6 scale-up-center main-chung">
                    <a class="a-main1" href="">
                        <div class="logo-main1">
                            <img src="~/assets/img/6.png" alt="">
                        </div>
                        <h2 class="h2-main1">an tâm</h2>
                        <p class="text-main1">Tài sản của nhà đầu tư được đội ngũ chuyên gia hàng đầu của chúng tôi quản lý và thực hiện.</p>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4 col-sm-6 col-lg-4 col-6 scale-up-center main-chung">
                    <a class="a-main1" href="">
                        <div class="logo-main1">
                            <img src="~/assets/img/4.png" alt="">
                        </div>
                        <h2 class="h2-main1">linh hoạt</h2>
                        <p class="text-main1">Chiến lược đầu tư và phân bổ tài sản được thiết kế riêng phù hợp với nhu cầu và mức độ chấp nhận rủi ro của từng Quý Nhà đầu tư.</p>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4 col-sm-6 col-lg-4 col-6 scale-up-center main-chung">
                    <a class="a-main1" href="">
                        <div class="logo-main1">
                            <img src="~/assets/img/5.png" alt="">
                        </div>
                        <h2 class="h2-main1">minh bạch</h2>
                        <p class="text-main1">Nhà đầu tư kiểm soát được tài sản của mình thông qua các báo cáo định kỳ hàng tháng, hàng quý. </p>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4 col-sm-6 col-lg-4 col-6 scale-up-center main-chung">
                    <a class="a-main1" href="">
                        <div class="logo-main1">
                            <img src="~/assets/img/2.png" alt="">
                        </div>
                        <h2 class="h2-main1">chuyên biệt</h2>
                        <p class="text-main1">Danh mục đầu tư được xây dựng chuyên biệt cho từng Nhà đầu tư.</p>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4 col-sm-6 col-lg-4 col-6 scale-up-center main-chung">
                    <a class="a-main1" href="">
                        <div class="logo-main1">
                            <img src="~/assets/img/3.png" alt="">
                        </div>
                        <h2 class="h2-main1">tối ưu</h2>
                        <p class="text-main1">Nhà đầu tư tiết kiệm được thời gian, công sức và chi phí, giúp giải phóng Quý nhà đầu tư khỏi khối lượng công việc đồ sộ khi phải tự quản lý vốn đầu tư của mình.</p>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4 col-sm-6 col-lg-4 col-6 scale-up-center main-chung">
                    <a class="a-main1" href="">
                        <div class="logo-main1">
                            <img src="~/assets/img/1.png" alt="">
                        </div>
                        <h2 class="h2-main1">bảo mật</h2>
                        <p class="text-main1">Thông tin đầu tư của danh mục được đảm bảo tuyệt mật.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="main_2">
        <div class="container">
            <h1>công cụ đầu tư</h1>
            <p class="text-main2">
                Bạn muốn tích lũy tài chính để đảm bảo cuộc sống đủ đầy cho bản thân và gia đình trong tương lai? Bạn mong muốn đạt được tự do tài chính và không phải lo lắng về tiền bạc? Hay đơn giản bạn muốn kiểm soát việc chi tiêu của mình một cách khoa học hơn? Tất cả đều có thể thực hiện được qua bộ công cụ tài chính thông minh của TVFM.
            </p>
        </div>
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-lg-3 col-md-6 col-12 col-sm-12 col-xl-3 scale-up-center">
                    <Nuxt-Link :to="'/bang-tinh-dau-tu-dinh-ky'">
                        <div class="congcu">
                            <div>
                                <img src="~/assets/img/anh.png" alt="" class="anh-main2">
                            </div>
                            <h2>bảng tính đầu tư định kì</h2>
                            <p>Lên kế hoạch đầu tư và chọn lựa gói đầu tư phù hợp chỉ trong vòng 1 phút.</p>
                        </div>
                    </Nuxt-Link>
                </div>
                <div class="col-lg-3 col-md-6 col-12 col-sm-12 col-xl-3 scale-up-center">
                    <Nuxt-Link to="/suc-manh-tai-chinh">
                        <div class="congcu">
                            <div>
                                <img src="~/assets/img/anh.png" alt="" class="anh-main2">
                            </div>
                            <h2>sức mạnh tài chính</h2>
                            <p>Tự đánh giá khả năng quản lý tài chính của bạn đang ở cấp độ nào.
                            </p>
                        </div>
                    </Nuxt-Link>
                </div>
                <div class="col-lg-3 col-md-6 col-12 col-sm-12 col-xl-3 scale-up-center">
                    <Nuxt-Link to="/muc-chap-nhan-rui-ro">
                        <div class="congcu">
                            <div>
                                <img src="~/assets/img/anh.png" alt="" class="anh-main2">
                            </div>
                            <h2>mức chấp nhận rủi ro</h2>
                            <p>Tự đánh giá khả năng chấp nhận rủi ro của bạn đang ở mức nào.
                            </p>
                        </div>
                    </Nuxt-Link>
                </div>
                <div class="col-lg-3 col-md-6 col-12 col-sm-12 col-xl-3 scale-up-center">
                    <Nuxt-Link to="/chi-tieu-hang-thang">
                        <div class="congcu">
                            <div>
                                <img src="~/assets/img/anh.png" alt="" class="anh-main2">
                            </div>
                            <h2>chi tiêu hàng tháng</h2>
                            <p>Kiểm soát chi tiêu cá nhân và gia đình một cách khoa học.</p>
                        </div>
                    </Nuxt-Link>
                </div>
            </div>

        </div>
    </section>
    <section class="main_3">
        <section class="customer-logos slider">
            <div class="slide">
                <!-- <img src="~/assets/img/banner1.png" alt=""> -->
                <div class="container">
                    <!-- <div class="row"> -->
                    <div class=" top-0">
                        <div class="top-2-ban1">
                            <h1> Lorem Ipsum</h1>
                            <p class="text-top-2"> Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="slide">
                <!-- <img src="~/assets/img/banner1.png" alt=""> -->
                <div class="container">
                    <!-- <div class="row"> -->
                    <div class=" top-0">
                        <div class="top-2-ban1">
                            <h1> Lorem Ipsum </h1>
                            <p class="text-top-2"> Lorem Ipsum is simply dummy text of the printing</p>

                        </div>
                    </div>

                </div>
            </div>
            <div class="slide">
                <!-- <img src="~/assets/img/banner1.png" alt=""> -->
                <div class="container">
                    <!-- <div class="row"> -->
                    <div class=" top-0">
                        <div class="top-2-ban1">
                            <h1> Lorem Ipsum </h1>
                            <p class="text-top-2"> Lorem Ipsum is simply dummy text of the printing</p>

                        </div>
                    </div>

                </div>
            </div>
            <div class="slide">
                <!-- <img src="~/assets/img/banner1.png" alt=""> -->
                <div class="container">
                    <!-- <div class="row"> -->
                    <div class=" top-0">
                        <div class="top-2-ban1">
                            <h1> Lorem Ipsum </h1>

                            <p class="text-top-2"> Lorem Ipsum is simply dummy text of the printing</p>

                        </div>
                    </div>

                </div>
            </div>
            <div class="slide">
                <!-- <img src="~/assets/img/banner1.png" alt=""> -->
                <div class="container">
                    <!-- <div class="row"> -->
                    <div class=" top-0">
                        <div class="top-2-ban1">
                            <h1> Lorem Ipsum </h1>

                            <p class="text-top-2"> Lorem Ipsum is simply dummy text of the printing</p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </section>
    <section class="main_6">
        <div class="container">
            <h1>video</h1>
            <div class="row justify-content-between">
                <div class="col-lg-6 col-12 col-md-12">
                    <div class="tnc">
                        <a href="" class="tnch" data-toggle="modal" data-target="#exampleModal">
                            <div class="tnc1 scale-up-center">
                                <img class="anhmain6" src="~/assets/img/anhmain6.png" alt="">
                            </div>
                        </a>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <video width="100%" controls>
                                            <source src="https://www.youtube.com/embed?v=GRWNTUThd1I" type="video/mp4">
                                            Your browser does not support HTML video.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12 col-md-12">
                    <div class="tnc">
                        <a href="" class="tnch" data-toggle="modal" data-target="#exampleModal">
                            <div class="tnc1 scale-up-center">
                                <img class="anhmain6" src="~/assets/img/anhmain6-1.png" alt="">
                            </div>
                        </a>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <video width="100%" controls>
                                            <source src="https://www.youtube.com/embed?v=GRWNTUThd1I" type="video/mp4">
                                            Your browser does not support HTML video.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main_7">
        <div class="container">
            <h1>CÁC ĐỐI TÁC CỦA CHÚNG TÔI</h1>
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="container">
            <section class="customer-dt slider">
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
                <div class="slide">
                    <img src="~/assets/img/vcb.png" alt="">
                </div>
            </section>
        </div>
    </section>
</main>
</template>

<script>
export default ({
    data() {
        return {
            settings: {
                "arrows": false,
                "dots": true,
                "infinite": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "autoplay": true,
                "speed": 2000,
                "autoplaySpeed": 2000,
                "cssEase": "linear"
            },
            countBtn: false
        }
    },
    mounted(){
        window.onscroll()
    },
    methods: {
        setCountBtn(){
            if(this.countBtn == false){
                this.countBtn = true
                // numberOfSlides = 10; reInitSlider()
            }
        }
    }
})
</script>
<style>
.div_bao_tin_banner_main_page .slick-track{
    width: 100%!important;
    margin: 0;
    padding-top: 3rem
}
.slick-dots li button {
background: transparent;
    border-radius: 50%;
    border: 2px solid #fff;
}
.slick-active button{
    background: #000
}
.slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #E5222A;
    background-color: #E5222A;
    border-radius: 50%;
    opacity: 1

}

.slick-dots li button:before {
    color: transparent
}
</style>