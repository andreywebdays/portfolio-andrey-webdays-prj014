$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar on scroll script
        if(this.scrollY > 20){ //this -> window
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    
    // Toggle Menu/Navbar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); // make menu item look like an X
    })

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Typing text animation script
    // var typed = new Typed(".typing", {
    //     strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    var typed = new Typed(".typing", {
        strings: ["&lt;h1&gt;...", "Web Developer", "<text style='color: var(--color-5)'>&lt;?php&gt;...</text>", "<text style='color: var(--color-5)'>PHP Developer</text>", "<text style='color: var(--color-5)'>Back-end Developer</text>", "<text style='color: var(--color-6)'>$(document).ready...</text>", "<text style='color: var(--color-6)'>Front-end Developer</text>", "<text style='color: var(--color-8)'>Freelancer</text>"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: 10000, // true
        autoplaySpeed: 1000,
        autoplayTimeOut: 10000,
        // smartSpeed: 2000,
        slideSpeed: 300,
        paginationSpeed: 500,
        singleItem: true,
        navigation: true,
        scrollPerPage: true,

        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});