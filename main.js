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
    
    // Toggle Menu/Navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu-theme').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); // make menu item look like an X button
    })

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Typing text animation script
    var typing = new Typed(".typing", {
        strings: ["&lt;h1&gt;...", "Web Developer", "<text style='color: var(--color-typing-3)'>&lt;?php&gt;...</text>", "<text style='color: var(--color-typing-3)'>PHP Developer</text>", "<text style='color: var(--color-typing-3)'>Back-end Developer</text>", "<text style='color: var(--color-typing-2)'>$(document).ready...</text>", "<text style='color: var(--color-typing-2)'>Front-end Developer</text>", "<text style='color: var(--color-typing-4)'>Freelancer</text>"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeOut: 5000,
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
            700:{
                items: 2,
                nav: false
            },
            1300:{ // 3 Cards with screen width 1300px and more.
                items: 3,
                nav: false
            }
        }
    });

    // Theme switch script
    let theme = localStorage.getItem("theme");
    const themeModeBtn = document.querySelector(".theme-btn");

    if(theme == "true"){  
        themeModeBtn.checked = theme;
        settheme(true);
    }else{

    };

    themeModeBtn.addEventListener("click", () => {
        settheme(themeModeBtn.checked);
    });

    function settheme(mode){
        if(mode == true){
            document.getElementById("theme-style").href = "dark.css";
            // document.getElementById("profile").src = "img/profile-dark.png";
        }else{
            document.getElementById("theme-style").href = "";
            // document.getElementById("profile").src = "img/profile-light.png";
        };
        
        localStorage.setItem("theme", mode);
    };
});