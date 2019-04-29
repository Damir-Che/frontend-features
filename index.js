

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
	});
// товары

	$('.basket').on('click', function(){
		
		$('.null').html(+$('.null').html()+1 );
		$('.null').css('display','inline');
		$('.null').css('color','#CED8F6');

	})

	// сортировка
	$('.expensive').on('click', function(){
		alert('asd');
	})

});

