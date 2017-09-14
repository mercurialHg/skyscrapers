$(document).ready(function () {

    // hamburger events
    $("button.hamburger").click(function () {
        if ($(".navbar-collapse").hasClass("collapsing")) return;
        $(this).toggleClass("is-active");
    })

    // services

    inView(".service").on('enter', function(el) {
        $(el).addClass('fadeInRight')
    });

    (function addAnimDelay(selector) {

        if ($(window).innerWidth() > 767) {
            $(selector).each(function(index){
                $(this).css({
                    'animation-delay' : index * 0.2 + "s",
                    '-webkit-animation-delay' : index * 0.2 + "s",
                })
            })
        } else {
            $(selector).each(function(index){
                $(this).css({
                    'animation-delay' : "0s",
                    '-webkit-animation-delay' : "0s",
                })
            })
        }
    })(".service");

    
    //sly


    var portfolioLg = new Sly($('.portfolio-frame'), {
        horizontal: true,
        itemNav: 'centered',
        activateMiddle: true,
        smart: true,
        mouseDragging: true,
        touchDragging: true,
        speed: 300,
        startAt: 0,
        activateOn: 'click',
        elasticBounds: true,
        releaseSwing: true, 
        scrollBy: 1, scrollTrap: true,
        //buttons

        prev: $('.arrow.prev'),
        next: $('.arrow.next'),
    });


    var portfolioXs = new Sly($('.portfolio-frame'), {
        horizontal: true,
        itemNav: 'forceCentered',
        activateMiddle: true,
        smart: true,
        mouseDragging: true,
        touchDragging: true,
        speed: 300,
        startAt: 0,
        activateOn: 'click',
        elasticBounds: true,
        releaseSwing: true, 
        scrollBy: 1, scrollTrap: true,
        //buttons

        prev: $('.arrow.prev'),
        next: $('.arrow.next'),
    });

    if (window.innerWidth < 768) {
        portfolioXs.init();
    } else {
        portfolioLg.init();
    }


    $(".favourite").click(function () {
        $(this).toggleClass("selected");
    })

    //sly - story

    var storyLg = new Sly($('.story-frame'), {
        horizontal: true,
        itemNav: 'centered',
        activateMiddle: true,
        smart: true,
        mouseDragging: true,
        touchDragging: true,
        scrollBar: $(".story-scrollbar"),
        dragHandle: true,
        speed: 300,
        startAt: 0,
        activateOn: 'click',
        elasticBounds: true,
        scrollSource: $(".story-frame"),
        releaseSwing: true, 
        scrollBy: 1, scrollTrap: true,
    });


    var storyXs = new Sly($('.story-frame'), {
        horizontal: true,
        itemNav: 'forceCentered',
        activateMiddle: true,
        smart: true,
        mouseDragging: true,
        touchDragging: true,
        scrollBar: $(".story-scrollbar"),
        dragHandle: true,
        speed: 300,
        startAt: 0,
        activateOn: 'click',
        elasticBounds: true,
        scrollSource: $(".story-frame"),
        releaseSwing: true, 
        scrollBy: 1, scrollTrap: true,
    });

    if (window.innerWidth < 768) {
        storyXs.init();
    } else {
        storyLg.init();
    }


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
                    circle.setText('0%');
                } else {
                    circle.setText(value + "%");
                }
            }


        })

        inView(selector)
        .on("enter", function(elem) {
            current.css({
                opacity: 1,
            });
            circle.animate(load)
        })

    })
})