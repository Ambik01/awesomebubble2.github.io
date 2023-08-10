$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script 
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    // toggle menu/nav 

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing animate script
    var typed = new Typed(".typing", {
        strings: ["full Stack Web Developer","Designer","S/W Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });


    var typed = new Typed(".typing-2", {
        strings: ["full Stack Web Developer","Designer","S/W Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    // owl carosel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },

            600: {
                items: 2,
                nav: false
            },

            1000: {
                items: 3,
                nav: false
            }

        }
    });



});

function toggle() {

    var a = document.getElementById("style1");

    a.x = 'Css/style2' == a.x ? 'Css/style1' : 'Css/style2';

    a.href = a.x + '.css';

}

function message(){

    alert("Message Sent");
}




