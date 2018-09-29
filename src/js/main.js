$(document).ready(function() {
    'use strict';

    var headerMenuItem = $('.header-menu__item');
    var menuDropdown = $('.header-menu__dropdown-wrap');
    var dpopdownFirstListItem = $('.dropdown-menu__submenu-list-item:nth-child(1)');
    var cart = $('.cart__link');
    var cartContent = $('.cart__content');
    var overlayBackgroundCartClick = $('.overlayBackgroundCartClick');
    var docHeight = $(document).height();

    //------------------------ Header dropdown menu -----------------------------------//
    headerMenuItem.has(menuDropdown).click(
        function(e) {
            console.log('Click menu');
            var headerMenuItemActive = $('.header-menu__item--active');
            //close this dropdown when click next menu item
            if (headerMenuItemActive.length) {
                if (!$(this).hasClass('header-menu__item--active')) {
                    menuDropdown.removeClass('visible');
                    headerMenuItem.removeClass('header-menu__item--active');
                }
            }
            //open dropdown menu  
            $(this).find(menuDropdown).toggleClass('visible');
            $(this).toggleClass('header-menu__item--active');
    });
    
    //close dropdown when click outside
    $(document).on("click", function(event){
        if(headerMenuItem !== event.target && !headerMenuItem.has(event.target).length){
            menuDropdown.removeClass('visible');
            headerMenuItem.removeClass('header-menu__item--active');
        }            
    });
    //responsive transform dropdown menu to accordeon
    dpopdownFirstListItem.click(function (event) {
        event.stopPropagation();
        // we don't care about window resize because
        // click on our item will always happen after resize has finished
        var isMdScreen = window.matchMedia('(max-width: 768px)').matches;
    
        if (!isMdScreen) {
            // do nothing if window doesn't match our media query
            return;
        }
    
        // do logic when window does match our media query
        $(this).nextAll().slideToggle(300);//accordeon
        $(this).toggleClass('dropdown-menu__submenu-list-item--active');
    });
    
    //------------------------ Header menu mobile ------------------------------------//
    $(function() {
        $('.btn--filter').on('click', function(){
            $(this).toggleClass('btn--filter--active');
            $('.header__nav').animate({
                width: "toggle"
            }, 800, "easeOutBack");
        });
    });
    
    //--------------------- Sidebar menu responsive ----------------------------------//
    $(function() {
        $('.btn--nav').on('click', function(){
            $(this).toggleClass('btn--nav--active');
            $('.sidebar__menu-colapse').slideToggle(500, "easeOutBack");
        });
    });

    //-------------------------- Cart content -----------------------------------------//
    // show and hide cart content
    $(function() {
        cart.on('click', function(){
            $(this).toggleClass('cart--active');
           
            cartContent.animate({
                width: "toggle"
            }, 800, "easeOutBack");
            
            overlayBackgroundCartClick.animate({
                opacity: "toggle"
            }, 800, "easeOutBack");
            
        });
    });
    // hide cart content when click outside
    $(overlayBackgroundCartClick).on("click", function(event){
        if(cart !== event.target && !cart.has(event.target).length){
            cartContent.animate({
                width: "toggle"
            }, 800, "easeOutBack");
            overlayBackgroundCartClick.animate({
                opacity: "toggle"
            }, 800, "easeOutBack");

            $(this).removeClass('cart--active');
        }            
    });

    // overlay background height when cart click 
    $(function(){
        overlayBackgroundCartClick.height(docHeight);
     });

           
    // -------------------  Top skrolling-page button --------------------------------//
    $(".footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
        
});

