$(document).ready(function() {
  
    var slidesWrapperWidth, slideWidth, slideNumber, sliderInterval;
    //animation controls
    var pause = 5000;
    var transition = 500;
  
    function refreshVars() {
        slideNumber = $('#slidewrapper li').length;
        slideWidth = $('#viewport').outerWidth();
        slidesWrapperWidth = slideWidth * slideNumber;
    
        $('#slidewrapper').css("width", slidesWrapperWidth+'px');
        $('#slidewrapper li').css('width', slideWidth+'px');
        $('#slidewrapper').css('left', - slideWidth);
    }//end refreshVars
    refreshVars();
  
    $('#slidewrapper li:last-child').prependTo('#slidewrapper');
    
    function ShowNextSlide() {
        $('#slidewrapper').animate({
            marginLeft: - slideWidth
        }, transition, function () {
            $('#slidewrapper li:first-child').appendTo('#slidewrapper');
            $('#slidewrapper').css('marginLeft', '');
        });//end animate
    }//end show next slide
 
    function ShowPrevSlide() {   
            $('#slidewrapper').animate({
            marginLeft: + slideWidth
        }, transition, function () {
            $('#slidewrapper li:last-child').prependTo('#slidewrapper');           
            $('#slidewrapper').css('marginLeft', '');
        });//end animate     
    
    }//end show prev slide
  
    $('#next-btn').on('click',ShowNextSlide);
    $('#prev-btn').on('click',ShowPrevSlide);
  
    //autoplay 
    function startSlider() {
        sliderInterval = setInterval(ShowNextSlide, pause)
    }

    startSlider();

    $('#viewport').mouseenter(function() {
        clearInterval(sliderInterval);
    });
    $('#viewport').mouseleave(startSlider);
}); //end ready