function funcionarOuNao(valor, chaceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chaceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))