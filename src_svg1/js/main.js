$(document).ready(function(){
	$('#4v4').click(function(){
		$('#block3').fadeIn();
});
	$('#tspan78').click(function(){
		$('#block3').fadeIn();
});
	
	$('.cross').click(function(){
		$('#block3').fadeOut();
		$(' #4v4').removeClass('fil4v4');
		$('#4v4').addClass('fil4');
		//$(' #4v4').toggleClass('fil4v4','fil4');

		$(' #tspan78').css({
    	'fill':'black',                       
    	'font-size': '10px'
    }); 

	});
/*	});*/

	$('#4v4').mouseenter(function(){
		$('#4v4').removeClass('fil4');
		$('#4v4').addClass('fil4v4');
		//$(' #4v4').toggleClass('fil4','fil4v4');
		$(' #tspan78').css({
    	'fill':'yellow',
    	'font-size':'17px'
    });

	});


$('#4v4').mouseout(function(){
		$('#4v4').removeClass('fil4v4');
		$('#4v4').addClass('fil4');
		//$(' #4v4').toggleClass('fil4v4','fil4');

$(' #tspan78').css({
    	'fill':'black',
    	'font-size': '10px'
    });

	});
$(' #tspan78').mouseenter(function(){
		$('#4v4').removeClass('fil4');
		$('#4v4').addClass('fil4v4');
		//$(' #4v4').toggleClass('fil4','fil4v4');

		$(' #tspan78').css({
    	'fill':'yellow',
    	'font-size': '17px'
    });


	});

	

});
	
	