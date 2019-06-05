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

    $('#modal-phone').mask('+7(999) 999-9999');
    $('#footer-phone').mask('+7(999) 999-9999');

    // Заполнение формы

    // $("#modal-email").on('keyup', function () {
    //     var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    //     var mail = $('#modal-email');
    //     if (mail.val().search(pattern) > -1)
    //     {
    //         $(this).addClass('ready');
    //     }else{
    //         $(this).addClass('error');
    //     }
    // });
});