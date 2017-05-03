$(document).ready(function(){
  $('# owl-carousel-prize').owlCarousel();
 
});
$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                //dots:true,
                //margin:50, //Отступ от элемента справа в 50px
                nav:false, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                 items:1,
            });
        });

/*$(document).ready(function() {
            $('#owl-carousel-prize').owlCarousel({
                loop:true, //Зацикливаем слайдер
                //dots:true,
                //margin:50, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
               responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:5
                    }
                }
            });
        });*/

