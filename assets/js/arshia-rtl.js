/*-----------------------------------------------------------
* Template Name    : arshia | Bootstrap 4 personal, portfolio and resume
* Author           : Retrinagroup
* Version          : 1.0.0
* Created          : March 2020
* File Description : Main rtl js file of the template
*------------------------------------------------------------
*/

// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function () {

    "use strict";

    colorScheme();
    ColorPallet();
    bgBackground();
    colorFull();
    borderColor();
    menuToggler();
    swiperSlider();
    sliderOwlCarousel();
    clientCarousel();
    typedJS();
    skills();
    countup();
    portfolioPopup();
    validateEmail();
    sendEmail();
    $('.owl-item.active .hero-slide').addClass('zoom');


});

$window.on("load", (function() {
    $("#overlayer").delay(500).fadeOut('slow');
    $(".loader").delay(1000).fadeOut('slow');
    pagePilling();
    portfolioIsotop();
}));

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

/*-------------------------
       Page Pilling
-------------------------*/
function pagePilling(){

    "use strict";
    
    var ids = [];
    var tooltips = [];
    var colors = [];
    $('.section').each(function () {
        ids.push(this.id);
        tooltips.push($(this).data("navigation-tooltip"));
        colors.push($(this).data("navigation-color"));
    });
    $('#pagepiling').pagepiling({
        sectionsColor: colors,
        anchors: ids,
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        navigation: {
            'position': 'left',
            'tooltips': tooltips
        },
        loopBottom: true,
        loopTop: true,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,
        //events
        onLeave: function(index, nextIndex, direction){
            if(nextIndex==1) {
                $(".special-section").css('color', '#fff');
            }
            else{
                $(".special-section").css('color', '#3c3c3c');
            }

            if(nextIndex==1 &&  $('.section.hero').hasClass("speacial-hero")) {
                $("#pp-nav li span").css('backgroundColor', '#fff');
            }
            else{
                $("#pp-nav li span").css('backgroundColor', '#3c3c3c');
            }

            if(nextIndex==1 &&  $('.section.hero').hasClass("speacial-hero")) {
                $("#pp-nav li .pp-tooltip").css('color', '#fff');
            }
            else{
                $("#pp-nav li .pp-tooltip").css('color', '#3c3c3c');
            }

        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(index){
            if(index>1) {
                $(".special-section").css('color', '#3c3c3c');
            } else{
                $(".special-section").css('color', '#fff');
            }

            if( index>1 && $('.section.hero').hasClass("speacial-hero")) {
                $("#pp-nav li span").css('backgroundColor', '#3c3c3c');
            }
            else if ($('.section.hero').hasClass("speacial-hero")){
                $("#pp-nav li span").css('backgroundColor', '#fff');
            }

            if( index>1 && $('.section.hero').hasClass("speacial-hero")) {
                $("#pp-nav li .pp-tooltip").css('color', '#3c3c3c');
            }
            else if ($('.section.hero').hasClass("speacial-hero")){
                $("#pp-nav li .pp-tooltip").css('color', '#fff');
            }


        },
    });
}

/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme(){

    "use strict";

    var $darkLogo = $('.dark-logo');
    $('.color-scheme').on("click",function() {
        $("body").toggleClass('arshia-dark');
        // $('.section').toggleClass('dark-bg');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    });
}
// -------------------------------------------------------------
//   Color Panel
// -------------------------------------------------------------
function ColorPallet() {

    "use strict";

    $("ul.pattern .color1").click(function () {
        return $("#option-color").attr("href", "assets/css/color/green-color.css")
    });
    $("ul.pattern .color2").click(function () {
        return $("#option-color").attr("href", "assets/css/color/yellow-color.css")
    });
    $("ul.pattern .color3").click(function () {
        return $("#option-color").attr("href", "assets/css/color/golden-color.css")
    });
    $("ul.pattern .color4").click(function () {
        return $("#option-color").attr("href", "assets/css/color/sky-blue-color.css")
    });
    $("ul.pattern .color5").click(function () {
        return $("#option-color").attr("href", "assets/css/color/blue-color.css")
    });
    $("ul.pattern .color6").click(function () {
        return $("#option-color").attr("href", "assets/css/color/purple-color.css")
    });
    $("ul.pattern .color7").click(function () {
        return $("#option-color").attr("href", "assets/css/color/orange-color.css")
    });
    $("ul.pattern .color8").click(function () {
        return $("#option-color").attr("href", "assets/css/color/pink-color.css")
    });
    $("ul.pattern .color9").click(function () {
        return $("#option-color").attr("href", "assets/css/color/red-color.css")
    });
    $("#color-switcher .pallet-button").click(function () {
        $("#color-switcher .color-pallet").toggleClass('show')
    })

}
/*-------------------------
        ColorFull Demo
-------------------------*/
function bgBackground() {

    "use strict";

    var list = document.getElementsByClassName('data-background');

    for (var i = 0; i < list.length; i++) {
        var color = list[i].getAttribute('data-color');
        list[i].style.backgroundColor = "" + color + "";
    }
}


function colorFull() {
    var allDivs = document.getElementsByClassName('data-text-color');

    for( var i =0; i < allDivs.length; ++i )
    {
        var color = allDivs[i].getAttribute('data-color');
        allDivs[i].style.color = "" + color + "";
    }
}


function borderColor() {
    var allDivs = document.getElementsByClassName('timeline-border');

    for( var i =0; i < allDivs.length; ++i )
    {
        var color = allDivs[i].getAttribute('data-color');
        allDivs[i].style.borderRightColor = "" + color + "";
    }
}

/*-------------------------
    MENU TOGGLER
-------------------------*/
function menuToggler() {

    "use strict";

    $(".overlay-menu-toggler").on("click",function(){
        $(".overlay-menu").addClass("show");
    });
    $(".overlay-menu").on("click",function(){
        $(this).removeClass("show");
    });

}
/*-----------------------------
     HERO SWIPER SLIDER
------------------------------*/
function swiperSlider(){

    "use strict";

    if($(".swiper-container").length){
        var swiper = new Swiper('.swiper-container', {
            effect: "slide",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var textSwiper = new Swiper('.text-swiper', {
            effect: "fade",
            allowTouchMove: 'false',
            touchRatio: 0,
            threshold: 992,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        $(".hero-item-image").css('background', function () {
            var bg = ('url(' + $(this).data("image-src") + ') no-repeat center');
            return bg;
        });
        var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images");
        $fullscreen.css("height", $window.height());
    }
}
/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel(){
    "use strict";

    $('.hero .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        nav: false,
        dots: false,
        rtl: true,
        autoplay:true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
    });
    $('#hero-slider').on("translate.owl.carousel", function(){
        setTimeout(function(){
            $('.hero-slide').removeClass("zoom");
        }, 1000)
    });
    $('#hero-slider').on("translated.owl.carousel", function(){
        $('.owl-item.active .hero-slide').addClass("zoom");
    });
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    "use strict";

    var $element = $(".element");
    if($element.length){
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }
}

/*-------------------------
            Skills
-------------------------*/
function skills() {

    "use strict";

    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}

/*-------------------------
            Count up
  -------------------------*/
function countup() {

    "use strict";

    $('.timer').countTo();
    $('.count-number').removeClass('timer');
}



/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    "use strict";

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true,
                    tCounter: '<span class="mfp-counter">%curr% از %total%</span>'
                },
                callbacks: {
                    open: function() {
                        $.fn.pagepiling.setKeyboardScrolling(false);
                      
                    },
                    close: function() {
                        $.fn.pagepiling.setKeyboardScrolling(true);
                    }
                  }
            });
        });
    }
}

