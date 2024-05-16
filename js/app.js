$('.menu-bar-mobile').slicknav({
    duration: 500,
    prependTo:'.mobilemenu'
});



  
$(document).ready(function(){
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: false,
        thumbs: {
            swiper: swiper,
        },
        });
        
    
    // For colorbox 
    // $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
    $(".youtube").colorbox({iframe:true, innerWidth:680, innerHeight:382});
    //media query for colorbox video.
    if($(window).width() < 1024){
    $(".youtube").colorbox({iframe:true, innerWidth:500, innerHeight:300});
    }
    if($(window).width() < 767){
    $(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:250});
    }
    // matchHeight 
    $('.height-match').matchHeight();
});

$('#services-3').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('#mix-carosole').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    autoWidth:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});
$("#top-banner").owlCarousel({
    nav:true,
    slideSpeed : 300,
    paginationSpeed : 400,
    items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});


$(window).scroll(function() {
  if($( window ).scrollTop() > 0){   
  $(".progress-bar").each(function() {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });

   }  
});

var containerEl = document.querySelector('.mixcontainer');

var mixer = mixitup(containerEl);





