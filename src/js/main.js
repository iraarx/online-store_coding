$(document).ready(function() {
    'use strict';

    // Creating header dropdown menu in header
    $('.header-menu li').has('.header-menu__dropdown-wrap').hover(
		function() {
            $(this).find('.header-menu__dropdown-wrap').fadeToggle();
            $(this).find('.header-menu__dropdown-wrap').css({display: 'flex'});
        });	

    // Add class to header button Advance filters
    $('.header-menu__item:nth-child(7) > .header-menu__link').addClass('btn--filled');
      
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