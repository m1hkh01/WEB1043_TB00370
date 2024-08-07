let index = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;
    slides.forEach((slide, i) => slide.style.transform = `translateX(${-index * 100}%)`);
}

document.querySelector('.next').addEventListener('click', () => {
    index++;
    showSlide(index);
});

document.querySelector('.prev').addEventListener('click', () => {
    index--;
    showSlide(index);
});

showSlide(index);