//ForEach e callbacks

//callbacks: callback é uma função que é passada para outra função como um argumento para ser executada posteriormente.

//forEach: forEach é um método utilizado para percorrer arrays, ele recebe como argumento uma função, ou seja, uma 'callback'. A função será executada para todo elemento do array.

// Sintaxe básica:

//callback
const myFunc = callback => {
    const value = 77
    callback(value)
}

// invocamos a função que executa o callback
myFunc(number => {
    console.log(number)
})

//forEach
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (item, index, array) {
    // código
})



// Exemplo completo:
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

// socialNetworks.forEach((socialNetwork, index, array) => {
//     console.log(index, socialNetwork, array)
// })
// a função de callback dentro do 'forEach' pode receber 3 parâmetros.
// 1º como item atual do que esta sendo iterado.
// 2º index do array atual
// 3º e o array que esta sendo iterado

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)

//Podemos também trabalhar com a função desacoplada o que pode nos
//ajudar a deixar o nosso código mais organizado, mais legível e
//poderemos reutilizar a função em outros locais se necessário