// Objetos

const nombre = "Tablet"
const precio = 300
const disponible = true

const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)

// Destructuring (Sacar de una estructura)
const {nombre: nombreProducto, precio: precioProducto, disponible: disponibleProducto} = producto;
console.log(nombreProducto);

// Object Literal Enhacement
const autenticado = true
const usuario = "Maria"

const nuevoObjeto = {
    autenticado,
    usuario
}
console.table(nuevoObjeto)