//Criando um objeto literal

/************************* */

// da mesma forma que se usa [] para criar um
//ARRAY, se usar {} para criar um objeto literal.
//*name* -> é o nome da propriedade ou pode se chamar chave
//*'Jhonn'* -> è o valor da propriedade
//ou seja objeto literal recebe um propriedade que contem *nome* e *valo*.


let user = {
    name: 'Jhonn',
    age: 31,
    email: 'jhonn@gmail.com',
    city: 'San José',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata']
}
//acessar o valor de uma propriedade
console.log(user.blogPosts)

//modificar o valor com notação de ponto
user.age = 38
console.log(user.age)




//acessar propriedade com notação de colchete, passe o nome da propriedade como string
//precisa ser uma string ou uma variável que armazena uma string
console.log(user['name'])

//Usando variável para com anotação de colchete
const key = 'email'

console.log(user[key])

console.log(typeof user)