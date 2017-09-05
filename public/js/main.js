$(document).ready(function () {

    // hamburger events
    $("button.hamburger").click(function () {
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


    //sly 

    var portfolio = new Sly($('.portfolio-frame'), {
        horizontal: true,
        itemNav: 'centered',
        activateMiddle: true,
        mouseDragging: true,
        touchDragging: true,
        scrollBar: $(".portfolio-scrollbar"),
        speed: 200,
    });
    portfolio.init();

    $(window).resize(function() {
        $frame.sly('reload');
    });

    //circles 

    let dials = [1, 2, 3, 4, 5]
    dials.forEach(function (e) {
        let selector = ".dial-" + e
        let current = $(selector);
        let load = current.data().load / 100;


        let circle = new ProgressBar.Circle(selector, {
            color: '#fff',
            strokeWidth: 16,
            trailWidth: 16,
            easing: 'easeInOut',
            duration: 2000,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#cccbcd', width: 16 },
            to: { color: '#cccbcd', width: 16 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + "%");
                }
            }


        })

        setTimeout(function () { circle.animate(load); }, (e - 1) * 200);
    })
})