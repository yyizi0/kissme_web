const best_slide = new Swiper('.best_slide',{
    autoplay:{delay:4000},
    loop:true,
    pagination:{
        el: '.swiper-pagination'
    },
    speed:2000,
    on:{
        init:function(){
            //슬라이드가 변경되기 전 초기 실행함수
            this.slides[this.activeIndex].querySelector('.tint1').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.tint1').style.transform = 'translateX(60px)';
            this.slides[this.activeIndex].querySelector('.tint2').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.tint2').style.transform = 'translateX(60px)';
        },
        slideChange:function(){
            //슬라이드 변경될 때 인식되는 실행함수
            //1. 활성화 전 모든 슬라이드 opacity:0
            this.slides.forEach(target => {
                target.querySelector('.tint1').style.opacity = '0';
                target.querySelector('.tint1').style.transform = 'translateX(60px)';
                target.querySelector('.tint2').style.opacity = '0';
                target.querySelector('.tint2').style.transform = 'translateX(60px)';
            })
            //2. 활성화 슬라이드만 opacity:1
            this.slides[this.activeIndex].querySelector('.tint1').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.tint1').style.transform = 'translateX(-50%)';
            this.slides[this.activeIndex].querySelector('.tint2').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.tint2').style.transform = 'translateX(-50%)';
        }
    },
})
const news_slide = new Swiper('.news_slide',{
    spaceBetween: 20,
    slidesPerView: 1.4,
})
const sns_slide = new Swiper('.sns_slide',{
    slidesPerView:5, //한번에 보이는 슬라이드 개수
    centeredSlides:true, //슬라이드 기준이 중심부터 시작설정
    loopAdditionalSlides : 1,
    loop:true, //무한 반복 설정
    autoplay:{delay:0}, //자동재생
    speed:5000, //슬라이드 전환시 부드러운 전환
    spaceBetween: 20,
})
// header nav open
const menu_btn = document.querySelector('.user_menu .menu')
const open_nav = document.querySelector('.open_nav')
const close = document.querySelector('.close')
const nav = document.querySelectorAll('nav > ul > li')
const sub = document.querySelectorAll('nav > ul > li > .sub')
console.log(menu_btn,open_nav)
menu_btn.addEventListener('click',function(e){
    e.preventDefault()
    open_nav.style.transform = 'translateX(0)'
})
close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)'
})
nav.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        sub[i].style.display = 'block'
    })
    t.addEventListener('mouseout',function(){
        sub[i].style.display = 'none'
    })
})
// open_search 
const search_btn = document.querySelector('.user_menu .search')
const open_search = document.querySelector('.open_search')
const search_close = document.querySelector('#search_close')
console.log(search_btn,open_search,search_close)
search_btn.addEventListener('click',function(e){
    e.preventDefault()
    open_search.style.display = 'flex'
})
search_close.addEventListener('click',function(){
    open_search.style.display = 'none'
})
// top
const top_btn = document.querySelector('.top_btn')
const brandstory = document.querySelector('#brandstory')
const body = document.querySelector('body, html')
window.addEventListener('scroll',function(){
    if(body.scrollTop >= (brandstory.offsetTop - 700)){
        top_btn.style.display = 'block'
        console.log('.')
    }else {
        top_btn.style.display = 'none'
    }
})