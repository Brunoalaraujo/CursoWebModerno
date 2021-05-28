const pessoa = {
    suadacao: "Bom dia!",
    falar() {
        console.log(this.suadacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e Orientação a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()