// pessoa -> 123(Endereço de memória) -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa-> 456(Endereço de memória) -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // Conjela o objeto, não pode fazer alterações
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)