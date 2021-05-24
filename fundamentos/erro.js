function tratarErroELancar(error) {
    // throw new Erro("...")
    // throw 10
    // throw true
    // throw "mensagem"
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { nome: "Roberto" } //erro no nome, name é o certo
imprimirNomeGritado(obj)