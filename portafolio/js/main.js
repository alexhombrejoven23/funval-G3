document.addEventListener('DOMContentLoaded', function() {
  // Cargar habilidades dinámicamente
  let habilidadesContainer = document.querySelector("#habilidades-container");
  
  habilidades.forEach(habilidad => {
    let skillElement = document.createElement('div');
    skillElement.className = 'skill-item text-center';
    skillElement.innerHTML = `
      <div class="mb-2">
        <img src="${habilidad.imagen}" alt="${habilidad.nombre}" class="w-16 h-16 mx-auto object-contain">
      </div>
      <span class="text-gray-400">${habilidad.nombre}</span>
      <div class="w-full bg-gray-700 rounded-full h-2.5 mt-2">
        <div class="bg-green-400 h-2.5 rounded-full" style="width: ${habilidad.nivel}"></div>
      </div>
    `;
    habilidadesContainer.appendChild(skillElement);
  });
});

// (TOGGLE DEL MENU PARA MOVILES)
let menuToggle = document.querySelector('#menu-toggle');
let mainNav = document.querySelector('#main-nav');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('hidden');
});

// CERRAR MENU AL HACER CLIC EN UN ENLACE(PARA CELULARES)
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth < 768) {
      mainNav.classList.add('hidden');
    }
  });
});

//DESCARGA DEL CV
function setupDescargaCV() {
  document.querySelector("#descargarCV").addEventListener("click", function() {
    let link = document.createElement("a");
    link.href = "./cv/CURRICULUM ALEX INGLES.pdf";
    link.download = "CV_ALEX_INGLES.pdf";
    link.click();
  });
}

export {setupDescargaCV,}