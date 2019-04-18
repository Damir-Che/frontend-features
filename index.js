

$(document).ready(function(){
// меню
	$('.but').on('click',function(){
		$('#sidebar').toggleClass('active')
	})


	$('.Xbut').click(function(){
		$('.content').fadeIn().addClass('div-active');
// удаление через время
		setTimeout(function(){
 		$('.content').css('left','-500px');

 	},3000);

	})

		// кнопка закрытия
	$('.x').on('click',function(){
		$('.content').css('left','-500px');
	})


})

