function cambiaParrafo() {
    document.getElementById("demo").innerHTML = "parrafo cambiado.";
  }
  function borraParrafo() {
    document.getElementById("demo").style.display = 'none';
  }
  function apareceparrafo() {
    document.getElementById("demo").style.display = 'block';
  }
  
  function escritora() {
  document.getElementById("demo").innerHTML = 'Hello world! im very bored';
  }



function cambiaCoche(nombre) { 

  document.getElementById("img_cars").src = nombre; 
  
}

function cambiaSpiderman(nombre) {
  document.getElementById('img_spiderman').src = nombre; 
}

var marcacoche = "Mercedes";

var numero1 = "1";

var txt = "No se que escribirte aquí" ;

var variable = "La vida la vida es";

function muestramarca(){

    document.getElementById("demo").innerHTML= marcacoche;

}

function muestramarca_1(){

  document.getElementById("numero").innerHTML= numero1;

}
function muestramarca_2(){

  document.getElementById("texto_cualquiera").innerHTML= txt;

}

function muestramarca_3(){

  document.getElementById("variable_cualquiera").innerHTML= variable;

}

(function citascelebres(quote) {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function citascelebres() {
    let random = Math.floor(Math.random * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  
  });
})();
 

