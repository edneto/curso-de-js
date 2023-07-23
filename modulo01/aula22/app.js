// Conversão de tipos

let score = '100'
//console.log(score + 1)// esta concatenando: saida: 1001

//convertendo Number
score = Number(score)
//console.log(score + 1)
//console.log(typeof score) // verifica tipo


const crazyConversion = Number('Maça')
//tentar converter um valor que não faz sentido em uma Number
//saida: NaN
// console.log(crazyConversion)

const convertedNumber = String(97)
const booleanConversion = Boolean(10)
console.log(booleanConversion, typeof booleanConversion)

/**
 * Valores falsy:
 * false
 * 0
 * "",'',``
 * null
 * undefined
 * NaN
 */

/**
 * Valores truthy
 * Qualquer valor que não é falsy
 */