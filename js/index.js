//´óÍ¼
var mySwiper = new Swiper('.banner-imgbox', {
    pagination: '.pagination',
    loop: true,
    autoplay: 3000,
    grabCursor: true,
    paginationClickable: true
})
$('.banner-left').on('click', function (e) {
    e.preventDefault()
    mySwiper.swipePrev()
})
$('.banner-right').on('click', function (e) {
    e.preventDefault()
    mySwiper.swipeNext()
})
