//Tipos de referência

let userOne = { name: 'Edson', score: 100 }
let userTwo = userOne

console.log(`userOne: ${userOne.score} | userTwo: ${userTwo.score}`)

userTwo.score += 50

console.log(`userOne: ${userOne.score} | userTwo: ${userTwo.score}`)

