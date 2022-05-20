$(document).ready(() => {
    $('.cot2').addClass('trans');
    $('.card').addClass('height');
    $(window).scroll(() => {
        const fromtop = $(window).scrollTop();

        if (fromtop > 850) {
            $('.cot1').addClass('trans');
        }
        if (fromtop > 1220) {
            $('.flexes').addClass('trans1');
        }

        if (fromtop > 2750) {

            $('.footer').addClass('footerscale');
            $('.footh').animate({ 'opacity': '1' }, 3400);
            $('.lang').animate({ 'opacity': '1' }, 3400);
            $('.map').animate({ 'opacity': '1' }, 3400);
            $('.info').animate({ 'opacity': '1' }, 3400);
            $('.footbottom').animate({ 'opacity': '1' }, 3400);
        }
    });

});