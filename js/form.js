$(document).ready(function(){
    $('#modal-send').on('click enterKey', function(){
        var modalData = {'name': $('#modal-name').val(),
                         'phone': $('#modal-phone').val(),
                         'email': $('#modal-email').val()};
        $.ajax({
            url: 'https://.../send.php',
            type: 'POST',
            data: modalData,
            success: function(res){
            console.log(res);
            }
        });
    });

    $('#footer-send').on('click enterKey', function(){
        var modalData = {'name': $('#footer-name').val(),
                         'phone': $('#footer-phone').val(),
                         'email': $('#footer-email').val()};
        $.ajax({
            url: 'https://.../send.php',
            type: 'POST',
            data: modalData,
            success: function(res){
            console.log(res);
            }
        });
    });

    $('#req-call-button').on('click enterKey', function(){
        var modalData = {'name': $('#req-name').val(),
                         'phone': $('#req-phone').val()};
        $.ajax({
            url: 'https://.../send.php',
            type: 'POST',
            data: modalData,
            success: function(res){
            console.log(res);
            }
        });
    });

    $('#modal-phone').mask('+7(999) 99-99-999');
    $('#footer-phone').mask('+7(999) 99-99-999');
    $('#req-phone').mask('+7(999) 99-99-999');
});