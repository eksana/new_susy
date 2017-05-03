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

		/*$(' #tspan78').css({
    	'fill':'black',                       
    	'font-size': '10px'
    }); */
    function csBlack(id){
	$('path').css({
    	'fill':'black',
    	'font-size': '10px'
    });
    return id;
}

	});
/*	});*/

	$('path').mouseenter(function(){
		$(this).removeClass('fil4');
		$(this).addClass('fil4v4');
		
csYellow(' #tspan78');
	});


$('path').mouseout(function(){
		$(this).removeClass('fil4v4');
		$(this).addClass('fil4');
		
    csBlack(' #tspan78');

	});
$(' tspan').mouseenter(function(){
		$('#4v4').removeClass('fil4');
		$('#4v4').addClass('fil4v4');
		
csYellow(' #tspan78');

	});

	

//});


function csBlack(id){
	$('id').css({
    	'fill':'black',
    	'font-size': '10px'
    });
    return id;
}
function csYellow(id){
	$('id').css({
    	'fill':'yellow',
    	'font-size': '17px'
    });
    return id;
}
});