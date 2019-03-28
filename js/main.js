/*
  Template Name: Leon - Personal One Page Portfolio Template
  Author: MIRAJU
  Author URL: https://themeforest.net/user/miraju
  Version: 1.1
  Website: www.1stwebcoder.com/themes/niag
  Tags: portfolio, personal portfolio, resume, cv, creative, designer, html, freelancer, minimal, one page, programmer, responsive, vcard
*/
/*
 ==============================================================
     TABLE OF CONTENTS
 ==============================================================

    ## FAKELOADER
    ## TEXT ROTATOR
    ## SMOOTH SCROOL
    ## SCROLLSPY
    ## ISOTOPE
    ## STICK NAVBAR
    ## COUNTER UP
    ## MAGNIFIC POPUP
    ## REMOVE MOBILE MENU BACKGROUND
    ## WOW JS
    ## BACK TO TOP
    
==============================================================
*/

$(function($) {
  
    "use strict";

        // FAKELOADER

           $("#fakeLoader").fakeLoader({
            timeToHide:2000, //Time in milliseconds for fakeLoader disappear
            zIndex:9999, // Default zIndex
            spinner:"spinner6",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
            bgColor:"#003445" //Hex, RGB or RGBA colors
            //imagePath:"yourPath/customizedImage.gif"//If you want can you insert your custom image
           });

        // END FAKELOADER

        //  TEXT ROTATOR
            $(".typed").typed({
              strings: ["from johanesburg", "creative designer", "UI/UX designer and developer"],
              typeSpeed: 50,
              loop: true
            });
          
      // END TEXT ROTATOR

       // SMOOTH SCROLL
                $('a.smooth-scroll').on('click', function(event) {
                  var $anchor = $(this);
                    var headerH = '30';
                  $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
                  }, 1000, 'easeInOutExpo');
                  event.preventDefault();
                });
        // END SMOOTH SCROLL

        // SCROLLSPY

            $('body').scrollspy({target: ".navbar", offset: 50});   

        // END SCROLLSPY

         // ISOTOPE

          $(".portfolio-active").isotope({
                  itemSelector: '.single-portfolio',
                  layoutMode: 'fitRows'
              });
              
              $('.portfolio-filter li').on('click', function(){ 
                  
                $(".portfolio-filter li").removeClass("active");
                $(this).addClass("active");        

                  var selector = $(this).attr('data-filter'); 
                  $(".portfolio-active").isotope({ 
                      filter: selector, 
                      animationOptions: { 
                          duration: 1500,
                          easing: 'linear',
                          queue: false
                      } 
                  }); 
                return false; 
              });  

        // END ISOTOPE

        // STICK NAVBAR

        $(window).scroll(function() {
          if ($(document).scrollTop() > 50) {
            $('nav').addClass('scroll-bg');
          } else {
            $('nav').removeClass('scroll-bg');
          }
        });

        // END STICK NAVBAR

      // COUNTER UP
            $('.count').counterUp({
                delay: 10,
                time: 2500
              });
           
        // END COUNTER UP

       // MAGNIFIC POP UP

        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
                mainClass: 'mfp-with-zoom',
            gallery: {
              enabled: true
            }
        });

        // END MAGNIFIC POP UP

        // REMOVE MOBILE MENU BACKGROUND

          $("ul.nav.navbar-nav li a").on('click',function() {
            $(".navbar-collapse").removeClass("in");
          });
  
        // END REMOVE MOBILE MENU BACKGROUND

         // WOW 

           new WOW().init();

        // END WOW JS

        // BACK-TO-TOP

          $(window).on('scroll',function(){
                if ($(this).scrollTop() > 200) {
                    $('.back-to-top').fadeIn();
                } else {
                    $('.back-to-top').fadeOut();
                }
              });

              $('.scrollUpButton').on('click',function(){
                  $("html, body").animate({ scrollTop: 0 }, 500);
                  return false;
          });    

      // END BACK-TO-TOP
 })(jQuery);
