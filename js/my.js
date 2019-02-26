$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin:10, //Отступ от картино если выводите больше 1
    nav:true, //Включил навигацию
    autoplay:false, //Автозапуск слайдера
    smartSpeed:650, //Время движения слайда
    autoplayTimeout:7000, //Время смены слайда
    responsive:{ //Адаптация в зависимости от разрешения экрана
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
});