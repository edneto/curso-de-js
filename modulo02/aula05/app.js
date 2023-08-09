//if

// Essa expressão será exibida pois 'age' é maior que 18 ou seja TRUE
// const age = 19
// if (age > 18) {
//     console.log('Você tem mais de 18 anos.')
// }


//Essa expressão não será exibida pois é FALSE que seu tamanho é maior que 5.
// const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']
// if (simpsons.length >= 5) {
//     console.log('o array tem bastante personagens')
// }



// const password = 'oi123'

// if (password.length >= 8) {
//     console.log('essa senha tem 8 ou mais caracteres')
// }


//Usando o If, Else
// const password = 'oi123'

// if (password.length >= 8) {
//     console.log('essa senha tem 8 ou mais caracteres')
// } else {
//     console.log('a senha deve conter 8 ou mais caracteres')
// }


//Usando multiplas verificações
// const password = 'oi123oi123393'

// if (password.length >= 12) {
//     console.log('senha muito forte =)')
// } else if (password.length >= 8) {
//     console.log('essa senha tem 8 ou mais caracteres')
// } else {
//     console.log('a senha deve conter 8 ou mais caracteres')
// }


//combinando condições diferentes em uma verificação
//usando operadores lógicos 'OU' || e 'E' &&
//const password = 'oij2301dujfo'  condição 1 de exemplo
const password = 'o1j'

if (password.length >= 12 && password.includes('1')) {
    console.log('senha muito forte =)')
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('senha forte')
} else {
    console.log('a senha deve conter 8 ou mais caracteres')
}