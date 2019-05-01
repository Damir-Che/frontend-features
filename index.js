

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
// добовление товаров

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
	
	// поиск

	            $("#search").keyup(function(){
                _this = this;
                $.each($(".container .product_1"), function() {
                    if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                       $(this).hide();
                    else
                       $(this).show();                
                });
            });

});

