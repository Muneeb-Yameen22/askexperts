
// Services Slider Open

const prevIcon = '<img src="./images/arrow.png" alt:"Prev Icon">';
const nextIcon = '<img src="./images/arrow.png" alt:"Next Icon">';

$('.slider').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// Services Slider Close

// Counter Open


$(".counter").each(function () {
    var $this = $(this),
    countTo = $this.attr("data-countto");
    countDuration = parseInt($this.attr("data-duration"));
    $({ counter: $this.text() }).animate(
        {
        counter: countTo
        },
    {
        duration: countDuration,
        easing: "linear",
        step: function () {
        $this.text(Math.floor(this.counter));
        },
        complete: function () {
        $this.text(this.counter);
        }
    }
    );
});

// Counter Close

// Client Slider Open

const clientPrevIcon = '<i class="fa-solid fa-arrow-left-long"></i>';
const clientNextIcon = '<i class="fa-solid fa-arrow-right-long"></i>';

$('.client_slider_box').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:10,
    navText: [
        clientPrevIcon,
        clientNextIcon
    ],
    responsive:{
        600:{
            items:3
        }
    }
});

// Client Slider Close










