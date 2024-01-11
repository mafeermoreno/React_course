// Objetos - Manipulación

const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: true
}

// Congelar el objeto para que sus propiedades no puedan ser reescribidas, no permite tampoco añadir o eliminar propiedades
//Object.freeze(producto)
// Object seal permite reescribir las propiedades existentes pero no permite añadir nuevas ni eliminarlas
Object.seal(producto)

// Reescribir un valor
producto.nombre = "Monitor Curvo"
// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"
// Eliminar una propiedad (Si la propiedad no existe, no hace absolutamente nada, ni marca error)
delete producto.disponible
console.table(producto)