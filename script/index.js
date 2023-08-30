const best_slide = new Swiper('.best_slide',{
    autoplay:{delay:3000},
    loop:true,
    pagination:{
        el: '.swiper-pagination'
    }
})
const news_slide = new Swiper('.news_slide',{
    loop: true,
    spaceBetween: 20,
    loopAdditionalSlides : 1,
    slidesPerView: 1.3,
})
const sns_slide = new Swiper('.sns_slide',{
    autoplay:{delay:0, disableOnInteraction: false,},
    speed: 5000,
    loop: true,
    // slidesPerView: 4,
    loopAdditionalSlides : 1,
    spaceBetween: 20,
})