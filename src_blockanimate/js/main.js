$(document).ready(function(){
	$('.box4').click(function(){
		$('.capsAndDish').animate({marginLeft:0},800);
		$('.box-opacity').animate({left:0,opacity:0.9},600);
		$('.inner_anim_left').animate({left:0,opacity:0.9},800);
  
		$('.titleFade').animate({top:0},400);

	});
	/*$('#cross').click(function(){
		$('.topNavUpperAside').animate({right:-280});

	});*/
});