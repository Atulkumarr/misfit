$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

// navigation
$(".hamburger").click(function() {
    $("ul").toggleClass("active");
    $("ul").removeClass("remove-nav");
    $(".line-1").toggleClass("no-line");
    $(".line-2").toggleClass("rotate-line-2");
    $(".line-3").toggleClass("rotate-line-3");
});
$('a').click(function() {
    $('ul').addClass('remove-nav')
    $('ul').removeClass('active')
    $(".line-1").removeClass("no-line");
    $(".line-2").removeClass("rotate-line-2");
    $(".line-3").removeClass("rotate-line-3");
})