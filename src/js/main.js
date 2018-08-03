$(document).ready(function() {
    'use strict';
    
    var menuDropdown = $('.header-menu__dropdown-wrap');
    var dpopdownFirstListItem = $('.dropdown-menu__submenu-list-item:nth-child(1)');
        
    //Creating header dropdown menu in header
    $('.header-menu__item').has(menuDropdown).click(
        function() {
            console.log('Click menu');
            //$(this).find(menuDropdown).fadeToggle();
            $(this).find(menuDropdown).toggleClass('visible');
            $(this).toggleClass('header-menu__item--active');
            
        });
        
    //Responsive parameters of dropdown menu
    if(window.matchMedia('(max-width: 768px)').matches)
    {
        dpopdownFirstListItem.click(
            function(e) {
                console.log('click submenu list');
                $(this).nextAll().slideToggle(300);
                $(this).toggleClass('dropdown-menu__submenu-list-item--active');
                e.stopPropagation();
            });
    }
    
    $(window).resize(function(){
        if(window.matchMedia('(max-width: 768px)').matches) {
            dpopdownFirstListItem.click(
                function(e) {
                    console.log('click submenu list resize');
                    $(this).nextAll().slideToggle(300);
                    $(this).toggleClass('dropdown-menu__submenu-list-item--active');
                    e.stopPropagation();
                });
        }
    });  
    
    // dropdown menu in sidebar
    $(function() {
        $('.btn--nav').on('click', function(){
            $(this).toggleClass('btn--nav--active');
            $('.sidebar__menu-colapse').slideToggle(500, "easeOutBack");
            
        });
    });

    // mobile menu header
     $(function() {
        $('.btn--filter').on('click', function(){
            $(this).toggleClass('btn--filter--active');
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
        
});

