const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "iPad Pro", preco: 4199, fragil: true},
    { nome: "Copo de Vidro", preco: 12.49, fragil: true},
    { nome: "Copo de Plástico", preco: 18.99, fragil: false},
]

const produtosFragies = produtos.filter(function(p) {
    return p.fragil 
})

console.log(produtosFragies)

const resultado = produtosFragies.filter(function(p) {
    return p.preco >= 500
})

console.log(resultado)