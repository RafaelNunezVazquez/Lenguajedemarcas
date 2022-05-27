let i = 0;
let o = 1;


function cargaPregunta2() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, i);
      i++;
    }
  };
  http.open("GET", "Baloncesto.xml", true);
  http.send();
}

function cargaPreguntar2() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, i);
      i++;
      o++;
    }
  };
  http.open("GET", "Baloncesto.xml", true);
  http.send();
}

function myFunction2(xml, i) {
  var xmlDoc = xml.responseXML;
  var y = xmlDoc.getElementsByTagName("question");
  qq = y[i].getElementsByTagName("wording")[0].childNodes[0].nodeValue;

  rr1 =
    y[i].getElementsByTagName("choices")[0].childNodes[1].childNodes[0]
      .nodeValue;
  rr2 =
    y[i].getElementsByTagName("choices")[0].childNodes[3].childNodes[0]
      .nodeValue;
  rr3 =
    y[i].getElementsByTagName("choices")[0].childNodes[5].childNodes[0]
      .nodeValue;
  rr4 =
    y[i].getElementsByTagName("choices")[0].childNodes[7].childNodes[0]
      .nodeValue;

  res = document.getElementById("contador").innerHTML = "Pregunta nº: " + (i + 1);
  punt = document.getElementById("marca_personal").innerHTML = "Puntuación: " + o;

  document.getElementById("muestra_respuesta").innerHTML = qq;
  document.getElementById("boton1").innerHTML = rr1;
  document.getElementById("boton2").innerHTML = rr2;
  document.getElementById("boton3").innerHTML = rr3;
  document.getElementById("boton4").innerHTML = rr4;
}


function reinicio() {
  location.reload();
}

window.onload = updateClock;
var totalTime = 60;
function updateClock() {
  document.getElementById("timer").innerHTML = totalTime;
  if (totalTime == 0) {
    alert("Has perdido");
  } else {
    totalTime -= 1;
    setTimeout("updateClock()", 1000);
  }
}
