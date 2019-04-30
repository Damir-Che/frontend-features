

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

// Сортировка
	$('.cheaper').on('click',function(){


	    let elements = $('.product_1');
	    let target = $('.container');
	     
	    elements.sort(function (a, b) {
	        let an = parseInt($(a).attr('summ')),
	            bn = parseInt($(b).attr('summ'));
	        if(an > bn) return 1;
	        if(bn < an) return 0;
	        return 0;

	   });
	     
    elements.detach().appendTo(target);

	})

	$('.expensive').on('click',function(){


    let elements = $('.product_1');
    let target = $('.container');
     
    elements.sort(function (a, b) {
        let an = parseInt($(a).attr('summ')),
            bn = parseInt($(b).attr('summ'));
        if(an < bn) return 1;
        if(bn > an) return 0;
        return 0;
    });
     
    elements.detach().appendTo(target);

	})
	$('#preloaders').find('img').fadeOut().end().delay(400).fadeOut('slow');
	


});

