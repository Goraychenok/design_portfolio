export default function () {
    $('.header__burger').on('click', function () {
        $('.header__list').toggleClass('active');
        $('header').toggleClass('active');
        $('.header__burger').toggleClass('active');
    })

    function slowScroll(id){
        var offset = 80;
        $('html,body').animate ({
            scrollTop: $(id).offset ().top - offset
        },1000);
        $('body').removeClass('lock');
        $('.header__burger,.header__menu').removeClass('active');
        return false;
    }
    $('.header__link').on('click', function(){
        $('.header__link').removeClass('active');
        $(this).addClass('active');

    })
}
