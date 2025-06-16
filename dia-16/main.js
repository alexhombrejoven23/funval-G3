/*
let btnSumar = document.querySelector("#btnSumar");
let btnRestar = document.querySelector("#btnRestar");
let parrafo = document.querySelector("#parrafo");
let contador = 1; 


btnSumar.addEventListener("click", function() {
    contador++;
    parrafo.textContent = contador;
});

btnRestar.addEventListener("click", function() {
    contador--;
    parrafo.textContent = contador;
});
*/

let btn = document.querySelector("#btn");
let img = document.querySelector("#imagen");
let dia = true;

btn.addEventListener("click", function () {
    dia = !dia;
    if (dia) {
        btn.textContent = "Dia";
        img.setAttribute(
            "src",
            "https://w7.pngwing.com/pngs/453/300/png-transparent-animated-sun-caricature-drawing-sun-photography-orange-computer-wallpaper-thumbnail.png"
        );
    } else {
        btn.textContent
        
    }
})
