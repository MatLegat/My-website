
$(document).ready(function() {

    document.cookie="request=" + window.location.href + "; path=/";

    if(!loadedInIframe()) {
        window.location.assign("/");
    }
    try {
        showErrors();
    } catch (e) {
        showCards();
    }

});

function loadedInIframe () {
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
}

function hideErrors() {
    var height = $("#center").height();
    var top = $("#center").offset().top;
    $("#center").animate({top: -top-height+"px"}, 300);
}

function showCards() {
    $(".card").show();
    var height = $("#page").height() + $("#page").offset().top;
    $(".card").animate({top: -height+"px"}, 0);
    $(".card").animate({top: 0}, 150);
}

function showErrors() {
    var height = $("#center").height();
    var top = $("#center").offset().top;
    $("#center").css("bottom", "unset");
    $("#center").animate({top: -top-height+"px"}, 0);
    $("#center").animate({top: top+"px"}, 300);
}
