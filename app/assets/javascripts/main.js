$(document).ready(function(){


  //weather call
  $.get( 'http://api.openweathermap.org/data/2.5/weather?q=udaipur,india&units=metric&appid=ad956bed0ae6a969b8a145bbca729a70', function( data ) {
    $( ".weather-result" ).html( "<div class='icon'><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png' alt='' /></div>"+data.main.temp+" °С" );
  });


  $(".banner-slider").owlCarousel({
    items: 1,
    nav:true,
    lazyLoad: true,
    dots: true,
    smartSpeed: 600
  });

  $(".roomdetailbanner .banner-slider").owlCarousel({
    items: 1,
    nav:true,
    lazyLoad: true,
    dots: true,
    smartSpeed: 600
  });

  // Owl Slider Background image
  $(".banner-image").each(function(){
    var _this = $(this);
    var _Image = $(this).find("img");
    var _getImageName = _Image.attr("src");
    _this.css({background: 'url('+_getImageName+') no-repeat center center / cover'});
  });

  $('.homebanner .owl-dots').appendTo('.homebanner .container .banner-text');
  $('.homebanner .owl-nav').appendTo('.homebanner .container');

  $('.roomdetailbanner .owl-dots').appendTo('.roomdetailbanner .container .banner-text');
  $('.roomdetailbanner .owl-nav').appendTo('.roomdetailbanner .container');

  // About Slider Home Page
  $(".about-slider-home").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.about-slider-home-thumb',
    draggable: false,
    infinite: false,
    swipe: false
  });

  $(".about-slider-home-thumb").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.about-slider-home',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

  $(".about-slider-home img").each(function(){
    $(this).parent().css({ background: "url("+$(this).attr("src")+") no-repeat center center / cover" });
  });


  //Guests Favorite Rooms Slider
  $(".rooms-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  var item_length = $('.rooms-slider .slick-track > div').length - 1;
  $('.rooms-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    totalLength = item_length - 2;
    if(currentSlide == 0){
      $(".rooms-slider-arrow a[data-state=prev]").addClass("arrowdisable");
    } else {
      $(".rooms-slider-arrow a[data-state=prev]").removeClass("arrowdisable");
    }

    if(currentSlide == totalLength){
      $(".rooms-slider-arrow a[data-state=next]").addClass("arrowdisable");
    } else {
      $(".rooms-slider-arrow a[data-state=next]").removeClass("arrowdisable");
    }
  });

  $(".rooms-slider-arrow a").click(function(){
    var getData = $(this).attr("data-state");
    if(getData == 'next'){
      $(".rooms-slider").slick("slickNext");
    } else{
      $(".rooms-slider").slick("slickPrev");
    }
  });

  //Testimonial slider
  $(".testimonial-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  var item_length_testimonial = $('.testimonial-slider .slick-track > div').length - 1;
  $('.testimonial-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    totalLength = item_length_testimonial - 1;
    if(currentSlide == 0){
      $(".testimonial-arrow a[data-state=prev]").addClass("arrowdisable");
    } else {
      $(".testimonial-arrow a[data-state=prev]").removeClass("arrowdisable");
    }

    if(currentSlide == totalLength){
      $(".testimonial-arrow a[data-state=next]").addClass("arrowdisable");
    } else {
      $(".testimonial-arrow a[data-state=next]").removeClass("arrowdisable");
    }
  });

  $(".testimonial-arrow a").click(function(){
    var getData = $(this).attr("data-state");
    if(getData == 'next'){
      $(".testimonial-slider").slick("slickNext");
    } else{
      $(".testimonial-slider").slick("slickPrev");
    }
  });

  // Testimonial Stars
  $(".testimonial").each(function(){
    var getStarDeta = $(this).find(".testimonial-rating").attr("data-rating");
    $(this).find(".testimonial-rating").rateYo({
      rating: getStarDeta,
      readOnly: true,
      starWidth: "15px",
      spacing: "12px"
    });
  });



  // Room slider
  $(".room-slider").each(function(id, item){
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: $(this).next(".room-slider-thumb"),
      draggable: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: true,
            infinite: false
          }
        }
      ]
    });
    $(this).next(".room-slider-thumb").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: $(this),
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      infinite: false
    });
  });

  function roomSliderImgBackground(){
    $(".room-slider img").each(function(){
      $(this).parent().css({ background: "url("+$(this).attr("src")+") no-repeat center center / cover" });
    });
  }
  roomSliderImgBackground();

  // About Us Page Slider
  $(".aboutus-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.aboutus-slider-thumb',
    draggable: false,
    swipe: false,
    infinite: false
  });

  $(".aboutus-slider-thumb").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.aboutus-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
  });

  $(".aboutus-slider img").each(function(){
    $(this).parent().css({ background: "url("+$(this).attr("src")+") no-repeat center center / cover" });
  });

  // Room Detials County code
  $("#countryCode").on('change', function(){
    var getValue = $(this).val();
    $(".value-container span").html(getValue);
  });

  //Room slider height only for safari
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  {
    function homeRoomSliderHeight(){
      var getSliderHeight = $(".about-slider-main").height();
      $(".about-slider-main .row").css({height: getSliderHeight});
    }
    homeRoomSliderHeight();

    function directionMap(){
      var getMapHeight = $(".map-details").height();
      $("#mapdirection").css({height: getMapHeight});
    }
    directionMap();

    function roomSliderHeight(){
      $(".grid-item").each(function(){
        var getRoomContentHeight = $(this).find(".room-content").outerHeight();
        $(this).find(".room-slider").css({height: getRoomContentHeight});
        //alert(getRoomContentHeight);
        // $(".room-slider").each(function(id, item){
        //   //var getParentHeight = $(this).parent().height();
        //   $(this).css({height: getRoomContentHeight});
        // });
      });
      //alert(getRoomContentHeight);

    }

    roomSliderHeight();

    $(window).resize(function(){
      homeRoomSliderHeight();
      directionMap();
      roomSliderHeight();
    });
  }



  // Mobile Footer Accordion
  function footerAccordion(){
    if($(window).width() <= 767){
      $(".footer-links h2").click(function(){
        $(".footer-links h2").removeClass("active");
        $('.footer-links ul').stop(true, true).slideUp('normal');
        if($(this).next().is(':hidden') == true) {
          $(this).next().stop(true, true).slideDown('normal');
          $(this).addClass("active");
        }
      })
    }
  }
  footerAccordion();

  // Amenities Slider on mobile
  function amenitiesSlider(){
    var getWindowWidth = $(window).width();
    if(getWindowWidth <= 767){
      var amenitiesWidth = 0;
      $(".amenitie").each(function(){
        amenitiesPadding = 30
        amenitiesWidth += $(this).width() + amenitiesPadding;
      });
      $(".amenities").css({ width: amenitiesWidth+10 });
    } else {
      $(".amenities").css({ width: 'auto' });
    }
  }
  amenitiesSlider();

  // Amenities Slider About Us page on mobile
  function amenitiesSliderAbout(){
    var getWindowWidth = $(window).width();
    if(getWindowWidth <= 767){
      var amenitiesWidth = 0;
      $(".amenities-about").each(function(){
        amenitiesPadding = 30
        amenitiesWidth += $(this).width() + amenitiesPadding;
      });
      $(".amenities-about-main").css({ width: amenitiesWidth+20 });
    } else {
      $(".amenities-about-main").css({ width: 'auto' });
    }
  }
  amenitiesSliderAbout();


  $(".mobile-menu").click(function(){
    $(this).hide();
    $(".mobile-close").show();
    $(".mobile-nav").show();
    $(".mobile-nav").animate({left: 0})
  });

  $(".mobile-close").click(function(){
    $(this).hide();
    $(".mobile-menu").show();
    $(".mobile-nav").animate({left: '100%'}, function(){
        $(".mobile-nav").hide();
    })
  });

  $(window).resize(function(){
    amenitiesSlider();
    amenitiesSliderAbout();
    roomSliderImgBackground();
  })









});
