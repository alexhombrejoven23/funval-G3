// serie fivonachi
/*
let matriz = [
  [5, 3, 12],
  [8, 7, 4],
  [15, 10, 77],
];

function sumar(matriz) {
    let sumaPrincipal = 0;
    let sumaScundario = 0;
    let n = matriz.length;

    for (let i = 0; i < n; i++) {

    }
}

*/

const estudiantesFunval = [
  { nombre: "Felipe", nota: 89 },
  { nombre: "Thomas", nota: 34 },
  { nombre: "Pablo", nota: 77 },
  { nombre: "woodleine", nota: 68 },
  { nombre: "Mahonri", nota: 23 },
];

function estudiantesAprobados(estudiantes) {
  let aprobados = estudiantes.filter(estudiante => estudiante.nota > 76);
  let resultado = aprobados.map(estudiante => ({
    nombre: estudiante.nombre.toUpperCase(),
    nota: estudiante.nota
  }));
  resultado.forEach(estudiante => {
    console.log(`Estudiante aprobado con más de 76: ${estudiante.nombre} (Nota: ${estudiante.nota})`);
  });
  
  return resultado;
}


const estudiantesFunval2 = [
  { nombre: "Lucía Gómez", pais: "Argentina", edad: 20, notas: [8, 7, 9, 10] },
  { nombre: "Mateo Rojas", pais: "México", edad: 22, notas: [6, 8, 7] },
  {
    nombre: "Valentina Pérez",
    pais: "Chile",
    edad: 21,
    notas: [9, 9, 10, 10, 8],
  },
  { nombre: "Carlos Silva", pais: "Colombia", edad: 23, notas: [7, 6, 7] },
  { nombre: "Sofía Torres", pais: "España", edad: 19, notas: [10, 9, 10] },
  { nombre: "Andrés Castillo", pais: "Perú", edad: 24, notas: [5, 6, 7, 8] },
  { nombre: "Camila Herrera", pais: "Uruguay", edad: 22, notas: [8, 9, 7] },
  { nombre: "Juan López", pais: "Bolivia", edad: 20, notas: [6, 7, 6, 5] },
  {
    nombre: "Isabela Ramírez",
    pais: "Ecuador",
    edad: 21,
    notas: [9, 8, 9, 10],
  },
  { nombre: "Tomás Díaz", pais: "Paraguay", edad: 23, notas: [6, 6, 7, 8] },
  {
    nombre: "Martina Aguilar",
    pais: "Argentina",
    edad: 20,
    notas: [10, 10, 9],
  },
  { nombre: "Diego Méndez", pais: "México", edad: 24, notas: [5, 6, 7, 6] },
  { nombre: "Paula Vargas", pais: "Colombia", edad: 22, notas: [8, 9, 10] },
  { nombre: "Alejandro Núñez", pais: "Chile", edad: 21, notas: [7, 7, 6, 7] },
  { nombre: "Fernanda Soto", pais: "España", edad: 19, notas: [10, 9, 10, 9] },
];

function notasPromedio (notas) {
  const valorInicial = 0;
  let promedio = arrayNotas.reduce((acumular, valorActual) => {
    return acumulador + valorActual;
}, valorInicial);
promedio = promedio / arrayNotas.length;
return promedio;
}

let nuevoArray = estudiantesFunval2.map((estudiante) => {
  let obj = {};
  obj.nombre = estudiante.nombre;
  obj.promedio = promedioNotas(estudiante.notas).toFixed(1);
  return obj;
})

console.log(nuevoArray);

let arrayMayores = estudiantesFunval