/*
frutas = ["pera", "papaya", "2", "sandia", "44", "uva"];

console.log(frutas[4])
let pc2 = ["AlexPC", "Inter Core i7", "8GB", "1TB"];
console.log(pc["ram"])
*/

let pc = {
    nombre: "AlexPC",
    procesador: "Inter Core i7",
    ram: "8GB",
    espacio: "1TB"
};
let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = ["espacio"];

frase = `el nombre de mi pc es: ${nombre}
        el procesador es: ${procesador}
        la memoria ram es: ${ram}
        el espacio en disco es de ${espacio}` ;

console.log(frase)