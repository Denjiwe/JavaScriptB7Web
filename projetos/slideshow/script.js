let sel = (seletor) => document.querySelector(seletor);
let sels = (seletor) => document.querySelectorAll(seletor);
let totalSlides = sels('.slider--item').length;
let currentSlide = 0;

sel('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
sel('.slider--controls').style.height = `${sel('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = sel('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    sel('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 5000);