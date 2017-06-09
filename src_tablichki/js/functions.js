$(document).ready(function() {

	//E-mail Ajax Send
	$("#zvon").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Р—Р°СЏРІРєР° РѕС‚РїСЂР°РІР»РµРЅР°!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function(){
var iforma = 0
var irazmer = 0
var icolor = 0
$(".form-div:not(:first)").on("click" , function () {
    if (iforma == 0) {
        //alert("СЃСЂР°Р±РѕС‚Р°РµС‚ yaCounter42982674.reachGoal('setform');");
    yaCounter42982674.reachGoal('setform');
    }
   iforma++
});
$(".increased").on("click" , function () {
    if (irazmer == 0) {
        //alert("СЃСЂР°Р±РѕС‚Р°РµС‚ yaCounter42982674.reachGoal('setsize');");
    yaCounter42982674.reachGoal('setsize');
    }
   irazmer++
});
$("table.color tbody tr td span:not(:first)").on("click" , function () {
    if (icolor == 0) {
        //alert("СЃСЂР°Р±РѕС‚Р°РµС‚ yaCounter42982674.reachGoal('setcolor');");
    yaCounter42982674.reachGoal('setcolor');
    }
   icolor++
});
$("div.button.add_basket").on("click" , function () {
    //alert("СЃСЂР°Р±РѕС‚Р°РµС‚ yaCounter42982674.reachGoal('quick-order-button');");
    yaCounter42982674.reachGoal('quick-order-button');
});
$("form#zvon .button").on("click" , function () {
    if ($(".button").eq(0).text() == "Р—Р°РєР°Р·Р°С‚СЊ") {
    //alert("СЃСЂР°Р±РѕС‚Р°РµС‚ yaCounter42982674.reachGoal('checkout');");
    yaCounter42982674.reachGoal('checkout');
}
});
});

function war4(){
$("#form_raz").css("background-color","rgba(0,0,0,0)")
}
function war3(){
    $("#form_raz").css("background-color","#FFEB00")
    setTimeout(war4, 1000);
}
function war2(){
$("#form_raz").css("background-color","rgba(0,0,0,0)")
    setTimeout(war3, 1000);
}
function war(){
    $('html, body').animate({ scrollTop: $("main.main").offset().top }, 1000);
    $("#form_raz").css("background-color","#FFEB00")
    setTimeout(war2, 1000);
}


function selectSampler(){
    var img   = $('.sampler .img img');
    var src   = 'img/sampler/';
    var type  = 'standard';
    var color = 'blue';
    var form  = '3';
    var material = 0, addadd = 0, addmount = 0, colorc = 0;
    //Р¦РІРµС‚
    $('.color span').click(function(){
        var coef = 0.5;
        if ($('.forms .act').hasClass('increased')) coef = 1;
        if ( $(this).parents('tr').data('type')=='light' && $('.click').parents('tr').data('type')=='standard' ) updatePrice( roundNumb($('.form .form-div.active img').data('price')*coef) );
        else if ( $(this).parents('tr').data('type')=='standard' && $('.click').parents('tr').data('type')=='light' ) updatePrice( '-'+roundNumb($('.form .form-div.active img').data('price')*coef) );
        $('.color tr td span').removeClass('click');
        $(this).hasClass('click') ? $(this).removeClass('click') : $(this).addClass('click');
        type = $(this).parent('td').parent('tr').data('type');
        color = $(this).data('color');
        img.attr( "src", src+type+"/"+color+"/"+form+".png" );
        var type1 = $(this).parent('td').parent('tr').find('td:first-child .st').text().toLowerCase();
        var colorName = $(this).data('name');
        $('.characteristic tr:nth-child(2) td:last-child span').text( ' '+colorName+' ('+type1+')' );
        colorc++;
        if ($(this).parents('tr').data('type')=='standard') colorc=0;
        //console.log( $('.color tr:last-child td[colspan=3] s').text().substr(4,4) );
    });
    //Р¤РѕСЂРјР°
    $('.form .form-div').click(function () {
        var prevForm = parseInt($('.form .form-div.active img').data('price'));
        $('.form div').removeClass('active');
        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
        form = $(this).find('img').data('form');
        img.attr( "src", src+type+"/"+color+"/"+form+".png" );
        var size = $(this).find('span').text();
        var sizeName = $(this).parents('.form').find('.act>h6').text().toLowerCase();
        $('.characteristic tr:nth-child(1) td:last-child span').text( ' '+size+' ('+sizeName+')' );
        var p = $('.forms>div.act').data('p');
        if (colorc > 0 || material>0 || addadd>0 || addmount>0) {
            var coef = 1;
            var ths = $(this).find('img').data('price');
            if (colorc > 0 ) coef+=0.5;
            if (material > 0 ) coef+=0.6;
            if (addadd > 0 && $('.e1').hasClass('active') ) coef+=0.5;
            if ($('.forms .act').hasClass('increased')) {
                coef *= 2;
                updatePrice( (parseInt(ths*coef)) - roundNumb(parseInt(prevForm*coef)) );
                if ( (prevForm*coef)%10 > 0 && (prevForm*coef)%10 < 5 ) updatePrice(-10);
                increased();
            }
            else if ($('.form .forms .act').hasClass('standard')) {
                updatePrice( (parseInt(ths*coef)) - roundNumb(parseInt(prevForm*coef)) );
                if ((prevForm*coef)%10 > 0 && (prevForm*coef)%10 < 5 ) updatePrice(-10);
                lightPrice();
                materialPrice();
                laminPrice();
            }
        }
        else {
            calcPrice( $(this).find('img').data('price'), p);
            if ($('.forms>div.act').hasClass('increased')) increased();
        }
        //console.log((prevForm*coef)%10);
    });
    //РњР°С‚РµСЂРёР°Р»
    $('.material .radio').on("change", function(){
        var coef = 0.6;
        if ($('.forms .act').hasClass('increased')) coef = 1.2;
        var info = $(this).parent('td').find('label').find('strong').text();
        info = info.substr(0, info.length - 5);
        $('.characteristic tr:nth-child(3) td:last-child span').text( ' '+info );
        if ( $(this).attr('id')=='plastik' && material!=0 ) updatePrice( '-'+roundNumb($('.form .form-div.active img').data('price')*coef) );
        else if( $(this).attr('id')=='komposit' ) updatePrice( roundNumb($('.form .form-div.active img').data('price')*coef) );
        material++;
        if ($(this).attr('id')=='plastik') material=0;
    });
    //РќР°РґРїРёСЃСЊ
    $('.text-sampler input').keyup(function(){
        var value = $(this).val();
        $('.characteristic tr:nth-child(4) td:last-child span').text( ' '+value );
    });
    //Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ
    $('.additionally .add input').on('change', function(){
        var coef = 0.5;
        if ($('.forms .act').hasClass('increased')) coef = 1;
        var ths = $(this).parent('.add');
        if ( ths.hasClass('e1') && !$('.e1').hasClass('active') ) updatePrice( roundNumb($('.form .form-div.active img').data('price')*coef));
            else if ( ths.hasClass('e1') && $('.e1').hasClass('active') ) updatePrice( '-'+roundNumb($('.form .form-div.active img').data('price')*coef) );
        if ( ths.hasClass('e2') && !$('.e2').hasClass('active') ) updatePrice( '100' );
            else if ( ths.hasClass('e2') && $('.e2').hasClass('active') ) updatePrice( '-100' );
        if ( ths.hasClass('e3') && !$('.e3').hasClass('active') ) updatePrice( '50' );
            else if ( ths.hasClass('e3') && $('.e3').hasClass('active') ) updatePrice( '-50' );
        if ( ths.hasClass('active') ) {
            ths.removeClass("active");
            if ( ths.hasClass('e1')) $(".additionally-characteristic tr:first-child i").removeClass('added').addClass('not-added');
            else if ( ths.hasClass('e2')) $('.additionally-characteristic tr:nth-child(2) i').removeClass('added').addClass('not-added');
            else $('.additionally-characteristic tr:nth-child(3) td:first-child i').removeClass('added').addClass('not-added');
        }
        else  {
            ths.addClass("active");
            if ( ths.hasClass('e1') ) $('.additionally-characteristic tr:nth-child(1) i').removeClass('not-added').addClass('added');
            else if ( ths.hasClass('e2') ) $('.additionally-characteristic tr:nth-child(2) i').removeClass('not-added').addClass('added');
            else $('.additionally-characteristic tr:nth-child(3) i').removeClass('not-added').addClass('added');
        }
        addadd++;
        if (!$('.e1').hasClass('active')) addadd=0;
    });
    //РљСЂРµРїР»РµРЅРёРµ
    $('.additionally table input[name="mount"]').on("change", function(){
        var fr = $(this).next('label').text().toLowerCase() ;
        $('.additionally-characteristic tr:nth-child(4) td:last-child').text('РљРѕРјРїР»РµРєС‚ РєСЂРµРїР»РµРЅРёР№');
        if ( $('.additionally table input:checked').length > 1 ){
            $('.additionally table input[name="mount"]').prop( "checked", false );
            $(this).prop('checked',true);
            $('.additionally-characteristic tr:nth-child(4) td:last-child').text('РљРѕРјРїР»РµРєС‚ РєСЂРµРїР»РµРЅРёР№');
        }
        else if( !$(this).prop('checked') ) {
            updatePrice( '-50' );
            $('.additionally-characteristic tr:nth-child(4) td:first-child').find('i').addClass('not-added').removeClass('added');
            $('.additionally-characteristic tr:nth-child(4) td:last-child').text('РљРѕРјРїР»РµРєС‚ РєСЂРµРїР»РµРЅРёР№');
        }
        else{
            updatePrice(50);
            $('.additionally-characteristic tr:nth-child(4) td:first-child').find('i').addClass('added').removeClass('not-added');
            $('.additionally-characteristic tr:nth-child(4) td:last-child').text('РљРѕРјРїР»РµРєС‚ РєСЂРµРїР»РµРЅРёР№ '+fr);
        }
        addmount++;
    });
    //РЎС‚Р°РЅРґР°СЂС‚ РёР»Рё СѓРІРµР»РёС‡РµРЅРЅС‹Р№
    $('.form .forms>div').click(function(){
        var prevP = $('.forms>div.act').data('p');
        $('.forms>div').removeClass('act');
        var name = $(this).attr('class');
        $(this).hasClass('act') ? $(this).removeClass('act') : $(this).addClass('act');
        var j=1, k=0, i;
        for (i=1; i<4; i++){
            if (j==1) $('.form tr:nth-child('+j+') td:nth-child('+parseInt(i+1)+') .form-div span').text( sizes[name][k]+'СЃРј' );
            else $('.form tr:nth-child('+j+') td:nth-child('+i+') .form-div span').text( sizes[name][k]+'СЃРј' );
            if (i==3) {i=0;j++;};
            k++;
            if (k==12) break;
        }
        var sizeName = $(this).find('div>h6').text().toLowerCase();
        var size = $('.form .form-div.active span').text();
        $('.characteristic tr:nth-child(1) td:last-child span').text( ' '+size+' ('+sizeName+')' );
        var summ = $('.form .form-div.active img').data('price');

        if ( prevP!=$(this).data('p') ) {
            if (colorc > 0 || material > 0 || addadd > 0 || addmount > 0) {
                var coef = 1;
                var ths = $('.form .form-div.active img').data('price');
                if (colorc > 0 ) coef+=0.5;
                if (material > 0 ) coef+=0.6;
                if (addadd > 0 && $('.e1').hasClass('active') ) coef+=0.5;
                if ($(this).hasClass('increased')) {
                    updatePrice(roundNumb(ths*coef));
                    increased();
                }
                else if ($(this).hasClass('standard')) {
                    updatePrice('-'+roundNumb(ths*coef));
                    lightPrice();
                    materialPrice();
                    laminPrice();
                }
            }
            else {
                calcPrice(summ, $(this).data('p'));
                if ($(this).hasClass('increased')) increased();
            }
        }
    });
}
(function( $ ){

    $.fn.uncheckableRadio = function() {

        return this.each(function() {
            $(this).mousedown(function() {
                $(this).data('wasChecked', this.checked);
            });

            $(this).click(function() {
                if ($(this).data('wasChecked'))
                    this.checked = false;
            });
        });

    };

})( jQuery );
var sizes = {
    standard : ['70Г—30', '68С…34', '67С…32', '67С…32', '66С…34', '66С…34', '24С…24', '32С…38', '38С…26', '66С…22', '68С…18', '68С…18'],
    increased : ['96Г—46', '96Г—49', '96Г—48', '96Г—48', '96Г—52', '96Г—52', '38Г—36', '45Г—53', '53x36', '95x31', '95x25', '95x25']
}
function calcPrice( summ, p ){
    var currentPrice = $('#price');
    var price = roundNumb(parseInt( summ * parseInt(p) ));
    var priceText = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    currentPrice.html( priceText + '<em>СЂСѓР±</em>' );
    lightPrice();
    materialPrice();
    laminPrice();
}
function updatePrice( summ ){
    var currentPrice = $('#price');
    var price = roundNumb(parseInt( currentPrice.text().replace(' ','') ) + parseInt( summ ));
    var priceText = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    currentPrice.html( priceText + '<em>СЂСѓР±</em>' );
}
function lightPrice(){
    var currentPrice = parseInt($('.form .form-div.active img').data('price'));
    $('.color tr:last-child td[colspan=3] s').text( ' (+ '+roundNumb(currentPrice*0.5)+' СЂСѓР±.)' );
}
function materialPrice(){
    var currentPrice = parseInt($('.form .form-div.active img').data('price'));
    $('.material tr:last-child td s').text( ' (+ '+roundNumb(currentPrice*0.61)+' СЂСѓР±.)' );
}
function laminPrice(){
    var currentPrice = parseInt($('.form .form-div.active img').data('price'));
    $('.e1 s').text( ' (+ '+roundNumb(currentPrice*0.5)+' СЂСѓР±.)' );
}
function increased() {
    var currentPrice = parseInt($('.form .form-div.active img').data('price'));
    $('.color tr:last-child td[colspan=3] s').text( ' (+ '+roundNumb(currentPrice)+' СЂСѓР±.)' );
    $('.material tr:last-child td s').text( ' (+ '+roundNumb(currentPrice*1.2)+' СЂСѓР±.)' );
    $('.e1 s').text( ' (+ '+roundNumb(currentPrice)+' СЂСѓР±.)' );
}
function roundNumb( numb ){
    return (Math.round(parseInt(numb) / 10 ))+'0';
}
function PopUpShow(){
    $(".call-block").addClass('show');
    $(".wrap").addClass('show');
    $(".wrap").width( $(document).width() );
}
function PopUpHide(){
    $(".call-block").removeClass('show');
    $(".wrap").removeClass('show');
}
function PopUpHide1(){
    $(document).click(function (e) {
        if ( e.target==$('.hint-box img')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box table')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box table td')[1] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box table td')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box table td s')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box table td em')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box table td p')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
        if ( e.target==$('.hint-box table td span')[0] ){
            $(".hint-box").removeClass('show');
            $(".wrap").removeClass('show');
        }
    });
}
function numbOrder() {
    $('.minus').click(function () {
        //console.log('here');
        var ths = $(this).parent('td').find('s');
        var price = parseInt($('.order .price').text());
        if ( ths.text() > 1 ) {
            ths.text( parseInt(ths.text()) - 1 );
            $('.order .total-sum span').text( parseInt(ths.text())*price );
            $('.order .sum').text( parseInt(ths.text())*price );
            updateTotalPrice( '-'+price );
        }
    });
    $('.plus').click(function () {
        var ths = $(this).parent('td').find('s');
        var price = parseInt($('.order .price').text());
        if ( ths.text() < 10 ) {
            ths.text(parseInt(ths.text()) + 1);
            $('.order .total-sum span').text( parseInt(ths.text()) * price );
            $('.order .sum').text( parseInt(ths.text()) * price);
            updateTotalPrice( price );
        }
    });
}
function chooseDelivery() {
    $('.way_delivery input.radio').on("change",function () {
        //console.log($(this).val());
        $('.delivery-price span').text( $(this).val() );
        updateTotalPrice( $(this).val() );
    })
}
function updateTotalPrice( sum ) {
    var price = parseInt( $('.order .total-sum1 span').text().replace(' ','') ) + parseInt( sum );
    var priceText = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
    $('.order .total-sum1 span').text( priceText );
}
function chooseSityStreet() {
    $('.cities-block li').click(function () {
        $('.cities.caret-down').html( $(this).text() + ' <i class="fa fa-caret-down" aria-hidden="true"></i>' );
    })
    $('.streets-block li').click(function () {
        $('.streets.caret-down').html( $(this).text() + ' <i class="fa fa-caret-down" aria-hidden="true"></i>' );
    })
}
var coeff = 1;
$(document).ready(function() {
        var elm = $('#all');
        coeff = $(window).width()/elm.width();
        if (coeff > 1) coeff = 1;
        if (coeff < 0.7) coeff = 0.7;
        console.log(coeff);
        if (coeff != 1.0) {
            if (navigator.userAgent.indexOf('Firefox') != -1) elm.css('boxShadow','none')
            $('html').css({
                'transform' : 'scale(' + coeff + ')',
                '-ms-transform' : 'scale(' + coeff + ')',
                '-webkit-transform' : 'scale(' + coeff + ')'/*,
                'zoom' : '' + coeff + ''*/
            });
        }
    
    $('.phone').mask('+7 (999) 999-99-99');
    $('.index').mask('999999');

    $('.address .button').click(function () {
        PopUpShow();
    });
    $('.wrap').click(function (event) {
        if ( event.target != $('.call-block')[0] ) PopUpHide();
        $("form div.h2zag").text("Р—РђРљРђР—РђРўР¬ Р—Р’РћРќРћРљ");
        $("form button.button").text("РџРµСЂРµР·РІРѕРЅРёС‚Рµ РјРЅРµ");
        $("#nameform").val("Р—Р°РєР°Р· Р·РІРѕРЅРєР°");
        $("#obrazec input").remove();
    });
    $('.call-block .close').click(function () {
        PopUpHide();
        $("form div.h2zag").text("Р—РђРљРђР—РђРўР¬ Р—Р’РћРќРћРљ");
        $("form button.button").text("РџРµСЂРµР·РІРѕРЅРёС‚Рµ РјРЅРµ");
        $("#nameform").val("Р—Р°РєР°Р· Р·РІРѕРЅРєР°");
        $("#obrazec input").remove();
    });
    $('.hint>b').click(function () {
        $(this).parent().find(".hint-box").addClass('show');
        $(".wrap").addClass('show');
        $(".wrap").width( $(document).width() );
    });
    $('.wrap').click(function () {
        $(".hint-box").removeClass('show');
        $(".wrap").removeClass('show');
    });
    $('.cities.caret-down').click(function () {
        $('.cities-block').show();
    });
    $('.streets.caret-down').click(function () {
        $('.streets-block').show();
    });
    $(window).click(function (e) {
        if ( e.target != $('.cities.caret-down')[0] ) $('.cities-block').hide();
        if ( e.target != $('.streets.caret-down')[0] ) $('.streets-block').hide();
        if ( e.target == $('.hint-box') || e.target == $('.hint-box img') || e.target == $('.hint-box table') || e.target == $('.hint-box em') || e.target == $('.hint-box u') || e.target == $('.hint-box td')){
            //console.log(e.target);
        }
        if ( e.target == $('.hint-box img') ){
        }
    });
    $('.hint-box').click(function () {
        $(this).removeClass('show');
        $(".wrap").removeClass('show');
        console.log('here');
    });
    $('.add_basket').click(function(){
        $("form div.h2zag").text("Р‘Р«РЎРўР Р«Р™ Р—РђРљРђР—");
        $("#nameform").val("Р‘С‹СЃС‚СЂС‹Р№ Р·Р°РєР°Р·");
        $("form button.button").text("Р—Р°РєР°Р·Р°С‚СЊ");
        $("#obrazec").html('<input id="tablichka" type="text" name="РўР°Р±Р»РёС‡РєР°" style="display: none;">');
        var ybox = $(".additionally-characteristic i span");
        var yn_box = $(".additionally-characteristic i");
        for (var i = 0; i < yn_box.length; i++) {
        	if ( yn_box.eq(i).attr("class") == "not-added" ) {
        		ybox.eq(i).text("вњ–")
        	} else {
        		ybox.eq(i).text("вњ”")
        	}
        }
        var forma1 = $(".characteristic").html();
        var forma2 = $(".additionally-characteristic").html();
        $("#tablichka").val(forma1+forma2);
        PopUpShow();
        /*$('header .basket a').html( $('header .basket a').html()+'<span class="item-quantity">1</span>' );
        $('.sampler .add_basket').addClass('active').html( '<i class="fa fa-check" aria-hidden="true"></i>' );
        $(this).fadeOut();
        $('#price').fadeOut();
        $('sampler').height(650);
        $('.hiden').fadeIn();*/
    });
    $('.hiden .bsk').click(function(){
        window.location.href='basket.html';
    });
    $('.hiden .button_red').click(function(){
        location.reload();
    });
    selectSampler();
    PopUpHide();
    PopUpHide1();
    lightPrice();
    materialPrice();
    laminPrice();
    numbOrder();
    chooseDelivery();
    chooseSityStreet();


    var topPos = $('.sampler').offset().top ;
    var hg = $(window).height();
    $(window).scroll(function() {
            var topS = $('.sampler').offset().top;
            var botF = $('.banner2').offset().top;
            var top = $(document).scrollTop();
            var bot = $(document).scrollTop()+hg;
            var botS = topS + 600;
        if (coeff > 0.96){
            if (top > topPos && botS < botF-25 && topS > topPos ) $('.sampler').removeClass('fixed-bottom').addClass('fixed');
                 else if (bot < botF && top > topPos ) $('.sampler').removeClass('fixed-bottom').addClass('fixed');
                 else if (top < topPos && bot < botF) $('.sampler').removeClass('fixed').removeClass('fixed-bottom');
                 else $('.sampler').removeClass('fixed').addClass('fixed-bottom');
        }
        else{
            if (bot < botF && top > topPos ) {$('.sampler').removeClass('fixed-bottom').addClass('fixed').css('top',top/coeff);}
            else if (top < topPos ) $('.sampler').removeClass('fixed').removeClass('fixed-bottom').css('top','5px');
            else if (bot > botF-100) $('.sampler').removeClass('fixed').addClass('fixed-bottom').css('top','initial');
        }

        /*
        else{
            if (top > topPos && botS < botF-29 && topS > topPos ) {
                $('.sampler').removeClass('fixed-bottom').css('top',(top-topPos+5)/coeff);}
            else if (bot < botF && top > topPos ) {$('.sampler').removeClass('fixed-bottom').css('top',(top-topPos+5)/coeff);}
            else if (top < topPos && bot < botF ) $('.sampler').removeClass('fixed').removeClass('fixed-bottom');
            else if (bot > botF-100) $('.sampler').removeClass('fixed').addClass('fixed-bottom').css('top','initial');
        }
         else{
         if (bot > botF-100 ) $('.sampler').removeClass('fixed-mob').addClass('fixed-bottom');
         else if (bot < botF && top > topPos ) $('.sampler').removeClass('fixed-bottom').addClass('fixed-mob');
         else if (bot < botF && top < topPos ) $('.sampler').removeClass('fixed-mob').removeClass('fixed-bottom');
         }
        */
    });
    

});




