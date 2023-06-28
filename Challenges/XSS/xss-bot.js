var page = require('webpage').create();
var host = "127.0.0.1";
var url = "http://"+host+":1337"+"/";
var timeout = 2000;
phantom.addCookie({
    'name': 'Flag',
    'value': 'CTF{N1C3_XSS_W4SM}',
    'domain': host,
    'path': '/',
    'httponly': false
});
page.onNavigationRequested = function(url, type, willNavigate, main) {
    console.log("[URL] URL="+url);  
};
page.settings.resourceTimeout = timeout;
page.onResourceTimeout = function(e) {
    setTimeout(function(){
        console.log("[INFO] Timeout")
        phantom.exit();
    }, 1);
};
page.open(url, function(status) {
    console.log("[INFO] rendered page");
    setTimeout(function(){
        phantom.exit();
    }, 1);
});

