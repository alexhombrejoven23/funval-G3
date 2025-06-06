/*
// ejercicio 1
// ejercicio 2
// ejercicio 3

let amigos = ["alex","rudy","jhoselin","nefi"]
amigos.push("guadalupe")
console.log(amigos)

let notas = [10, 20, 30, 40, 50, 60, 100];
let notamayor = Math.max(notas);
console.log(notamayor)

console.log(amigos.length)


let notas = [10, 20, 30, 40, 50, 60, 100];
let notamayor = Math.max(notas);
console.log(notamayor)

 // ejercicio 10 

let amigos = ["alex","rudy","jhoselin","nefi"]
amigos.push("guadalupe")

DUBPLICAR NUMERO 
let notas = [10, 20, 30, 40, 50, 60, 100];
let dobles = notas.map(numero => numero * 2);
console.log(dobles)


let estudiantes = [
    "alex",
    "juan",
    "pepe",
    "maria",
    "",
    "",
    "",

]

// iterar usando foreach y sacar el promedio de los estudiantes de Funval
let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];
let suma = 0;
let cantidadNotas = notasFunval.length;
notasFunval.forEach(nota => {
  suma += nota; });

let promedio = suma / cantidadNotas;
console.log(`El promedio de las notas es: ${promedio.toFixed(2)}`);


let pc = {
  nombre: "alex",
  procesador: "Intel Core I7",
  ram: "8 GB",
  espacio: "1TB"
}

console.log(pc.nombre)
+/

tenemos un array de estudiantes con diferentes notas quiero q me muestre un listado
de los estudiantes aprobados, se considerara aprobado aquel q tenga un promedio mayor a 51

let pc = {
  nombre: "alex",
  procesador: "Intel Core I7",
  ram: "8 GB",
  espacio: "1TB"
}

console.log(pc.nombre)

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
]

/* del array de estudiantes mostrar a todos los estudiantes que pertenezcan al pais de argentina */

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];