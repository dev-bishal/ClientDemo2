var menuBtn = document.querySelector(".menuButton");
var responsiveMenuBar = document.querySelector("nav.mobileNav");
var searchForm = document.querySelector(".searchFrm");
var lightboxContainer = document.querySelector(".lightbox");

menuBtn.addEventListener("click", ()=>{
    responsiveMenuBar.classList.toggle("flex");
    responsiveMenuBar.classList.toggle("hidden");
});
function bringToView(sectionElement){
    if(window.innerWidth < 900){
        responsiveMenuBar.classList.remove("flex");
        responsiveMenuBar.classList.add("hidden");
    }
    element = document.querySelector(sectionElement);
    element.scrollIntoView();
}
function triggerLightBox(component){
    lightboxContainer.classList.toggle("hidden");
    lightboxContainer.classList.toggle("flex");

    document.querySelector(".modalContent.form").classList.add("flex");
    document.querySelector(".modalContent.form").classList.remove("hidden");
}
function showSearchForm(){
    searchForm.classList.toggle("translate-x-[200%]");
}

window.addEventListener('scroll', function () {
    mybutton = document.getElementById("BackToTop");
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        mybutton.classList.add("opacity-100");
        mybutton.classList.remove("opacity-0");        
    } else {
        mybutton.classList.remove("opacity-100");
        mybutton.classList.add("opacity-0");
    }        


    if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
        this.document.querySelector("header").classList.add("h-[90px]");
    }
    else
        this.document.querySelector("header").classList.remove("h-[90px]");
})

const swiperEl = document.querySelector('.brands-carousals swiper-container');
Object.assign(swiperEl, {
    loop: "true",
    freeMode: "true",
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    speed: "3500",
    slidesPerView: 5,
    spaceBetween: 30,

    breakpoints: {
        "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

swiperEl.initialize();
