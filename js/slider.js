 $(document).ready(function(){

$('.next-arrow').on('click', function() {
  $('.responsives').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.responsives').slick('slickPrev');
});

 $('.responsives').slick({
        infinite: true,
        speed: 800,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'0',
        arrows:false,
        dots:false,

        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true,
            centerPadding:'10px',
          }
        },
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              centerMode: false,
            centerPadding:'0px',
            }
          }
      ]
  });

$('.next-arrow').on('click', function() {
  $('.responsive').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.responsive').slick('slickPrev');
});

 $('.responsive').slick({
        infinite: true,
        speed: 300,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'0px',
        arrows:false,
        dots:false,

        responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode:false,
            centerMode: false,
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              centerMode: false,
            centerPadding:'0px',
            }
          }
      ]
  });

 $('.next-arrow').on('click', function() {
  $('.responsiv').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.responsiv').slick('slickPrev');
});

 $('.responsiv').slick({
        infinite: true,
        speed: 300,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'0px',
        arrows:false,
        dots:false,

        responsive: [
        {
          breakpoint: 1292,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode:false,
            centerMode: false,
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              centerMode: false,
            centerPadding:'0px',
            }
          }
      ]
  });

 $('.next-arrow').on('click', function() {
  $('.respons').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.respons').slick('slickPrev');
});

 $('.respons').slick({
        infinite: true,
        speed: 300,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding:'0px',
        arrows:false,
        dots:false,

        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode:false,
            centerMode: false,
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding:'0px',
          }
        },


          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
              centerMode: false,
            centerPadding:'0px',
            }
          }
      ]
  });

$(".accordion-wrap").on("click", function(){   
    $(this).children().eq(1).slideToggle(300);  
    $(this).children().eq(0).toggleClass("accordion-no-bar");
    $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
    $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
    $(this).find(".accordion-header").toggleClass("accordion-gold");
    $(this).find(".fa").toggleClass("rotate-fa");

    $(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
});

$("a.rev-but").on("click", function(){ 
  $('.rev-text-more').css('display','block');
  $('a.rev-but-more').css('display','inline-block');
  $('a.rev-but').css('display','none');
});

$("a.rev-but-more").on("click", function(){ 
  $('.rev-text-more').css('display','none');
  $('a.rev-but-more').css('display','none');
  $('a.rev-but').css('display','inline-block');
});

$(".prev-arrow").on("click", function(){
  $('.next-arrow').removeClass('active');
  $(this).parent().addClass('active');
});

$(".next-arrow").on("click", function(){
  $('.next-arrow').removeClass('active');
  $(this).parent().addClass('active');
});

$("a#vid").on("click", function (e) {
           $('.modul-1').css('display','block');
           $('body').css('overflow','hidden')
});

$(".form-slid-img-but").on("click", function (e) {
           $('.modul-7').css('display','block');
           $('body').css('overflow','hidden')
});

$("a#modul-6").on("click", function (e) {
           $('.modul-6').css('display','block');
           $('body').css('overflow','hidden')
});

$(".closes").on("click", function (e) {
           $('.modul-1').css('display','none');
           $('.modul-6').css('display','none');
           $('.modul-7').css('display','none');
           $('body').css('overflow','auto');
 });


});