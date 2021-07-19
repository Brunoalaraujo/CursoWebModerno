const { functionsIn } = require("lodash")

// Arrow Funciton
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Funciotn (this)
const lexico1 = () => console.log( this == exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
function log(texto = 'NODE') {
    console.log(texto)
}

log()
log('Sou mias forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))