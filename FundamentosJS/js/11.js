//Iteradores en JS

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

// forEach - Acceder a cada elemento del array (no permite crear un nuevo arreglo, nada más acceder a ellos), se ejecuta una vez por cada elemento del arreglo
const arrayForeach = tecnologias.forEach(function(tech) {
    return tech
})

// Map - Crear un nuevo array
const arrayMap = tecnologias.map(function(tech) {
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)