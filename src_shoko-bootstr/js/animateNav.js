$(document).ready(function(){
	$('#pie').click(function(){
		$('.topNavUpperAside').animate({right:0});

	});
	$('#cross').click(function(){
		$('.topNavUpperAside').animate({right:-280});

	});
});

/*$(document).ready(function(){
	$('.img_logo').click(function(){
		$('.topNavUpperAside').animate({right:120},500);

	});
});*/