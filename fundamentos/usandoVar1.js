{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera) // Vairável global, por está fora de uma função, fica dentro do objeto window

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // erro, uma vez quem a variável está dentro de uma função