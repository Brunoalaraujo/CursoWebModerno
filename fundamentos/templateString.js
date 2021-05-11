const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const teamplate = ` 
    Olá
    ${nome}!`
    // começa com a `` , ${nome} = interpolação, interpreta e substitui pelo conteúdo da constante, considera todos os aspectos textuais dentro da ``

console.log(concatenacao, teamplate)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up("cuidado")}!`)