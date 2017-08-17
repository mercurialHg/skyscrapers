$(document).ready(function () {

    // hamburger events
    $("button.hamburger").click(function () {
        if ($(".navbar-collapse").hasClass("collapsing")) return;
        $(this).toggleClass("is-active")
    });

    $(".slick-carousel").slick({
        infinite: true,
        nextArrow: '<div class="slick-arrow slick-next"></div>',
        prevArrow: '<div class="slick-arrow slick-prev"></div>',
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToScroll: 4,
                    slidesToShow: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 580,
                settings: "unslick",
            },
        ]
    });

    $(".favourite").click(function(event){
        event.preventDefault();
        $(this).toggleClass("active");
    })
})  