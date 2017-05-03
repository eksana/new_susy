/*$(document).ready(function(){
$('.newMap').each(function(){
$('.newMap').on('click',function(){
$(this).animate({left: "-200px", top: "200px"}, 500);


$('.descr').fadeIn();


});
});
	
});*/

/*$(document).ready(function(){
	$('.map1').on('click',function(){
		$(this).animate({left: "-200px", top: "200px"}, 500);
		$('.descr1').fadeIn();

	});
	$('.map2').on('click',function(){
		$(this).animate({left: "-200px", top: "200px"}, 500);
		$('.descr2').fadeIn();

	});

});*/
/*$(document).ready(function(){
	$('.wrapForEach').on('click',function(){
		$(this).find('li').eq(0).animate({left: "-200px", top: "200px"}, 500);
		$(this).find('li').eq(1).fadeIn();
		

	});
});*/
$(document).ready(function(){

	$('.wrapForEach').on('click',function(event){
		var $f=$(this).find('li').eq(0);
		var $s=$(this).find('li').eq(1);
		$f.addClass('mapScale').animate({left: "-400px", top: "0"}, 500).fadeOut();
		$s.fadeIn();
		
		});
	
	$('#cross1').on('click',function(event){
		event.stopPropagation();
		$(this).parent().fadeOut();
		$('.map1').removeClass('mapScale').animate({left: "0", top: "0"}, 500).fadeIn();
	});
	$('#cross2').on('click',function(event){
		event.stopPropagation();
		$(this).parent().fadeOut();
		$('.map2').removeClass('mapScale').animate({left: "130px", top: "0"}, 500).fadeIn();
	});
	$('#cross3').on('click',function(event){
		event.stopPropagation();
		$(this).parent().fadeOut();
		$('.map3').removeClass('mapScale').animate({left: "230px", top: "0"}, 500).fadeIn();
	});
	
});