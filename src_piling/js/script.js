$(document).ready(function(){
    DialogHandler();
    FormsHandler();
    CustomHandler();
});

var _paq = _paq || [];
var fdata = {vid:null,srvid:5,srcid:null,additional:null,debug:0};

isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

var DialogHandler = function() {
    $('.open-callback').click(function(e) {
        e.preventDefault();

        var $modal = $('#modal-callback');
        $modal.find('#modal-title').text( $(this).data('title') );
        $modal.find('#modal-subtitle').text( $(this).data('subtitle') );

        var btn = '<i class="icon '+  $(this).data('icon') +'"></i>' + $(this).data('btn');
        $modal.find('#modal-btn').html( btn );
        $modal.find('#modal-additional').val( $(this).data('additional') );

        if ($(this).data('btn') == 'Получить каталог')
        {
            $('.only-download').show();
            $('.only-no-download').hide();
            $('.only-download input').removeAttr('readonly');
        }
        else
        {
            $('.only-download').hide();
            $('.only-no-download').show();
            $('.only-download input').attr('readonly','readonly');
        }

        var goal = $(this).data('goal');
        if (goal)
        {
            try {
                yaCounter25681949.reachGoal(goal);
            }catch (e){}
        }

        $modal.modal('show');
    });


    $('.goal-fillform input[name=name]').one('keyup', function(){
        var goal = $(this).parents('.goal-fillform').data('goal');
        try {
            yaCounter25681949.reachGoal(goal);
        }catch (e){}
    })


    $('.submit-form').click(function(e){
        e.preventDefault();

        if ($(this).data('btn') == 'Получить каталог')
        {
            $('.only-download').show();
            $('.only-no-download').hide();
        }
        else
        {
            $('.only-download').hide();
            $('.only-no-download').show();
        }

        if ($(this).attr('disabled') != undefined)
            return;

        $(this).parents('form').submit();
    })
}

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

var FormsHandler = function() {

    $('.btn-group input').bind('click keyup',function(){
        $(this).removeClass('error').parent().removeClass('error');
    })

    $('.order-form, .order-form2').ajaxForm({
        url:           'order.php',
        beforeSubmit:  before_send,
        success:       after_send
    });


    function before_send(formData, jqForm, options) {
        $('.btn-group .error').removeClass('error').parent().removeClass('error');

        var is_error = false;

        $.each(formData, function(idx, el){
            var $elem = jqForm.find( 'input[name=' + el.name + ']' );

            if ( (el.type != 'hidden' && !el.value && !$elem.attr('readonly'))
                || (el.name=='email' && !$elem.attr('readonly') && !validateEmail(el.value)) )
            {
                if ( $elem.hasClass('placeholder')) // ie
                {
                    $elem.addClass('error').parent().addClass('error');
                }
                else
                {
                    $elem.addClass('error').parent().addClass('error');
                    $elem.focus();
                }

                is_error = true;
                return false;
            }
        });

        if (is_error)
            return false;

        var phone = jqForm.find('input[name=phone-code]').val() + jqForm.find('input[name=phone-number]').val();
        $('input[type=submit], .submit-form').attr('disabled','disabled');
        formData.push({ "name": "phone", "value": phone });

        try {
            yaCounter25681949.reachGoal('spasibo');
        }
        catch ($e) {}

        //jqForm.find('input[type=text].has-error').val('');
        $('#modal-callback').modal('hide');
        $('#modal-result').modal('show');
        $('input[type=submit], .submit-form').removeAttr('disabled');

        return true;
    }

    function after_send(responseText, statusText, xhr, $form)  {

    }
};


var CustomHandler = function() {
    if( !isMobile )
    {
        $('.scrollTo').click(function(e){
            $('html,body').scrollTo(this.hash, this.hash);
            e.preventDefault();
            return false;
        });

    }

    if (!isMobile)
        $('a[href*=tel]').removeAttr('href');

    $('input[name="phone-code"]').mask("999");
    $('input[name="phone-number"]').mask("999-99-99");
    $("input[name=phone-code]").keyup(function(){
        var inputlength = $(this).val();
        if( /^\d+$/.test(inputlength))
            $(this).next('input[type="text"]').focus();
    });

    $.getScript('//api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU&onload=initYM');

    //if ($('html').hasClass('gt-ie8') && !isMobile)
    //    new WOW().init();
}

function initYM () {
    var myMap = new ymaps.Map("map", {
            center: [55.685124,37.295543],
            zoom: 16
        }),

        myPlacemark = new ymaps.Placemark([55.685142,37.302848], {

        }, {
            iconImageHref: 'img/map_marker.png',
            iconImageSize: [53, 64],
            iconImageOffset: [-10, -70]
        });

    myMap.controls.add(
        new ymaps.control.ZoomControl()
    );

    myMap.geoObjects.add(myPlacemark)
}