/*-------------------------
        ISOTOPE JS
-------------------------*/
function portfolioIsotop() {

    "use strict";

    var $container = $('.portfolio-items');
    var $filter = $('#portfolio-filter');
    $container.isotope({
        filter: '*',
        isOriginLeft: false,
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').on("click",function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
}

/*-------------------------
    Testimonial CAROUSEL JS
-------------------------*/
function clientCarousel() {
    $(".testimonial .owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 5,
        nav: false,
        autoplay: false,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 700,
        autoplayHoverPause: false,
        responsiveClass: true,
        rtl:true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                mouseDrag: false
            },
            1200: {
                items: 2,
                nav: false,
            },

        }
    });
}
/*-------------------------
     AJAX CONTACT FORM
-------------------------*/
function validateEmail(email) {

    "use strict";

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function sendEmail() {

    "use strict";

    var name     = $('#name').val();
    var email    = $('#email').val();
    var subject  = $('#subject').val();
    var comments = $('#comments').val();

    if(!name){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('لطفا نام خود را وارد کنید');
    } else if(!email){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('لطفا ایمیل خودرا وارد کنید');
    } else if(!validateEmail(email)){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('ایمیل وارد شده معتبر نیست');
    } else if(!subject){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('لطفا موضوع خود را وارد کنید');
    }else if(!comments){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('لطفا پیغام خود را وارد کنید');
    }else {
        $.ajax({
            type: 'POST',
            data: $("#contactForm").serialize(),
            url:  "sendEmail.php",
            beforeSend: function() {
                $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Loading..');
            },
            success: function(data) {
                $('#submit-btn').html('Submit');
                var myObj = JSON.parse(data);
                if(myObj['status']=='Congratulation'){
                    $('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Error'){
                    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Warning'){
                    $('#message').toast('show').addClass('bg-warning').removeClass('bg-success bg-danger');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }
            },
            error: function(xhr) {
                $('#submit-btn').html('Submit');
                $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                $('.toast-body').html('<strong> Error : </strong> Something went wrong, Please try again.');
            },
        });
    }
}


