//Parte 1 - resolução de exercício

// Parte 2
//# O que são funções?

/* - As funções são do tipo Object. Permitem a criação de um bloco de códigos
que pode ser invocada e interpretada quando precisarmos
* Podemos pensar em uma função como uma caixa que faz alguma coisa em particular e quando precisarmos dela
* só precisaremos invocar ela.
*/

// - Exemplo de nome de uma função criada: Função showMessage.
// - exemplo dela sendo invocada: showMessage()

/****************/

// Parte 3

// Function declaration
//  Hoisting - function declaration podem usar  hoisting
function sayHi() {
    console.log('oi')
}

// Function expression - atribui a função a uma variável
//  Hoisting - function expression não usam hoisting ou seja 
//sempre faça o chamado da função após a função.
const showFood = function () {
    console.log('pizza')
}



//sayHi() //invocar, chamar, executar: o código
//showFood()

// Parte 4
// Argumentos, parâmetros  e default parâmetros
// "name" representa uma varivel local que só pode ser usada no bloco da função
// para passa valor
// const myFunc = function (name) {
//     console.log(`Oi, ${name}!`)
// }

//myFunc() // resposta: Oi, undefined!

// como no primeiro exemplo não foi atribuído um valor para "name" por padrão o JavaScript 
// coloca "undefined" e converte para string


// valores passados entre os parenteses da declaração de uma função são chamados de 
// parâmetros.
//Pode se ter multiplos parâmetros na declaração de uma função
//A ordem dos parâmetros não importa dentro do bloco da função
// const myFunc = function (name, lastName) {
//     console.log(`Oi, ${name} ${lastName}!`)
// }

//myFunc('Luiz', 'Lima')
//Valores passados entre os parenteses da invocação é chamado de "argumentos".
// A ordem dos argumentos tem que seguir a ordem dos parâmetros.


//Podemos declara valores default nos parâmetros para o caso de que não tenha argumentos sendo passados
const myFunc = function (name = 'Joaquim', lastName = 'Santos') {
    console.log(`Oi, ${name} ${lastName}!`)
}

myFunc() // Oi, Joaquim Santos!
myFunc('Edson')// Oi, Edson Santos!


//Parte 5

//Retornando os valores
const double = function (number) {
    return number * 2
}

let result = double(4)

const showResult = function (value) {
    return `O resultado é: ${value}`
}

console.log(showResult(result))
