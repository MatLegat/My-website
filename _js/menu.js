
const animationDuration = 300;
var showingMenu = false;
var changingMenu = false;
var menu;
var darkner;

$(document).ready(function() {

    if(window.location.href.endsWith("index.html")) {
        window.self.location.assign(window.location.href.replace('index.html',''));
    }

    if(loadedInIframe()) {
        window.top.location.assign("/");
    }

    $("#top").hide();
    $("body").css("background-color", "#ffffff");

    darkner = document.getElementById('darkner');
    menu = document.getElementById('menu');

    $("#button").load("/_icons/menu.html");

    $("#button").click(function() {
        menuSwap();
    });

    $("#darkner").click(function() {
        hideMenu();
    });

    $(".swipeArea").swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingers) {
            if (phase == "move" && direction == "right" && distance > 50) {
                showMenu();
                return 0;
            }
            if (phase == "move" && direction == "left" && distance > 50) {
                hideMenu();
                return 0;
            }
        }
    });

});

window.onload = function() {
    showTopBar();
    loadRequest();
}

function menuSwap() {
    if (showingMenu) {
        hideMenu();
    } else {
        showMenu();
    }
}
function showMenu() {
    if (showingMenu || changingMenu) {
        return;
    }
    changingMenu = true;
    showingMenu = true;
    darkner.style.display = "block";
    darkner.style.left = 0;
    darkner.style.pointerEvents = "all";
    $("#menu").animate({left: '-1px'}, animationDuration, menuChanged);
    $("#darkner").animate({opacity: '0.4'}, animationDuration);
    animateButton();
}

function hideMenu() {
    if (!showingMenu || changingMenu) {
        return;
    }
    changingMenu = true;
    showingMenu = false;
    darkner.style.pointerEvents = "none";
    $("#menu").animate({left: '-15em'}, animationDuration, menuChanged);
    $("#darkner").animate({opacity: '0'}, animationDuration);
    animateButton();
}

function menuChanged() {
    changingMenu = false;
    if (!showingMenu) {
        darkner.style.display = "none";
        darkner.style.left = "100%";
    }
}

function animateButton() {
    if (showingMenu) {
        var animationRotate1 = document.getElementById("animationRotate1");
        var animationBack1 = document.getElementById("animationBack1");
        var animationBack2 = document.getElementById("animationBack2");
        var animationBack3 = document.getElementById("animationBack3");
        animationRotate1.beginElement();
        animationBack1.beginElement();
        animationBack2.beginElement();
        animationBack3.beginElement();
    } else {
        var animationRotate2 = document.getElementById("animationRotate2");
        var animationMenu1 = document.getElementById("animationMenu1");
        var animationMenu2 = document.getElementById("animationMenu2");
        var animationMenu3 = document.getElementById("animationMenu3");
        animationRotate2.beginElement();
        animationMenu1.beginElement();
        animationMenu2.beginElement();
        animationMenu3.beginElement();
    }
}

function loadRequest() {
    var request = getCookie("request");
    if (request.charAt(0)=='/') {
        document.getElementById("contentFrame").src = request;
    } else {
        document.getElementById("contentFrame").src = "/content/home.html";
    }
}

function getCookie(name) {
    var search = name + "=";
    var array = document.cookie.split(';');
    for(var i=0; i<array.length; i++) {
        var cookie = array[i];
        while (cookie.charAt(0)==' ')
            cookie = cookie.substring(1);
        if (cookie.indexOf(search) == 0)
            return cookie.substring(search.length,cookie.length);
    }
    return "";
}

function showTopBar() {
    $("#top").show();
    $("#top").animate({top: "-4em"}, 0);
    $("body").animate({backgroundColor : "#ebebeb"}, 350);
    $("#top").animate({top: 0}, 300);
}

function loadedInIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function link(url) {
    hideMenu();
    document.getElementById("contentFrame").contentWindow.changeUrl(url);
}
