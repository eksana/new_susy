$(document).ready(function(){
	$('#8v8').click(function(){
		$('#blockFat').fadeIn();
});
	$('#tspan82').click(function(){
		$('#blockFat').fadeIn();
});
	
	$('.cross').click(function(){
		$('#blockFat').fadeOut();
		$(' #8v8').removeClass('fil4v4Fat');
		$('#8v8').addClass('fil8');
		

		$(' #tspan82').css({
    	'fill':'black',                       
    	'font-size': '10px'
    }); 

	});
/*	});*/

	$('#8v8').mouseenter(function(){
		$('#8v8').removeClass('fil8');
		$('#8v8').addClass('fil4v4Fat');
		
		$(' #tspan82').css({
    	'fill':'blue',
    	'font-size':'13px'
    });

	});


$('#8v8').mouseout(function(){
		$('#8v8').removeClass('fil4v4Fat');
		$('#8v8').addClass('fil8');
		

$(' #tspan82').css({
    	'fill':'black',
    	'font-size': '10px'
    });

	});
$(' #tspan82').mouseenter(function(){
		$('#8v8').removeClass('fil8');
		$('#8v8').addClass('fil4v4Fat');
		

		$(' #tspan82').css({
    	'fill':'blue',
    	'font-size': '13px'
    });


	});

	

});
	
	