
$(document).ready(function() {
    document.cookie="request=" + window.location.href + "; path=/";
    if(!loadedInIframe()) {
        window.location.assign("/");
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
    setTimeout(function(){ window.self.location.assign(url) }, 200);
}
