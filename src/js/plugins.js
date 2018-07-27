$(document).ready(function() {
    
    'use strict';

           
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от элемента справа в 50px
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1618, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        stagePadding:30,
        singleItem:true,
        nav:false,
        pagination:true,
        dotsEach:7/true,
        touchDrag:true,
        center:true,
        navText:["",""]
    });

    window.FontAwesomeConfig = {
        searchPseudoElements: true
      };
    
});