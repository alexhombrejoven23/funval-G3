
const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
]; 

// 1.Recorrer y mostrar productos (forEach)
console.log("mostrar todos los productos");
productos.forEach(producto => {
   console.log(`Nombre: ${producto.nombre}, precio: $${producto.precio}`);
});
// 2.Crear un array de nombres de productos y verificar disponibilidad (map + includes)
const productosDisponibles = productos.map(producto => producto.nombre);
console.log("productos disponibles:", productosDisponibles);
const productoBuscado = "Mouse";
console.log(`¿"${productoBuscado}" esta disponible?`, productosDisponibles.includes(productoBuscado));

// 3.Aplicar un descuento a los productos (map)
console.log("\n productos con 10% de descuento:");
const productosDescuento = productos.map(producto => ({
   nombre: producto.nombre,
   precio: producto.precio * 0.9
}));
// 4.Filtrar productos por precio (filter)
console.log("\n Productor menoes a 100:")
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log(productosBaratos);

// 5.Obtener los primeros productos (slice)
console.log("\n Primeros dos productos:");
const primerosProductos = productos.slice(0, 2);
console.log(primerosProductos);

// 6.Ordenar productos por precio (sort)
console.log("\n productos ordenados por precio:");
const productosOrdenados = [...productos].sort((a,b) => a.precio - b.precio);
console.log(productosOrdenados);

// 7.Invertir el orden de los productos (reverse)
console.log("Productos en orden inverso");
const productosInvertidos = [...productos].reverse();
console.log(productosInvertidos);
