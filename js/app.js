$('.menu-bar-mobile').slicknav({
    duration: 500,
    prependTo:'.mobilemenu'
});

$(document).ready(function(){
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

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
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


