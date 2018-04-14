
$(document).ready(function() {

    document.cookie="request=" + window.location.pathname + "; path=/";

    if(!loadedInIframe()) {
        window.location.assign("/");
    }

    $(".card").hide();
    $(".card").css({ opacity: 1 })
    $("iframe").hide();
    $("#center").hide();
    $("#loading").hide();
    $("#loading").fadeIn();

});

window.onload = function() {
    try {
        showErrors();
    } catch (e) {
        showCards();
    }
}

function loadedInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function changeUrl(url) {
    try {
        hideErrors();
    } catch (e) {
        hideCards();
    }
    setTimeout(function(){ window.self.location.assign(url) }, 550);
}

function hideCards() {
    var height = $("#page").height();
    $(".card").animate({top: -height+"px"}, 150);
    $("iframe").fadeOut(150);
}

function hideErrors() {
    var height = $("#center").height();
    var top = $("#center").offset().top;
    $("#center").animate({top: -top-height+"px"}, 300);
}

function showCards() {
    $("#loading").fadeOut(150);
    $("iframe").fadeIn(150);
    $(".card").show();
    if ($("#page").length) {
        var height = $("#page").height() + $("#page").offset().top;
        $(".card").animate({top: -height+"px"}, 0);
    }
    $(".card").animate({top: 0}, 150);
}

function showErrors() {
    $("#center").show();
    var height = $("#center").height();
    var top = $("#center").offset().top;
    $("#center").css("bottom", "unset");
    $("#center").animate({top: -top-height+"px"}, 0);
    $("#center").animate({top: top+"px"}, 300);
}
