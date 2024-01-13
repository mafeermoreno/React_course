// Funciones - Function declaration

/* function sumar(numero = 0, numero2 = 0) {
    console.log(numero2)
    console.log(numero + numero2)
}
sumar(10, 20)
sumar(2, 3)
sumar(100)
sumar() */

/* function sumar(numero = 0, numero2 = 0) {
    return [numero + numero2, "hola Mundo"]
} 
//Destructuring arrays
const [resultado, texto] = sumar(20, 30)
console.log(resultado)
console.log(texto)*/

function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2, texto: "hola Mundo"
    }
}

//Destructuring object
const {resultado, texto} = sumar(20, 30)
console.log(resultado)
console.log(texto)