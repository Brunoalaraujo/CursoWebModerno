// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa // {} representa o destructuring, retire do objeto pessoa o nome e a idade
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // nome: cria uma varia com a letra n
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num } } = pessoa
console.log(ag, num)