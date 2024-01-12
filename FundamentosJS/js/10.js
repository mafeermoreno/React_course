// Destructuring de arrays
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"]
 
//Se puede hacer de esta manera, pero, estaríamos definiendo una variable por cada elemento del arreglo, y eso no es lo mejor
/* const [var1, var2, var3, var4, var5] = tecnologias

console.log(var1) //Imprime de la posición en el arreglo, ese elemento
console.log(var2)
console.log(var3) 
console.log(var4) 
console.log(var5)  */

//Así se debe de hacer para extraer UN elemento de un array
//Se extraen según la posición (diferencia entre objeto y array)
const [ , , , , var5] = tecnologias
console.log(var5)


//Así se hace el destructuring de objetos:
//En el objeto extraes las propiedades existentes del objeto
/* const cliente = {
    nombre: "Juan",
    tipo: "Premium"
}

const {tipo} = cliente
console.log(tipo) */