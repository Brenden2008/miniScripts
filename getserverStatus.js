function getserverstatus() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("serverStatus").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "http://127.0.0.1:9000", true);
    xhttp.send();
  }
