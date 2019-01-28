// SLOW SCROLLING

const scrollLink = $(".scroll");

scrollLink.click(function (e) {
    e.preventDefault();
    $("body, html").animate({
        scrollTop: $(this.hash).offset().top
    }, 300)
});


// HEADER NAVIGATION BORDER ANIMATIONS



$(".nav-link").hover(function() {
    const self = $(this);
    window.setTimeout(function() {
        const navBorder = $("#work-link-border");
        navBorder.css("left", self.offset().left - $("#work-link").offset().left - 5 + "px");
        navBorder.css("width", self.width() + 10 +"px")
    })
})

$(".clique-icon, .clique-contact").hover(function() {
    $(".header-nav-links").addClass("header-nav-hover")
});

$(".header-nav-links").mouseleave(function() {
    if($(this).hasClass("header-nav-hover")){
        $(this).removeClass("header-nav-hover")
    }
    $("#work-link-border").css("left", "-5px");
    $("#work-link-border").css("width", "52px");
});




// SCROLLING ANIMATIONS

$(window).scroll(function () {
    const scrollBarLocation = $(document).scrollTop();

    // HEADER NAVIGATION ANIMATION
    if(scrollBarLocation >= 10){
        $(".header-nav-links").addClass("header-nav-anim")
    } else{
        $(".header-nav-links").removeClass("header-nav-anim")
    }

    // FUNNY SECTION
    const funny = $("#funny").offset().top;
    const funnyBottom = $('#funny').offset().top + $('#funny').outerHeight(true);


    // SIDE NAVIGATION ANIMATION

    if (scrollBarLocation > funny) {
        $("#side-navigation").addClass("side-navigation-fixed");
    }
    else {
        $("#side-navigation").removeClass("side-navigation-fixed");
    }

    if (scrollBarLocation >= funny - 300) {
        if (scrollBarLocation <= funnyBottom - 300) {
            $('#funny-image-1').removeClass("funny-image-anim-1-reverse");
            $('#funny-image-1').addClass("funny-image-anim-1");
            $('#funny-image-2').addClass("funny-image-anim-2");

        }else {
            $('#funny-image-1').addClass("funny-image-anim-1-reverse");
            $('#funny-image-1').removeClass("funny-image-anim-1");
            $('#funny-image-2').removeClass("funny-image-anim-2");
        }
    }else if (scrollBarLocation <= funny - 300){
        $('#funny-image-1').addClass("funny-image-anim-1-reverse");
        $('#funny-image-1').removeClass("funny-image-anim-1");
        $('#funny-image-2').removeClass("funny-image-anim-2");
    }

    // PRESTIGIOUS ANIMATIONS

    const prestigious = $("#prestigious").offset().top - 300;
    const prestigiousBottom = $('#prestigious').offset().top + $('#prestigious').outerHeight(true) - 300;

    if (scrollBarLocation >= prestigious) {
        if (scrollBarLocation <= prestigiousBottom) {
            $('.funny-link-border').addClass("prestigious-link-anim");
            $(".prestigious-image").removeClass("prestigious-image-anim-reverse");
            $(".prestigious-image").addClass("prestigious-image-anim");

        }else{
            $('.funny-link-border').removeClass("prestigious-link-anim");
            $(".prestigious-image").addClass("prestigious-image-anim-reverse");
            $(".prestigious-image").removeClass("prestigious-image-anim");
        }
    }else if (scrollBarLocation <= prestigious){
        $('.funny-link-border').removeClass("prestigious-link-anim");
        $(".prestigious-image").addClass("prestigious-image-anim-reverse");
        $(".prestigious-image").removeClass("prestigious-image-anim");
    }


    // DELICIOUS ANIMATIONS

    const delicious = $("#delicious").offset().top - 300;
    const deliciousBottom = $('#delicious').offset().top + $('#delicious').outerHeight(true) - 300;

    if (scrollBarLocation >= delicious) {
        if (scrollBarLocation <= deliciousBottom) {
            $('.funny-link-border').addClass("delicious-link-anim");
            $(".delicious-image").addClass("delicious-image-anim");

        }else {
            $('.funny-link-border').removeClass("delicious-link-anim");
            $(".delicious-image").removeClass("delicious-image-anim");
        }
    }else if (scrollBarLocation <= delicious) {
        $('.funny-link-border').removeClass("delicious-link-anim");
        $(".delicious-image").removeClass("delicious-image-anim");
    }

    // LAST ANIMATIONS

    const last = $("#last").offset().top - 300;
    const lastBottom = $('#last').offset().top + $('#last').outerHeight(true) - 300;

    if (scrollBarLocation >= last) {
        if (scrollBarLocation <= lastBottom) {
            $('.funny-link-border').addClass("last-link-anim");
            $(".last-image-1").addClass("last-image-1-anim");
            $(".last-image-2").addClass("last-image-2-anim");
            $(".last-image-3").addClass("last-image-3-anim");
            $(".last-image-4").addClass("last-image-4-anim");
            $(".last-image-5").addClass("last-image-5-anim");

        }else {
            $('.funny-link-border').removeClass("last-link-anim");
            $(".last-image-1").removeClass("last-image-1-anim");
            $(".last-image-2").removeClass("last-image-2-anim");
            $(".last-image-3").removeClass("last-image-3-anim");
            $(".last-image-4").removeClass("last-image-4-anim");
            $(".last-image-5").removeClass("last-image-5-anim");
        }
    }else if( scrollBarLocation <= last ){
        $('.funny-link-border').removeClass("last-link-anim");
        $(".last-image-1").removeClass("last-image-1-anim");
        $(".last-image-2").removeClass("last-image-2-anim");
        $(".last-image-3").removeClass("last-image-3-anim");
        $(".last-image-4").removeClass("last-image-4-anim");
        $(".last-image-5").removeClass("last-image-5-anim");

    }

    // COMPREHENSIVE ANIMATIONS

    const comprehensive = $("#comprehensive").offset().top - 300;
    const comprehensiveBottom = $('#comprehensive').offset().top + $('#comprehensive').outerHeight(true) - 300;

    if (scrollBarLocation >= comprehensive) {
        if (scrollBarLocation <= comprehensiveBottom) {
            $('.funny-link-border').addClass("comprehensive-link-anim");
            $(".comprehensive-image").addClass("comprehensive-image-anim");
        }else {
            $('.funny-link-border').removeClass("comprehensive-link-anim");
            $(".comprehensive-image").removeClass("comprehensive-image-anim");
        }
    }else if( scrollBarLocation <= comprehensive){
        $('.funny-link-border').removeClass("comprehensive-link-anim");
        $(".comprehensive-image").removeClass("comprehensive-image-anim");
    }


    // PUBLIC ANIMATIONS

    const public = $("#public").offset().top - 300;
    const publicBottom = $('#public').offset().top + $('#public').outerHeight(true) - 300;

    if (scrollBarLocation >= public) {
        if (scrollBarLocation <= publicBottom) {
            $('.funny-link-border').addClass("public-link-anim");
            $("#public-image-2").removeClass("public-image-2-anim-reverse");
            $("#public-image-1").addClass("public-image-1-anim");
            $("#public-image-2").addClass("public-image-2-anim");

        } else {
            $('.funny-link-border').removeClass("public-link-anim");
            $("#public-image-1").removeClass("public-image-1-anim");
            $("#public-image-2").addClass("public-image-2-anim-reverse");
            $("#public-image-2").removeClass("public-image-2-anim");
        }
    }else if( scrollBarLocation <= public){
        $('.funny-link-border').removeClass("public-link-anim");
        $("#public-image-1").removeClass("public-image-1-anim");
        $("#public-image-2").addClass("public-image-2-anim-reverse");
        $("#public-image-2").removeClass("public-image-2-anim");

    }

    // INSPIRING ANIMATIONS

    const inspiring = $("#inspiring").offset().top - 300;
    const inspiringBottom = $('#inspiring').offset().top + $('#inspiring').outerHeight(true) - 300;

    if (scrollBarLocation >= inspiring) {
        if (scrollBarLocation <= inspiringBottom) {
            $('.funny-link-border').addClass("inspiring-link-anim");
            $(".inspiring-image").removeClass("inspiring-image-anim-reverse");
            $(".inspiring-image").addClass("inspiring-image-anim");
        }else {
            $('.funny-link-border').removeClass("inspiring-link-anim");
            $(".inspiring-image").addClass("inspiring-image-anim-reverse");
            $(".inspiring-image").removeClass("inspiring-image-anim");
        }
        }else if( scrollBarLocation <= inspiring){
        $('.funny-link-border').removeClass("inspiring-link-anim");
        $(".inspiring-image").addClass("inspiring-image-anim-reverse");
        $(".inspiring-image").removeClass("inspiring-image-anim");

    }


    // EDUCATIONAL ANIMATIONS

    const educational = $("#educational").offset().top - 300;
    const educationalBottom = $('#educational').offset().top + $('#educational').outerHeight(true) - 300;

    if (scrollBarLocation >= educational) {
        if (scrollBarLocation <= educationalBottom) {
            $('.funny-link-border').addClass("educational-link-anim");
            $(".educational-image-1").removeClass("educational-image-anim-1-reverse");
            $(".educational-image-2").removeClass("educational-image-anim-2-reverse");
            $(".educational-image-1").addClass("educational-image-anim-1");
            $(".educational-image-2").addClass("educational-image-anim-2");

        }else {
            $('.funny-link-border').removeClass("educational-link-anim");
            $(".educational-image-1").addClass("educational-image-anim-1-reverse");
            $(".educational-image-2").addClass("educational-image-anim-2-reverse");
            $(".educational-image-1").removeClass("educational-image-anim-1");
            $(".educational-image-2").removeClass("educational-image-anim-2");
        }
    }else if(scrollBarLocation <= educational){
        $('.funny-link-border').removeClass("educational-link-anim");
        $(".educational-image-1").addClass("educational-image-anim-1-reverse");
        $(".educational-image-2").addClass("educational-image-anim-2-reverse");
        $(".educational-image-1").removeClass("educational-image-anim-1");
        $(".educational-image-2").removeClass("educational-image-anim-2");
    }


    // SECURE ANIMATIONS

    const secure = $("#secure").offset().top - 300;
    const secureBottom = $('#secure').offset().top + $('#secure').outerHeight(true) - 300;

    if (scrollBarLocation >= secure) {
        if (scrollBarLocation <= secureBottom) {
            $('.funny-link-border').addClass("secure-link-anim");
            $("#secure-laptop-bottom").addClass("laptop-bottom-anim");
            $("#secure-laptop-top").removeClass("laptop-top-anim-reverse");
            $("#secure-laptop-top").addClass("laptop-top-anim");

        }else {
            $('.funny-link-border').removeClass("secure-link-anim");
            $("#secure-laptop-bottom").removeClass("laptop-bottom-anim");
            $("#secure-laptop-top").addClass("laptop-top-anim-reverse");
            $("#secure-laptop-top").removeClass("laptop-top-anim");

        }
    }else if(scrollBarLocation <= secure){
        $('.funny-link-border').removeClass("secure-link-anim");
        $("#secure-laptop-bottom").removeClass("laptop-bottom-anim");
        $("#secure-laptop-top").addClass("laptop-top-anim-reverse");
        $("#secure-laptop-top").removeClass("laptop-top-anim");

    }

    // HEALTHY ANIMATIONS

    const healthy = $("#healthy").offset().top - 300;
    const healthyBottom = $('#healthy').offset().top + $('#healthy').outerHeight(true) - 300;

    if (scrollBarLocation >= healthy) {
        if (scrollBarLocation <= healthyBottom) {
            $('.funny-link-border').addClass("healthy-link-anim");
            $("#healthy-laptop-bottom").addClass("laptop-bottom-anim");
            $("#healthy-laptop-top").removeClass("laptop-top-anim-reverse");
            $("#healthy-laptop-top").addClass("laptop-top-anim");

        }else {
            $("#healthy-laptop-bottom").removeClass("laptop-bottom-anim");
            $("#healthy-laptop-top").addClass("laptop-top-anim-reverse");
            $("#healthy-laptop-top").removeClass("laptop-top-anim");
        }
    }else if(scrollBarLocation <= healthy){
        $('.funny-link-border').removeClass("healthy-link-anim");
        $("#healthy-laptop-bottom").removeClass("laptop-bottom-anim");
        $("#healthy-laptop-top").addClass("laptop-top-anim-reverse");
        $("#healthy-laptop-top").removeClass("laptop-top-anim");
    }


});