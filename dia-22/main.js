/*

setTimeout(() => {
    console.log("2.escucho musica");
    
    setTimeout(() => {
        console.log("3.mientras escucho musica, limpio mi cuarto");

        setTimeout(() => {
            console.log("4.voy a correr");

            setTimeout(() => {
                console.log("5.llego a desayunar");
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)

console.log("1.Me levanto");



function traerDatos() {
  let exito = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("me espero de la mision :D");
      } else {
        reject("me mando el querido Juan");
      }
    }, 3000);
  });
}
traerDatos()
  .then((datos) => console.log(datos))
  .catch((err) => console.log(err));


console.log("")
function viajeChina () {
    let china = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (china) {
                resolve("aprenderé mucha disciplina de los asiaticos");
            } else {
                reject("seguire en latinoamerica sin dinero");
            }
        }, 2000)
    });
}

viajeChina()
.then((china) => console.log(china))
.catch((reject) => console.log(reject));


let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentia",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
];

function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("me mando el querido Juan");
      }
    }, 7000);
  });
}



let datos = [
  {
    nombre: "pepe",
    edad: 18,
    pais: "Argentia",
  },
  {
    nombre: "juan",
    edad: 34,
    pais: "Peru",
  },
  {
    nombre: "kevin",
    edad: 28,
    pais: "Narnia",
  },
  {
    nombre: "Thomas",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Johan",
    edad: 28,
    pais: "Chile",
  },
  {
    nombre: "Juana",
    edad: 28,
    pais: "Chile",
  },
];
/* ella me prometio esperarme 2 años */
/*
function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("error al traer los datos");
      }
    }, 3000);
  });
}
function crearCard(estudiante) {
    return `
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
            <h5 class="mb-2 text-2xl font-bold">${estudiante.nombre}</h5>
            <p class="mb-1">Edad: ${estudiante.edad}</p>
            <p class="font-normal">País: ${estudiante.pais}</p>
        </div>
    `;
}

*/
const datos = [
    { nombre: "pepe", edad: 18, pais: "Argentina" },
    { nombre: "juan", edad: 34, pais: "Peru" },
    { nombre: "kevin", edad: 28, pais: "Narnia" },
    { nombre: "Thomas", edad: 28, pais: "Argentina" },
    { nombre: "Johan", edad: 28, pais: "Chile" },
    { nombre: "Juana", edad: 28, pais: "Chile" },
];

function crearCard(estudiante) {
    return `
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
            <h5 class="mb-2 text-2xl font-bold">${estudiante.nombre}</h5>
            <p class="mb-1">Edad: ${estudiante.edad}</p>
            <p class="font-normal">País: ${estudiante.pais}</p>
        </div>
    `;
}

function mostrarEstudiantes() {
    const allStudents = document.getElementById('allStudents');
    const argentinaStudents = document.getElementById('argentinaStudents');
    const chileStudents = document.getElementById('chileStudents');

    // Limpiar contenedores primero
    allStudents.innerHTML = '';
    argentinaStudents.innerHTML = '';
    chileStudents.innerHTML = '';

    // Mostrar todos los estudiantes
    datos.forEach(estudiante => {
        allStudents.innerHTML += crearCard(estudiante);
    });

    // Filtrar y mostrar estudiantes de Argentina
    datos.filter(e => e.pais === "Argentina").forEach(estudiante => {
        argentinaStudents.innerHTML += crearCard(estudiante);
    });

    // Filtrar y mostrar estudiantes de Chile
    datos.filter(e => e.pais === "Chile").forEach(estudiante => {
        chileStudents.innerHTML += crearCard(estudiante);
    });
}

// Función para simular la carga de datos
function traerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(datos);
        }, 3000);
    });
}

// Cuando la página carga
window.onload = async function() {
    await traerDatos();
    
    // Ocultar spinner y mostrar contenido
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
    
    mostrarEstudiantes();
};