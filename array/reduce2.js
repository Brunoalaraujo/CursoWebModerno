const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Ana', nota: 8.7, bolsista: true },

]

const bolsistas = alunos.map(a => a.bolsista)
console.log(bolsistas)

// Desafio 1: Todos os alunos são bolsistas?

console.log(bolsistas.reduce((resultado, bolsistas) => resultado && bolsistas ))

// Desafio 2: Algum aluno é bolsista?
console.log(bolsistas.reduce((resultado, bolsistas) => resultado || bolsistas ))