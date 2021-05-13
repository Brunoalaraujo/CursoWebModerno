const prod1 = {} //objeto é um conjunto de chaves(identificador) e valores
prod1.nome = "Celular Ultra Mega"
prod1.preco =  4998.90
prod1["Desconto Legal"] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    marca:{
        nome:"Tommy",
        modelo:{
            codigoId: 56842
        }
    }
}

console.log(prod2)