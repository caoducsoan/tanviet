// $(document).ready(function() {
//   'use strict';
//   var visibleY = function(el) {
//     console.log(el)
//     var rect = el.getBoundingClientRect(),
//       top = rect.top,
//       height = rect.height,
//       el = el.parentNode;
//     do {
//       rect = el.getBoundingClientRect();
//       // if (top <= rect.bottom === false) return false;
//       // Check if the element is out of view due to a container scrolling
//       if ((top + height) <= rect.top) return false

//       if ((top + height) <= 0) return false
//       el = el.parentNode;
//     } while (el != document.body);
//     // Check its within the document viewport
//     return top <= document.documentElement.clientHeight;
//   };

//   // Stuff only for the demo
//   function attachEvent(element, event, callbackFunction) {
//     if (element.addEventListener) {
//       element.addEventListener(event, callbackFunction, false);
//     } else if (element.attachEvent) {
//       element.attachEvent('on' + event, callbackFunction);
//     }
//   };

//   var update = function() {
//       if (visibleY(document.getElementById('main_3_id'))) {
//         $('.div_boc_lh').addClass('light')

//       } else {
//           $('.div_boc_lh').removeClass('light');
//       }

//     //
//     // if (visibleY(document.getElementById('product-trigger2'))) {
//     //   if ($('#product-text2').hasClass('in')) {
//     //
//     //   } else {
//     //     $('.div_boc_lh').removeClass('dark')
//     //     $('#product-text2').addClass('light');
//     //     $('#product-text2').addClass('show');
//     //   }
//     // } else {
//     //   $('#product-text2').removeClass('in');
//     // }


//   };
//   attachEvent(window, "scroll", update);
//   // attachEvent(window, "resize", update);
//   update();
// })
// ! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io 
window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

window.onscroll = function() {
        $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".scrollTop:hidden").css("opacity", "1");
        } else {         
            $(".scrollTop").css("opacity", "0");
        }
    });
    $(function() { $(".scrollTop").click(function() { $("html,body").animate({ scrollTop: 0}, "1000"); return false }) })
    };
  







   
$(document).ready(function() {
        $('.customer-logos').slick({
            slidesToShow: 1, // hiển thị bao nhiêu hình trong 1 slide
            slidesToScroll: 1, // kéo được bao nhiêu slide
            autoplay: true, // tự động chạy
            autoplaySpeed: 4500, // thời gian chạy
            arrows: false, // hiển thị nút bấm trái phải
            dots: 5, // hiển thị dấu chấm ở dưới
            pauseOnHover: true, // dừng tự động chạy khi hover chuột vào slide
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });




$(document).ready(function() {
        $('.customer-dt').slick({
            slidesToShow: 5, // hiển thị bao nhiêu hình trong 1 slide
            slidesToScroll: 1, // kéo được bao nhiêu slide
            autoplay: true, // tự động chạy
            autoplaySpeed: 4500, // thời gian chạy
            arrows: false, // hiển thị nút bấm trái phải
            dots: 5, // hiển thị dấu chấm ở dưới
            pauseOnHover: true, // dừng tự động chạy khi hover chuột vào slide
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });