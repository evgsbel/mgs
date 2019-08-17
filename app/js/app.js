var arrow_prev = "<svg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M10 1L1 10M1 10H18M1 10L10 19' stroke='#3E3F43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
    arrow_next = "<svg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M9 19L18 10M18 10L0.999999 10M18 10L9 1' stroke='#3E3F43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
// слайдер баннеров
$('.banner').owlCarousel({
    items:1,
    margin:10,
    nav:true,
    navText: [arrow_prev,arrow_next],
    navClass: ["slider-arrow slider-arrow_prev slider-arrow_white","slider-arrow slider-arrow_next slider-arrow_white"],
    navContainerClass: 'slider-arrow__wrapper',
    autoHeight:true,
    dotsClass: 'dots',
    dotClass: 'dots__item'
});

// маска номер телефона
(function () {
    $('input[type="tel"]').mask('+7(999) 999-99-99');
})();