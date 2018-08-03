$(document).ready(function() {
    'use strict';
    
    var menuDropdown = $('.header-menu__dropdown-wrap');
    var wid = $(window).width();
    var dpopdownFirstListItem = $('.dropdown-menu__submenu-list-item:nth-child(1)');
    var dpopdownCollapseList = $('.dropdown-menu__submenu-list-item').filter( ":nth-child(n+2)");
        
    //Creating header dropdown menu in header
    $('.header-menu__item').has(menuDropdown).click(
        function(e) {
            //$(this).find(menuDropdown).fadeToggle();
            $(this).find(menuDropdown).toggleClass('visible');
        });

    //Responsive parameters of dropdown menu
    if(window.matchMedia('(max-width: 768px)').matches)
    {
        dpopdownFirstListItem.click(
            function() {
                //$(this).find(dpopdownCollapseList).toggleClass('visible');
                $(this).nextAll().slideToggle(1000);
            });
    } 
      
    $(window).resize(function(){
        if($(window).width() <= 768) {
            dpopdownFirstListItem.click(
                function() {
                    //$(this).find(dpopdownCollapseList).toggleClass('visible');
                    $(this).nextAll().slideToggle(1000);
                });
        }
    });    

    
    // $(document).mouseup(function (e){ 
    //     if (!menuDropdown.is(e.target) && menuDropdown.has(e.target).length === 0) {
    //             menuDropdown.hide();
    //     }
    // });
        
        
    // dropdown menu in sidebar
    $(function() {
        $('.btn--nav').on('click', function(event){
            event.preventDefault();
            $(this).toggleClass('btn--nav--active');
            $('.sidebar__menu-colapse').slideToggle(500, "easeOutBack");
            
        });
    });

    // mobile menu header
     $(function() {
        $('.btn--filter').on('click', function(event){
            event.preventDefault();
            //$('.sidebar__menu-colapse').toggleClass('visible');
            
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
    
    
    // window.onload = function () {
    //     var block = document.querySelector('.block');
    
    //     // проверка разрешения при загрузке
    //     console.log(window.matchMedia('(max-width: 768px)').matches);
    //     if(window.matchMedia('(max-width: 768px)').matches)
    //     {
    //         block.classList.add('block-green');
    //     } else {
    //         block.classList.remove('block-green');
    //     }
    //     // проверка при resize
    //     window.onresize = function () {
    //         if(window.matchMedia('(max-width: 768px)').matches)
    //         {
    //             block.classList.add('block-green');
    //         } else {
    //             block.classList.remove('block-green');
    //         }
    //     };
    // };
    
});
