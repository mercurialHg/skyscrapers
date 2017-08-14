$(document).ready(function() {
    
// hamburger events
    $("button.hamburger").click(function() {
        if ($(".navbar-collapse").hasClass("collapsing")) return;
        $(this).toggleClass("is-active")
    })
 

    // let $autoplaySpeed = 3000;
    // let $transitionSpeed = 300;
    // $(".hero-slider").slick({
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: $autoplaySpeed,
    //     transitionSpeed: $transitionSpeed,
    // });
})