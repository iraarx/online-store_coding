$(document).ready(function() {
    'use strict';

    //Creating header dropdown menu in header
    $('.header-menu li').has('.header-menu__dropdown-wrap').hover(
        function() {
            $(this).find('.header-menu__dropdown-wrap').fadeToggle();
            $(this).find('.header-menu__dropdown-wrap').toggleClass('visible');
        });	
    // $(window).resize(function(){
    //     var wid = $(window).width();
    //     if(wid <=766) {
    //         $('.header-menu li').has('.header-menu__dropdown-wrap').hover(
    //             function() {
    //                 $(this).find('.header-menu__dropdown-wrap').stop().fadeToggle();;
    //                 $(this).find('.header-menu__dropdown-wrap').removeClass('visible');
    //             });	
    //         }
    // });

    $(window).resize(function(){
        var wid = $(window).width();
        
        if(wid <= 1020) {
            $('.header-menu__banner').toggleClass('hidden');
        }
        
    });
    
    // dropdown menu in sidebar
    $(function() {
        $('.sidebar__menu-icon').on('click', function(event){
            event.preventDefault();
            $(this).toggleClass('active');
            $('.sidebar__menu-colapse').slideToggle(500, "easeOutBack");
            
        });
    });
     $(function() {
        $('.header__icon-filter').on('click', function(event){
            event.preventDefault();
            //$('.sidebar__menu-colapse').toggleClass('visible');
            
            $(this).toggleClass('active');
            $('.header__nav').slideToggle(500, "easeOutBack");
            
        });
    });

        
    // top skrolling-page

    $(".footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    


    // // Responsive Header nav
    // var click = $('.menu-button');
    // var collapse = $('.wr-collapse-nav');
    // var nav = $('.header-nav');
            
    // $(click).on('click', function(e) {
    //     e.preventDefault();
    //     collapse.slideToggle();
    //     nav.toggleClass("header-black");
    // });
    
    // $(window).resize(function(){
    //     var wid = $(window).width();
    //     if(wid > 760 && menu.is(':hidden')) {
    //         collapse.removeAttr('style')
    //     }
    // });





});