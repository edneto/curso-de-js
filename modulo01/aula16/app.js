//Arrays 
let heroes = ['Batman', 'Catwoman', 'Iron Man']
const ages = [31, 25, 39, 40]
const randomArray = ['Parker', 'Diana', 19, 18]

/*
alterando index do array
heroes[2] = 'Spider-Man'
console.log(ages[2])
*/

//Métodos de array
const joinheroes = heroes.join('-')
const indexOf25 = ages.indexOf('25')//quando é passado um valor que não existe no array o retonro é -1
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])//conccatenação de arrays
const pushToHeroes = heroes.push('Cyclops', 'Hulk')//empura/adiciona um novo valor ao array heroes
const popHeroes = heroes.pop()//remove ultimo item do array e retorna esse item e no caso atribuimos ao popHeroes 

console.log(popHeroes, heroes)
