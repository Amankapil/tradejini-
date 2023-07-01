// var swiper = new Swiper(".swiper-container", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 3,
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          swipeToSlide: true,
        },
      },
    ],
    onBeforeChange: function (slick, currentSlide, nextSlide) {
      $(".carousel-item")
        .removeClass("slick-center")
        .eq(nextSlide)
        .addClass("slick-center");
    },
  });
});

$(".carousel-prev").click(function () {
  $(".carousel").slick("slickPrev");
});

// Handle next button click
$(".carousel-next").click(function () {
  $(".carousel").slick("slickNext");
});









