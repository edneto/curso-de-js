//funções tradicionais
// const double = function (number) {
//     return number * 2
// }


//arrow function
// const double = (number) => {
//     return number * 2
// }

/*
*quando escrevemos uma arrow function que só tem um parâmetro os parentes
*que envolvem esse parâmetro são opcionais
*
*obs: um default parâmetro não funciona nessa syntax 
*/
// const double = number => {
//     return number * 2
// }

/**
 * Quando uma arrow function não tem parâmetros é necessário deixar '()' vazio
 */

// const double = () => {
//     return 2 * 3
// }

/**
 * Outra característica importante de uma 'arrow function' é se o bloco de
 * código dela esta contendo somente uma linha retornando um valor, 
 * podemos remover a palavra chave 'return e eliminar as '{}' e deixar 
 * a 'arrow function só com uma linha'
 * 
 * Dessa forma o valor é retornado implicitamente sem a necessidade de 
 * declarar a palavra chave 'return', pode retornar um 'boolean', 'array',
 * 'string', 'number', ou  uma expressão
 * 
 * O que é: uma expressão em JavaScript? É qualquer pedaço de código que
 * resulta em um valor. ex. String, Array, Boolean, Número ou uma 
 * expressão como essa'number * 2'.
 * 
 * O que não seria possível retornar por não ser um valor? 
 * Ex. bloco IF, For pois não são valores e sim bloco de código
 */

const double = number => number * 2;

// se olhar agora a diferença entre as duas funções vai ver a redução de 
//código somente na mudança por syntax

//funções tradicionais
// const double = function (number) {
//     return number * 2
// }


const result = double(3)
console.log(`O resultado é: ${result}`);