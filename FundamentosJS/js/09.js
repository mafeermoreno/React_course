// Operaciones en los arreglos

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

//Se pueden añadir al final o al inicio de un array, pero, es importante dejar el original sin cambios
//Añadir elementos al array
//tecnologias.push("GraphQL") //Añade al final
//tecnologias.unshift("GraphQL") //Añade al final //Añade al inicio del array

//De esta forma se crea un nuevo arreglo que no modifica al arreglo original y añade GraphQL al final del arreglo 
//const nuevoArreglo = [...tecnologias, "GraphQL"]
//Lo mismo que el anterior pero lo añade al inicio
//const nuevoArreglo = ["GraphQL", ...tecnologias]


//Eliminar elementos del array 
//tecnologias.pop() //Elimina el último elemento de un arreglo, pero modifica el arreglo original, no se debe de hacer
//tecnologias.shift() //Elimina el primer elemento de un arreglo, pero de nuevo, no se debe de hacer
//Splice funciona de modo que le das el índice al que se va a comenzar a eliminar cosas, una coma y el número de elementos a eliminar, si no se define este segundo valor, se van a eliminar todos los elementos a partir del índice que se le ponga
//tecnologias.splice(2, 1)

/* //Lo que hace esto es iterar sobre todos los elementos e imprime uno por uno
const nuevoArray = tecnologias.filter( function(tech) {
    console.log(tech)
}) */

/* //Lo que hace esto es traer todos los elementos que sean diferentes a HTML, es decir, todos menos ese
const nuevoArray = tecnologias.filter( function(tech) {
    return tech !== "HTML"
}) */

//Reemplazar del array
//tecnologias[0] = "GraphQL" //Toma el lugar del elemento en dicho índice y se reescribe por el nuevo, no se debe de hacer porque esto se hace en el array original

//No modifica el original, lo que hace es iterar sobre cada elemento en tecnologias y compara, donde si el n elemento es HTML, lo cambia por GraphQL, sino, retorna el elemento en ese índice
const nuevoArray = tecnologias.map(function(tech) {
    if(tech === "HTML") {
        return "GraphQL"
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)