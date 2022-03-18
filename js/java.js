$(function(){


    /* fixed header*/ 
    let header = $('#header');

    let intro = $('#intro');

    let introH = intro.innerHeight();

    let scrollPas = $(window).scrollTop();

    let nav = $('#nav');
    let navToogle = $('#navToggle');

    checkScroll(scrollPas ,introH);

    $(window).on('scroll resize', function(){
        introH = intro.innerHeight();
        scrollPas = $(this).scrollTop();
        checkScroll(scrollPas ,introH);
    
    });

    function checkScroll(){
       

        if(scrollPas > introH){
            header.addClass('fixed');
        }else{
            header.removeClass('fixed')
        }
    }





    /* on scroll*/

   $('[data-scroll]').on('click', function(event){
       event.preventDefault();


       let elementId = $(this).data('scroll');

       let elementOffset = $(elementId).offset().top;

       nav.removeClass('show')
       
       console.log(elementOffset);

       $('html ,body').animate({
           scrollTop: elementOffset -70
       }, 700)
   });

   /*nav toggle*/

  
  
   navToogle.on('click', function(event){
        event.preventDefault();

        nav.toggleClass('show');

       

   });

   /* slick */
   let reviewsSlick = $('#reviewsSlick')
   reviewsSlick.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows:false,
    dots: true
  });
      
})