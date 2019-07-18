$('.interface').on('click', function () {
    console.log('działa');
    console.log(this);

    if ($(this).hasClass('orange')) {
        $('body').css('background-color', 'orange');
    }
    if ($(this).hasClass('green')) {
        $('body').css('background-color', 'green');
    }
    if ($(this).hasClass('increase')) {
        $('p').animate({
            'font-size': '+=2px'
        }, 500)
    }
    if ($(this).hasClass('move')) {
        $('p').animate({
            'left': '+=10px',
            'letter-spacing': '+=2px'
        })
    }
})