function criarProduto(nome, preco) {
        return {
                nome,
                preco,
                desconto: 01
        }
}

console.log(criarProduto("Notebook", 2199.9))
console.log(criarProduto("Ipad", 1199.9))