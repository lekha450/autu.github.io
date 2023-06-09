// (function ($) {
//     "use strict";

//     // Dropdown on mouse hover
//     $(document).ready(function () {
//         function toggleNavbarMethod() {
//             if ($(window).width() > 992) {
//                 $('.navbar .dropdown').on('mouseover', function () {
//                     $('.dropdown-toggle', this).trigger('click');
//                 }).on('mouseout', function () {
//                     $('.dropdown-toggle', this).trigger('click').blur();
//                 });
//             } else {
//                 $('.navbar .dropdown').off('mouseover').off('mouseout');
//             }
//         }
//         toggleNavbarMethod();
//         $(window).resize(toggleNavbarMethod);
//     });


//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });


//     // Vendor carousel
//     $('.vendor-carousel').owlCarousel({
//         loop: true,
//         margin: 29,
//         nav: false,
//         autoplay: true,
//         smartSpeed: 1000,
//         responsive: {
//             0:{
//                 items:2
//             },
//             576:{
//                 items:3
//             },
//             768:{
//                 items:4
//             },
//             992:{
//                 items:5
//             },
//             1200:{
//                 items:6
//             }
//         }
//     });


//     // Related carousel
//     $('.related-carousel').owlCarousel({
//         loop: true,
//         margin: 29,
//         nav: false,
//         autoplay: true,
//         smartSpeed: 1000,
//         responsive: {
//             0:{
//                 items:1
//             },
//             576:{
//                 items:2
//             },
//             768:{
//                 items:3
//             },
//             992:{
//                 items:4
//             }
//         }
//     });


//     // Product Quantity
//     $('.quantity button').on('click', function () {
//         var button = $(this);
//         var oldValue = button.parent().parent().find('input').val();
//         if (button.hasClass('btn-plus')) {
//             var newVal = parseFloat(oldValue) + 1;
//         } else {
//             if (oldValue > 0) {
//                 var newVal = parseFloat(oldValue) - 1;
//             } else {
//                 newVal = 0;
//             }
//         }
//         button.parent().parent().find('input').val(newVal);
//     });

// })(jQuery);


// hamburger 

const hamburger = document.getElementById("hamburger");

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

hamburger.addEventListener("click", () => {
  //   hamburger.classList.toggle("active");
  openNav();
});




var slide_count='' ;

function myFunction(x) {
  if (x.matches) { // If media query matches
    slide_count=1;
    console.log(slide_count)
  }
  else{
    slide_count=2;
    console.log(slide_count)
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
var swiper = new Swiper(".mySwiper",{
  slidesPerView: slide_count,
  spaceBetween: 30,
  smartSpeed: 250,
  freeMode: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// owl-carousel 


$('.vendor-carousel').owlCarousel({
  loop: true,
  margin: 29,
  nav: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
      0:{
          items:2
      },
      576:{
          items:3
      },
      768:{
          items:4
      },
      992:{
          items:5
      },
      1200:{
          items:6
      }
  }
});


// product-detail 

jQuery(function($){
  jQuery('#demo-1 .simpleLens-thumbnails-container img').simpleGallery({
      loading_image: 'demo/images/loading.gif'
  });

  jQuery('#demo-1 .simpleLens-big-image').simpleLens({
      loading_image: 'demo/images/loading.gif'
  });
});