$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:10,
            nav: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeOut: 1000,
            dots: true,
            lazyLoad: true,
            navText : ["<i class='fa fa-arrow-left carousel-icon'></i>","<i class='fa fa-arrow-right carousel-icon'></i>"],
            smartSpeed: 1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        }
    );
  });
