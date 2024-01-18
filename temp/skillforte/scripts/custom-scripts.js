$(document).ready(function(){
    $('.our-services-btn').click(function(){
        $('html, body').animate({
            scrollTop: $(".expertise-card").offset().top
        }, 2000);
    })
    $('.patner-item a').click(function(){
        if ($(this).text() == 'Show bio') {
            $(this).text('Hide bio');
        } else {
            $(this).text('Show bio');
        }
        var parent = $(this).parent();
        parent.find($('.patner-details')).slideToggle();
    })
    $('.partner').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        rewind:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    var owl = $('.case-study-slider');

    owl.owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        rewind:true,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    

    $('.risponsive-btn').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    })




 
})

// $(window).scroll(function(){
//     if($(window).scrollTop() >= ($('.green ').offset().top) - ($(window).height()/1.5)) {
//         $('.green ').addClass('active');
//     } else {
//         $('.green ').removeClass('active');
//     }
//     if($(window).scrollTop() >= ($('.blue ').offset().top) - ($(window).height()/1.5)) {
//         $('.blue ').addClass('active');
//     } else {
//         $('.blue ').removeClass('active');
//     }
//     if($(window).scrollTop() >= ($('.orange ').offset().top) - ($(window).height()/1.5)) {
//         $('.orange ').addClass('active');
//     } else {
//         $('.orange ').removeClass('active');
//     }
//     if($(window).scrollTop() >= ($('.red ').offset().top) - ($(window).height()/1.5)) {
//         $('.red ').addClass('active');
//     } else {
//         $('.red ').removeClass('active');
//     }
// })

// $(window).scrollTop() < $('.blue ').offset().top){