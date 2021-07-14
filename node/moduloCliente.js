// módulo cliente tem esse nome pq utiliza códigos de outros módulos

const moduloA = require('./moduloA') // require importa os valores par/chave dos objetos no modulo A
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.benVindo)
console.log(moduloA.atelogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite)
console.log(moduloB)