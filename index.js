

$(document).ready(function(){
// меню
	$('.but').on('click',function(){
		$('#sidebar').toggleClass('active');
	})


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
	})

	// картинки
	// $("a.gallery").fancybox();

	// 	$("a.gallery").fancybox({
	// 		"padding" : 20, // отступ контента от краев окна
	// 		"zoomSpeedIn" : 1000,	// скорость анимации в мс при увеличении фото (по умолчанию 0)
	// 		"zoomSpeedOut" : 1000,	// скорость анимации в мс при уменьшении фото (по умолчанию 0)
	// 		"overlayOpacity" : 0.5,	 // Прозрачность затенения 	(0.3 по умолчанию)
	// 		"centerOnScroll" : false // Если TRUE окно центрируется на экране, когда 
	// 	})


})

