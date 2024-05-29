$('.menu-bar-mobile').slicknav({
    duration: 500,
    prependTo:'.mobilemenu'
});











var counter = 0;
var counter2 = 0;

function plus() {
  counter+=1;
  document.getElementById("counter").innerHTML = counter;
}

function minus() {
  if(counter > 0){
    counter-= 1;
  }
  document.getElementById("counter").innerHTML = counter;
}
function plus2() {
    counter2+=1;
    document.getElementById("counter2").innerHTML = counter2;
  }
  
  function minus2() {
    if(counter2 > 0){
      counter2-= 1;
    }
    document.getElementById("counter2").innerHTML = counter2;
  }

//   const gridButton = document.getElementById("grid-btn");
//   const listButton = document.getElementById("list-btn");
//   const gridProducts = document.getElementById("show-grid-item");
//   const listProducts = document.getElementById("show-list-item");
  
//   const toggleView = (viewType) => {
//     gridButton.classList.toggle("active", viewType === "grid");
//     listButton.classList.toggle("active", viewType === "list");
  
//     gridProducts.style.display = viewType === "grid" ? "block" : "none";
//     listProducts.style.display = viewType === "list" ? "block" : "none";
//   };
  
//   gridButton.addEventListener("click", () => toggleView("grid"));
//   listButton.addEventListener("click", () => toggleView("list"));  
  







  
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
    
    const swiper3 = new Swiper(".mySwiper3", {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          },
    });
    
    const swiper4 = new Swiper(".mySwiper4", {
        spaceBetween: 10,
        navigation: true,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper3,
        },
    });
    const mySwiper_small = new Swiper(".mySwiper-small", {
        spaceBetween: 1,
        slidesPerView: 1,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    $('#ex1').zoom();
    $('#ex2').zoom({ on:'grab' });
    $('#ex3').zoom({ on:'click' });			 
    $('#ex4').zoom({ on:'toggle' });

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
});
$(".mititup-slider").owlCarousel({
    nav:true,
    slideSpeed : 300,
    paginationSpeed : 400,
    items : 1, 
});
$('#product-carosule').owlCarousel({
    margin:10,
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

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


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


$('.list1 .loadMore').loadMoreResults();










