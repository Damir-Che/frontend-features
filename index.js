

$(document).ready(function(){
	// вызов меню
	$('.fa-bars').on('click', function(){
		$('.section_1').toggleClass('active');
	})
// ---------------------------------------------------------
	// якорные ссылки

	$('.silka').on('click',function(){

		let nameClick = $(this).attr('href');
		// вычесляем какой отступ имеет сверху 
		let top = $(nameClick).offset().top-150;

		$('body, html').animate({scrollTop: top},700);
		// что бы ссылки не перелистывались вверх
		return false;
	}) 
// ----------------------------------------------------------
	// кнопка уведомления
	$('.Xbut').click(function(){
		// $('.content').css('top','550px')
		$('.content').css('bottom','0px')
	// удаление через время
 	setTimeout(function(){
 		$('.content').addClass('cont-active');

 	},5000);

	})
		// кнопка закрытия
	$('.x').on('click',function(){
		$('.content').toggleClass('cont-active');
	});
// ----------------------------------------------------------
	// добовление товаров

	$('.basket1').on('click', function(){
		
		$('.null').html(+$('.null').html()+1 );
		$('.null').css('display','inline');
		$('.null').css('color','#CED8F6');

	})
// ----------------------------------------------------------
	// Сортировка

	// дешевле
	$('.cheaper').on('click',function(){


	    let elements = $('.product_block');
	    let target = $('.qqq');
	     
	    elements.sort(function (a, b) {
	        let an = parseInt($(a).attr('summ')),
	            bn = parseInt($(b).attr('summ'));
	        if(an > bn) return 1;
	        if(bn < an) return 0;
	        return 0;

	   });
	     
   		 elements.detach().appendTo(target);

	})

	// дороже
	$('.expensive').on('click',function(){


    let elements = $('.product_block');
    let target = $('.qqq');
     
    elements.sort(function (a, b) {
        let an = parseInt($(a).attr('summ')),
            bn = parseInt($(b).attr('summ'));
        if(an < bn) return 1;
        if(bn > an) return 0;
        return 0;
    });
     
    elements.detach().appendTo(target);

	})
// ----------------------------------------------------------
	
	// поиск
    $("#search").keyup(function(){
      _this = this;
      $.each($(".qqq .product_block"), function() {
          if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
             $(this).hide();
          else
             $(this).show();                
      });
  });

// -------------------------------------------------------------
	// Загрузка странцы 
	$('#preloaders').find('img').fadeOut().end().delay(400).fadeOut('slow');
// -------------------------------------------------------------

	// Выбор цвета 

	
	

	// по клику на цвет
	$('.colorItem').on('click', function(){

		// запис в переменную картинку
		let $mobImg = $(this).closest('.item').find('img');
		
		// записываем его отрибут в переменную
		let imgPath = $(this).attr('data-img-path');

		// анимация с исчезновением
		$mobImg.fadeOut(200, function(){

			// меняем путь картинки на отрибут и показываем
			$mobImg.attr('src', imgPath).fadeIn(200);

		})

	});
// -------------------------------------------------------------

	
	

	// $('.item').on('mouseover',function(){
	// 	// let $mobImg = $(this);
	// });

	






})













































  // Видео
  // $( document ).ready(function() {
  //   scaleVideoContainer();

  //   initBannerVideoSize('.video-container .poster img');
  //   initBannerVideoSize('.video-container .filter');
  //   initBannerVideoSize('.video-container video');

  //   $(window).on('resize', function() {
  //     scaleVideoContainer();
  //     scaleBannerVideoSize('.video-container .poster img');
  //     scaleBannerVideoSize('.video-container .filter');
  //     scaleBannerVideoSize('.video-container video');
  //   });
  // });

  // function scaleVideoContainer() {
  //   var height = $(window).height() + 5;
  //   var unitHeight = parseInt(height) + 'px';
  //   $('.homepage-hero-module').css('height',unitHeight);
  // }

  // function initBannerVideoSize(element){
  //   $(element).each(function(){
  //     $(this).data('height', $(this).height());
  //     $(this).data('width', $(this).width());
  //   });

  //   scaleBannerVideoSize(element);
  // }

  // function scaleBannerVideoSize(element) {

  //   var windowWidth = $(window).width(),
  //   windowHeight = $(window).height() + 5,
  //   videoWidth,
  //   videoHeight;

  //   // console.log(windowHeight);

  //   $(element).each(function(){
  //     var videoAspectRatio = $(this).data('height')/$(this).data('width');

  //     $(this).width(windowWidth);

  //     if(windowWidth < 1000){
  //         videoHeight = windowHeight;
  //         videoWidth = videoHeight / videoAspectRatio;
  //         $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

  //         $(this).width(videoWidth).height(videoHeight);
  //     }

  //     $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

  //   });
  // }
