var showingMenu = false;
var darkner;
var hidesWaiting = 0;

$(document).ready(function(){
    darkner = document.getElementById('darkner');

    $("#darkner").click(function(){
        hideMenu();
    });

    $("#button").click(function(){
        menuSwap();
    });

    $(".swipeArea").swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingers) {
            if (phase == "move" && direction == "right" && distance > 40) {
                showMenu();
                return 0;
            }
            if (phase == "move" && direction == "left" && distance > 40) {
                hideMenu();
                return 0;
            }
        }
    });

});

function menuSwap() {
    if (!showingMenu) {
        showMenu();
    } else {
        hideMenu();
    }
}

function showMenu() {
    if(showingMenu) {
        return 0;
    }

    $("#menu").animate({left: '-1px'});
    showingMenu = true;
    darkner.style.display = "block";
    darkner.style.left = "100%"
    setTimeout(changeDarkner, 1);
}

function hideMenu() {
    if(!showingMenu) {
        return 0;
    }

    $("#menu").animate({left: '-15em'});
    showingMenu = false;
    darkner.style.opacity = 0;
    darkner.style.pointerEvents = "none";
    hidesWaiting++;
    setTimeout(changeDarkner, 600);
}

function changeDarkner() {
    if (!showingMenu) {
        hidesWaiting--;
        if(hidesWaiting == 0)
            darkner.style.display = "none";
    } else {
        darkner.style.opacity = 0.4;
        darkner.style.pointerEvents = "all";
        darkner.style.left = 0;
    }
}