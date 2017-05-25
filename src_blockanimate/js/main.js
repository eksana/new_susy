$(document).ready(function(){
	$('.box4').click(function(){
		
		$('.box-opacity').css({opacity:0.9}).delay(200).animate({left:0});
		$('.titleFade').animate({top:0},400);
		$('.capsAndDish').delay(1000).animate({marginLeft:0});
		$('.inner_anim_left').delay(1000).animate({left:0,opacity:0.9});
// $('.box-opacity,.titleFade,.capsAndDish,.inner_anim_left').fadeOut(3000);
		});

	$('.box3').click(function(){
	$('.box').removeClass('active');
	//$('.posit').fadeIn();
	$(this).addClass('active');
		/*$('.box-opacity,.titleFade,.capsAndDish,.inner_anim_left').fadeIn();*/
		$('.box-opacity').css({opacity:0.9}).delay(200).animate({left:0});
		$('.titleFade').animate({top:0},400);
		$('.capsAndDish').delay(1000).animate({marginLeft:0});
		$('.inner_anim_left').delay(1000).animate({left:0,opacity:0.9});
	
		});
	
});