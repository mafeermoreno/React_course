// Unir 2 objetos o más

const producto = {
    nombre : "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre : "Maria",
    premium: true
}

//const nuevoObjeto = Object.assign(producto, cliente) //No se debe de hacer esto, pues se estaría modificando el objeto "producto" directamente, lo cual no es lo ideal
//Utilizar el spread operator (...) para crear copias de los objetos producto y cliente, evitando modificar los originales, de modo que se tiene un objeto con dos objetos adentro por así decir
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
 }
console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)