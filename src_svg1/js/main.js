$(document).ready(function(){
	$('#test3').click(function(){
		$('#block3').fadeIn();
});
	$('#tspan4597').click(function(){
		$('#block3').fadeIn();
});
	
	$('#block3').click(function(){
		$('#block3').fadeOut();
		$(' #test3').removeClass('fil30');
		$('#test3').addClass('fil3');

		$(' #tspan4597').css({
    	'fill':'red',
    	'font-size': '5px'//,
    //'transition': 'all 1s'
    });

	//});
	});

	/*$('#test3').onmouseenter(function(){
		$('#test3').removeClass('fil3');
		$('#test3').addClass('fill00');

	});*/

$('#test3').mouseenter(function(){
		$(' #test3').removeClass('fil3');
		$('#test3').addClass('fil30');

		$(' #tspan4597').css({
    	'fill':'yellow',
    	'font-size': '10px'//,
    //'transition': 'all 1s'
    });


	});


$('#test3').mouseout(function(){
		$(' #test3').removeClass('fil30');
		$('#test3').addClass('fil3');

$(' #tspan4597').css({
    	'fill':'red',
    	'font-size': '5px'//,
    //'transition': 'all 1s'
    });

	});
$(' #tspan4597').mouseenter(function(){
		$(' #test3').removeClass('fil3');
		$('#test3').addClass('fil30');

		$(' #tspan4597').css({
    	'fill':'yellow',
    	'font-size': '10px'//,
    //'transition': 'all 1s'
    });


	});

	

});
	
	