let option = prompt(
    "Calcular:\n" +
    "1. Area de cuadrado\n" +
    "2. Area de rectangulo\n" +
    "3. Area de triangulo\n" +
    "ingresa el que deseas:"
);

if (option === "1") {
    let lado = prompt("ingrese el lado del cuadrado");
    let area = lado * lado;
    alert("El are del cuadrado es " + area);
} else if (option === "2") {
    let base = prompt("ingrese la base del rectangulo");
    let altura = prompt("ingrese la altura del rectangulo");
    let area = base * altura;
    alert("El area del rectangulo es " + area )
} else if (option === "3") {
    let base = prompt("Ingrese la base del triangulo");
    let altura = prompt("ingrese la altura del triangulo");
    let area = (base * altura) / 2;
    alert("El area del traigulo es " + area);
} else {
    alert("Esta opcion no es valida. Recarga la pagina e intenta nuevamente")
}