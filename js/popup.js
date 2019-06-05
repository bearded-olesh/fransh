$(document).ready(function(){
    // действия для кнопок
    $('#know_more').click(function(){
        show_popup();
    });

    $('#get_presentation').click(function(){
        show_popup();
    });

    $('#popup-close').click(function(){
        hide_popup();
    });

    $('#popup_bg').click(function(){
        hide_popup();
    });
});
 
// показать попап
function show_popup(){

    $('.popup_bg').css({
        'display': 'block'
    });

    $('.div_popup').css({
        'display': 'block'
    });

    $('body').css({
        'overflow': 'hidden'
    });
    // плавно показываем фон и попап
    $('.popup_bg').fadeIn(500);       
    $('.div_popup').fadeIn(500);
}
 
// скрыть попап
function hide_popup(){
    $('body').css({
        'overflow': 'auto'
    });
    // плавно скрываем попап и фон
    $('.popup_bg').fadeOut(500);        
    $('.div_popup').fadeOut(500);
}