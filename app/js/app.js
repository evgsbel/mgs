$(document).ready(function () {
    var arrow_prev = "<svg width='19' height='20' viewBox='0 0 19 20' xmlns='http://www.w3.org/2000/svg'> <path d='M10 1L1 10M1 10H18M1 10L10 19'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/> </svg>",
        arrow_next = "<svg width='19' height='20' viewBox='0 0 19 20' xmlns='http://www.w3.org/2000/svg'> <path d='M9 19L18 10M18 10L0.999999 10M18 10L9 1'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/> </svg>"
// слайдер баннеров
    $('.banner').owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_white", "slider-arrow slider-arrow_next slider-arrow_white"],
        navContainerClass: 'slider-arrow__wrapper',
        autoHeight: true,
        dotsClass: 'dots',
        dotClass: 'dots__item'
    });

// слайдер популярные коллеккции
    $('.popular-slider').owlCarousel({
        items: 1,
        margin: 10,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrapper',
        autoHeight: true,
    });

// слайдер товаров

    $('.product-slider').owlCarousel({
        items: 4,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        loop: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrapper',
        responsive:{
            0:{
                items:2,
                center: false
            },
            768:{
                items:3,
            },
            1024:{
                items:4
            }
        }
    });

// слайдер интерьеры

    $('.interiors__slider').owlCarousel({
        items: 3,
        margin: 10,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrapper',
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2
            },
            768:{
                items:3,
            },
        }
    });

// слайдер карточка интерьера (вертикальный)
    $(function(){
        $('.interior-slider').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 2,
            prevArrow: '<button type="button" role="presentation" class="slider-arrow slider-arrow_prev slick-arrow slick-arrow_prev"><svg width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 1L1 10M1 10H18M1 10L10 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></button>',
            nextArrow: '<button type="button" role="presentation" class="slider-arrow slider-arrow_next slick-arrow slick-arrow_next"><svg width="19" height="20" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9 19L18 10M18 10L0.999999 10M18 10L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></button>'
        });
    });

// маска номер телефона
    (function () {
        $('input[type="tel"]').mask('+7(999) 999-99-99');
    })();

// scrollbar
    $(".nano").nanoScroller();

// select

    (function ($) {
        $(function () {
            $('select').styler();
        });
    })(jQuery);

    $('.range_js').click(function () {
        $('.range_hide').toggle();
    });

    $(function () {
        $("#slider-range").slider({

            range: true,
            min: 25000,
            max: 80000,
            values: [25000, 80000],
            slide: function (event, ui) {
                $("#amount").val("от " + ui.values[0] + " Р" + " до " + ui.values[1] + " Р");
            }
        });
        $("#amount").val("от " + $("#slider-range").slider("values", 0) + " Р" +
            " до " + $("#slider-range").slider("values", 1) + " Р");
        $('.ui-slider-handle').each(function(){
            $(this).addClass('sliderNumber_' + $(this).index());
        });
    });

// мобильное меню
    $('.mobile-header__button').on("click", function(e) {
        e.preventDefault();
        $('.mobile-header__hide').addClass('active');
        $('.mobile-header__close').on("click", function() {
            $('.mobile-header__hide').removeClass('active');
        });
    });

});