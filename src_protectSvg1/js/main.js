$(document).ready(function(){
	

	$('#4v4 ,#tspan78').on('click',function(){
		$('#block3').fadeIn();
	});
	
	$('.cross').click(function(){
		$('#block3').fadeOut();
		
	});


	$('#4v4, #tspan78').on('mouseenter',function(){
		$('#4v4').removeClass('fil4');
		$('#4v4').addClass('fil4v4');
		//$(' #4v4').toggleClass('fil4','fil4v4');
		$('#tspan78').addClass('fontYellow');
		/*css({
			'fill':'yellow',
			'font-size':'15px'
		});*/

	});


	$('#4v4').on('mouseout',function(){
		$('#4v4').removeClass('fil4v4');
		$('#4v4').addClass('fil4');
		


		$('#tspan78').addClass('fontBlack');
		/*css({
			'fill':'black',
			'font-size': '10px'
		});*/

	});


	

});

