const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna a letra que está na 4 posição, começa a contagem do 0 (C = 0, o = 1, d = 3)
console.log(escola.charAt(5)) // retorna valor nulo 
console.log(escola.charCodeAt(3)) // retorna o valor da tabela unicode do 3 índice
console.log(escola.indexOf('3')) // retorna o valor que está no índice 3

console.log(escola.substring(1)) // retorna valor começando do índice 1
console.log(escola.substring(0, 3)) // retorna o intervalo sem incluir o último índice

console.log("Escola ".concat(escola).concat("!")) // concat = soma das strings para sairem juntas no console
console.log("Escola " + escola + "!")
console.log(escola.replace(3, "e")) // substitui o número 3 pela letra e 

console.log("Ana,Maria,Pedro".split(",")) // forma uma array separando os elementos com , 