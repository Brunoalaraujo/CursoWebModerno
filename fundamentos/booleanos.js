let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! = negação, !! = verdadeiro

console.log("os verdadeiros ...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ") // espaço
console.log(!!"texto")
console.log(!![]) // array vazio
console.log(!!{}) // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos ...")
console.log(!!0)
console.log(!!"") // string vazia 
console.log(!!null)
console.log(!!NaN)  
console.log(!!undefined)  
console.log(!!(isAtivo = false))

console.log("para finalizar ...")
console.log(!!("" || null || 0 || " ")) // || = ou, basta 1 dos elementos ser verdadeiro para representar o conjunto

let nome = ""
console.log(nome || "Desconhecido")

let nome1 = "Lucas"
console.log(nome1 || "Desconhecido")