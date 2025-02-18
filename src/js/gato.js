const tablero = document.getElementsByClassName ("tablero");
const cell = document.getElementsByClassName ("cell");
const resetbtn = document. getElementById ("resetbtn");

let mensaje= document.getElementById ("mensaje")

let juego = true
let celdasDisponibles= []
let celdasTotales= []

// let victoriasJugador = 0;
// let victoriasMaquina = 0;
// let derrotasJugador = 0;
// let derrotasMaquina = 0;
// let empates = 0;


for (let index = 0; index < cell.length; index++) {
 const element = cell [index]; 

  celdasDisponibles.push (element)
  celdasTotales. push (element)

  element.addEventListener ("click", function(){
    if (juego==true) {
      if (element.textContent === "") {// si esta vacio o sea igual a vacio que nos permita colocar una X
      element.textContent = "❤️" 
      celdasDisponibles= celdasDisponibles.filter (cel => cel != element) // Celdas disponibles es igual a las celdas disponibles filtradas
      ganar()
      maquina()
      }
    }
  })
};

function maquina () {
 //Para el tiempo en ejecucción

 if (juego==true) {
  setTimeout (() =>{
    let celrandom = celdasDisponibles[Math.floor (Math.random()*celdasDisponibles.length)] //Que pueda elegir entre las celdas disponibles, de manera random
  
    if (celrandom == undefined) {
      //ganar ();
    }
      else {
        celrandom.textContent = "🥱"
        celdasDisponibles= celdasDisponibles.filter ( cel => cel != celrandom)
        ganar ();
    
      }
  
    }, 400)
 }
}

function ganar () {
  const ganar =[
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ]

  //let ir en cada una de las listas de ganar 
  for ( let comb of ganar) {
    if (celdasTotales [ comb [0]].textContent == "❤️" && celdasTotales[comb [1]].textContent== "❤️" &&  celdasTotales[comb [2]].textContent== "❤️" ) {
      mensaje.innerText="¡Ganaste jugador ❤️!"
      juego = false
    }

    if (celdasTotales [ comb [0]].textContent == "🥱" && celdasTotales[comb [1]].textContent== "🥱" &&  celdasTotales[comb [2]].textContent== "🥱" ) {
      mensaje.textContent="¡Ganaste jugador 🥱!"
      juego = false
    }

  }

     if (celdasDisponibles.length == 0 && juego== true) {
      mensaje.innerText="¡Hemos Empatados!"
     }

};
    
    resetbtn.addEventListener ("click", function () {
      location.reload () 
    })
