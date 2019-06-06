$(document).ready(function(){
    // действия для кнопок
    $('#know_more').click(function(){
        show_popup();
    });

    $('#get_presentation').click(function(){
        show_popup();
    });

    $('#req-call').click(function(){
        show_popup2();
        console.log("cklick");
    });

    $('#popup-close').click(function(){
        hide_popup();
    });

    $('#popup-close2').click(function(){
        hide_popup2();
    });

    $('#popup_bg').click(function(){
        hide_popup();
        hide_popup2();
    });
});
 
// показать попап
function show_popup(){
    $('body').css({
        'overflow': 'hidden'
    });

    $('.popup_bg').fadeIn(500);
    $('.div_popup').fadeIn(500);
}

function show_popup2(){
    $('body').css({
        'overflow': 'hidden'
    });

    $('.popup_bg').fadeIn(500);       
    $('.div_popup2').fadeIn(500);
}
 
// скрыть попап
function hide_popup(){
    $('body').css({
        'overflow': 'auto'
    });

    $('.popup_bg').fadeOut(500);        
    $('.div_popup').fadeOut(500);
}

function hide_popup2(){
    $('body').css({
        'overflow': 'auto'
    });

    $('.popup_bg').fadeOut(500);        
    $('.div_popup2').fadeOut(500);
}