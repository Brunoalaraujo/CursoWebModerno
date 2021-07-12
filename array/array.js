console.log(typeof Array, typeof new Array, typeof [] )

let aprovados = new Array('Bia', 'Carlos', 'Ana') // não usar essa forma para cirar arrays
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Melhjor forma para cirar arrays
console.log(aprovados[0]) // Acessando elemento do arrays pelo indice
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // O array não possui esse elemento

aprovados[3] = 'Paulo' // Melhor forma para subrescrever em elemento do array
aprovados.push('Abia') // Melhor forma para adcionar novos elementos no array
console.log(aprovados.length) // length aponta o número de elementos no array

aprovados[9] = 'Rafael'
console.log(aprovados.length) // os elementos que estão entre o indice [4] e [9] vão aparecer no array com valor de undefined
console.log(aprovados [8] === undefined) 
console.log(aprovados [8] === null) 

console.log(aprovados)
aprovados.sort() // Ordena os elementos do array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)