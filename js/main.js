const prev = document.getElementById('btn-prev')
const next = document.getElementById('btn-next')
const slides = document.querySelectorAll('.slide')

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const prepareSlide = ind => {
    activeSlide(index);
}

const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        prepareSlide(index);
    } else {
        index++;
        prepareSlide(index);

    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length -1;
        prepareSlide(index);

    } else {
        index--;
        prepareSlide(index);

    }
}

let timer = setInterval(() => {
    if(index == slides.length -1) {
        index = 0;
        prepareSlide(index);
    } else {
        index++;
        prepareSlide(index);
    }
},5000)  

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);