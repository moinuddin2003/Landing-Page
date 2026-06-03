$(document).ready(function() {

  // 1. Company Logo Slider (Slick)
  $('.company-logo-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  });

  // 2. Testimonial Slider (Slick)
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 2,
    infinite: true,
    dots: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: '60px' } },
      { breakpoint: 768, settings: { centerMode: false, centerPadding: '0' } }
    ]
  });

  // 3. Team Carousel (Owl Carousel)
  var owl = $('.team-carousel').owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      640: { items: 2 },
      1024: { items: 4 }
    }
  });

  // Team Carousel Custom Navigation Buttons
  $('#teamPrev').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  
  $('#teamNext').click(function() {
    owl.trigger('next.owl.carousel');
  });


  $('.case-slider').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.prev-case'),
    nextArrow: $('.next-case'),
    responsive: [
        { breakpoint: 1024, settings: { centerPadding: '60px' } },
        { breakpoint: 768, settings: { centerMode: false, centerPadding: '0' } }
    ]
});


$('.testimonial-s').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.testi-prev'),
    nextArrow: $('.testi-next'),
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
});

});

//USed in index case studies slider
