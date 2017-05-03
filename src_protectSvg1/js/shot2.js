$(document).ready(function(){
	var $Pas=$('#tspan66'),  $Fed=$('#tspan70'),  $Kst=$('#tspan74'),  $Bur=$('#tspan78'),  $Fat=$('#tspan82'),  $Chep=$('#tspan86'),  $Pro=$('#tspan90'),  $Pol=$('#tspan94'),  $Kon=$('#tspan98'),  $Fil=$('#tspan102'),
	 $Chy=$('#tspan106'),  $Mok=$('#tspan110'),  $Sel=$('#tspan114');
	 var $arr=[$('#tspan78'),$('#tspan82'),$('#tspan66')];
	$('.fil').each(function(){
		$(this).click(function(){
		var $this=$('.fil').attr('-data');
		var $that=$('div.block').attr('-data');
		if($this==$that){
			$('div.block').fadeIn();
		}
	});

	});

	$('.cross').click(function(){
		$('.block').fadeOut();
	});


	$('#tspan78,#tspan82,#tspan66,#tspan70,#tspan74,#tspan86,#tspan90,#tspan94,#tspan98,#tspan102,#tspan106,#tspan110,#tspan114').each(function(){
		
	$(this).on('mouseenter',function(){
		$(this).removeClass();
		$(this).addClass('fontYellow');
	});

	$('#tspan78,#tspan82,#tspan66,#tspan70,#tspan74,#tspan86,#tspan90,#tspan94,#tspan98,#tspan102,#tspan106,#tspan110,#tspan114').on('mouseout',function(){
		
		$(this).removeClass();
		$(this).addClass('fontBlack');
	});
});



$('#4v4, #tspan78').on('mouseenter',function(){
		$('#4v4').removeClass('fil4');
		$('#4v4').addClass('fil4v4');
		
	});


	$('#4v4').on('mouseout',function(){
		$('#4v4').removeClass('fil4v4');
		$('#4v4').addClass('fil4');
		
	});

});