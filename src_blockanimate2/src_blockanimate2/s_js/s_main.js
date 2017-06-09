

$(document).ready(function(){
	$('.box4').click(function(){
		$('.box').removeClass('active');
		$(this).addClass('active');
		$('.dish').fadeIn();
		$('.dish2').fadeOut();
		});
	$('.box3').click(function(){
		$('.box').removeClass('active');
		$(this).addClass('active');
		$('.dish').fadeOut();
		$('.dish2').fadeIn();
		});
});
