$('#password').focusin(function() {
    $('.to-login').addClass('up')
});
$('#password').focusout(function() {
    $('.to-login').removeClass('up')
});
$(document).on("mousemove", function( event ) {
    var dw = $(document).width() / 15;
    var dh = $(document).height() / 15;
    var x = event.pageX/dw;
    var y = event.pageY/dh;
    $(".eye-ball").css( {
        width:x,

        height:y
    });
});
$('.login-click').click(function(){
    $('.to-login').addClass('wrong-entry');
    setTimeout(function(){
        $('.to-login').removeClass('wrong-entry');
    },3000);
});
