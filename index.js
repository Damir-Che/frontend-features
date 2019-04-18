

$(document).ready(function(){
// меню
	$('.but').on('click',function(){
		$('#sidebar').toggleClass('active');
	})


	$('.Xbut').click(function(){
		// $('.content').fadeIn().addClass('div-active');
		$('.content').css('top','200px')
// удаление через время
 	setTimeout(function(){
 		$('.content').toggleClass('cont-active')

 	},3000);

	})

		// кнопка закрытия
	$('.x').on('click',function(){
		$('.content').toggleClass('cont-active');
	})


})

