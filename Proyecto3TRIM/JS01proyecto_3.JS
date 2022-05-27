let i = 0;
let o = 1;

function cargaPregunta() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this, i);
      i++;
    }
  };

  xhttp.open("GET", "FUTBOLproyecto_3.xml", true);
  xhttp.send();
}

function myFunction(xml, i) {
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("question");
  q = x[i].getElementsByTagName("wording")[0].childNodes[0].nodeValue;

  r1 =
    x[i].getElementsByTagName("choices")[0].childNodes[1].childNodes[0]
      .nodeValue;
  r2 =
    x[i].getElementsByTagName("choices")[0].childNodes[3].childNodes[0]
      .nodeValue;
  r3 =
    x[i].getElementsByTagName("choices")[0].childNodes[5].childNodes[0]
      .nodeValue;
  r4 =
    x[i].getElementsByTagName("choices")[0].childNodes[7].childNodes[0]
      .nodeValue;

  res = document.getElementById("contador").innerHTML = "Pregunta nº: " + (i + 1);
  punt = document.getElementById("marca_personal").innerHTML = "Puntuación: " + o;

  document.getElementById("muestra_respuesta").innerHTML = q ;
  document.getElementById("boton1").innerHTML = r1;
  document.getElementById("boton2").innerHTML = r2;
  document.getElementById("boton3").innerHTML = r3;
  document.getElementById("boton4").innerHTML = r4;
}

function cargaPreguntar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this, i);
        i++;
        o++;
      }
    };
    xhttp.open("GET", "FUTBOLproyecto_3.xml", true);
    xhttp.send();
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

