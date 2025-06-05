/*

let swich = true;
do {
    let contraseña = prompt("ingresa tu contraseña");

    if(contraseña.toLowerCase === "alexito") {
        swich = false;
    } else {
        swich = true;
    }
} while (swich);
alert("FELICIDADES CONTRASEÑA CORRECTA");



let numero = 5;
for (numero; numero = 8; numero--);
console.log(numero)


let numero = 5;
for (numero; numero >= 1; numero--) {
  console.log(numero); // Imprime desde 5 hasta 0
}


let numero = 5;
for( let index = 0; index < 5; index++) {
    console.log(numero);
    numero--;
}
*/

function saludar() {
    console.log("hola amigos")
}

saludar()

/* ejemplo con parametros 
*/

function saludar(nombre) {
    console.log("hola amigos " + nombre + "querido amigo");
}

saludar