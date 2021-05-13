let valor // não inicializada
console.log(valor)

valor = null // ausência de valor, melhor forma para zera uma variável
console.log(valor)
// console.log(valor.toString()) erro!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete prodruto.preco, é a melhor forma de retirar um atributo
console.log(produto)

produto.preco = null // sem preço, melhor forma de falar que o produto não tem preço
console.log(!!produto.preco)
console.log(produto)