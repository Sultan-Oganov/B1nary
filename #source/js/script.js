//ФУЛЛ СКРИНОВЫЙ ЭКРАН ДЛЯ ЭКСПЛОРЕРА 11
$(window).resize(function(event) {
	mainscreen();
});

function mainscreen(){
		var h=$(window).outerHeight();
	$('.mainscreen').css('min-height',h);
}
	mainscreen();


//ФИЛЬТРАЦИЯ КАРТИНОК

$('.filter__item').click(function(event) {
		var i=$(this).data('filter');
	// console.log(i);
	if (i==1) {
		$('.portfolio__column').show();
	}else{
		$('.portfolio__column').hide();
		$('.portfolio__column.f_'+i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});