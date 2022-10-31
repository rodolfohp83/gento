$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("activo");
    } else {
        //remove the background property so it comes transparent again (defined in your css) 
    $(".header").removeClass("activo");
    }
});
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".menu-mobile").addClass("activo");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
    $(".menu-mobile").removeClass("activo");
    }
});