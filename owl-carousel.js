  $(document).ready(function(){
    $('.testimonial-slider').slick({
      centerMode: true,
      centerPadding: '120px',
      slidesToShow: 1,
      infinite: true,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: { centerPadding: '60px' }
        },
        {
          breakpoint: 768,
          settings: { centerMode: false, centerPadding: '0' }
        }
      ]
    });
  });
