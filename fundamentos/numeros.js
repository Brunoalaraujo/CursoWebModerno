const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // 'isInteger' Retorna valor booleano
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // 'toFixed' coloca limite nas casas decimais 
console.log(media.toString(2)) // 'toString' retorna o valor em String e '(2)' converte o valor em binário
console.log(typeof media) // 'typeof' retornar o tipo da constante
console.log(typeof Number)