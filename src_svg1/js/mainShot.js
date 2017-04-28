$(document).ready(function(){
	$('path').click(function(){
		$('#block3').fadeIn();
});
	$('tspan').click(function(){
		$('#block3').fadeIn();
});
	
	$('.cross').click(function(){
		$('#block3').fadeOut();
		$(' #4v4').removeClass('fil4v4');
		$('#4v4').addClass('fil4');
		//$(' path').toggleClass('fil4v4','fil4');

		$(' #tspan78').css({
    	'fill':'black',                       
    	'font-size': '10px'
    }); 

	});
/*	});*/

	$('path').mouseenter(function(){
		$(this).removeClass('fil4');
		$(this).addClass('fil4v4');
		//$(' #4v4').toggleClass('fil4','fil4v4');
		$(' #tspan78').css({
    	'fill':'yellow',
    	'font-size':'17px'
    });

	});


$('path').mouseout(function(){
		$(this).removeClass('fil4v4');
		$(this).addClass('fil4');
		//$(this).toggleClass('fil4v4','fil4');

$(' #tspan78').css({
    	'fill':'black',
    	'font-size': '10px'
    });

	});
$(' tspan').mouseenter(function(){
		$('#4v4').removeClass('fil4');
		$('#4v4').addClass('fil4v4');
		//$(' #4v4').toggleClass('fil4','fil4v4');

		$(' #tspan78').css({
    	'fill':'yellow',
    	'font-size': '17px'
    });


	});

	

});