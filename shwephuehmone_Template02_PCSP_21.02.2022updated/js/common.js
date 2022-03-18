$(function () {
    $('.nav').on('click', function () {
        var rightVal = 0;
        if ($(this).hasClass('hb-open')) {
            rightVal = -300;
            $(this).removeClass('hb-open');
        } else {
            $(this).addClass('hb-open');
        }

        $('#navi').stop().animate({
            right: rightVal
        }, 200);
    });
});