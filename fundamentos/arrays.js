const valores = [7.7, 8.9, 6.3, 9.2] // a , sepera os elementos dentro da array
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //length conta quantos elementos tem na array

valores.push({id: 3}, false, null, "teste") //push adiciona elementos na array
console.log(valores)

console.log(valores.pop()) // pop retorna o ultimo valor da array
delete valores[0]
console.log(valores)

console.log(typeof valores)