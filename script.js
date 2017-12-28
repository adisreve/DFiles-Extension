window.onload = function () {
    document.getElementById('free_btn').click();
}

var iframe = document.getElementsByTagName('iframe');

checking();

// Checks if button exists
function checking() {

    var checkExist = setInterval(function () {
        var premium = document.getElementById('ads_zone41');
        var adzone = document.getElementById('acpuzzle_capture_container');
        var premiumbtn = document.getElementsByClassName('fastdownload');

        if (typeof (premium) != 'undefined' && premium != null) {
            adzone.style.display = 'none';
            premium.style.display = 'block';
            premiumbtn[0].style.height = '150px';
            clearInterval(checkExist);
        }
    }, 100); 
    // check every 100ms

    return checkExist;
}

for (var i = 0; i < iframe.length; i++) {
    iframe[i].style.display = 'none';
}