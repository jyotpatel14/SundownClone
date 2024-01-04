const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page3Animation() {
    var elemC = document.querySelector("#elem-cont")
    var fixed = document.querySelector("#fixed-image")
    fixed.style.display = "none";
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    })

    var elements = document.querySelectorAll(".elem")
    elements.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            var image = element.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

page3Animation();

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 100,
        
    });
}

swiperAnimation();