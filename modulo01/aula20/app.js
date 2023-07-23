//Boolean e comparações

console.log(true, false, 'true', 'false')
/* uso booleans quando preciso verificar se
é verdadeiro ou falso um bloco de código
*/


// Métodos podem retornar booleans
const email = 'brucewayne@edsonlima.com.br'
const incluedes = email.includes('@')
//o método includes verificar o valor dentro 
//da string e retorna true ou false

// console.log(incluedes)


const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger')
// quando se trata de array o include tenta fazer
// um match com o array para verificar o valor
// console.log(arrayIncludes)


// Operadores de comparação
const age = 31
const name = 'edson'

// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 35)
// console.log(age != 31)
// console.log(age > 30)
// console.log(age > 31)
// console.log(age < 31)
// console.log(age < 32)
// console.log(age <= 31)
// console.log(age >= 31)

console.log(name == 'edson')
console.log(name == 'Edson')
console.log(name > 'belinha') // as ultimas letras do alfabeto são maiores que as primeiras
console.log(name > 'Edson')
console.log(name > 'Belinha') // as letras minusculas tem maior valor que as maiúsculas

