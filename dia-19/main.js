// ejecicio 1

let a = [1, 2, 3];
let b =["a", "b", "c"];

let resultado = [].concat(...a.map((v, i) => [v, b[i]]));
console.log(resultado)
*/