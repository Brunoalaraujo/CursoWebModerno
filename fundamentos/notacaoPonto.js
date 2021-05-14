console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola"
//obj1["nome"] = "Bola2" Outra forma de usar notação Ponto
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}
// this. cria um atributo público ou objeto
// Podemos acessar os membros de um objeto ou função utilizando a Notação Ponto
const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()