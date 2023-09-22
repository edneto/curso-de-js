const name = "Luiz"

//funções: 
//Para invocar uma função apenas inserimos o nome dela e abrimos e fechamos os parentes '()'
// As funções são criadas sozinhas.
const sayHi = () => 'Oi'

//assim estamos invocando a função 'sayHi' e armazenando na const.
const greet = sayHi()
console.log(greet)


//métodos : 
//É uma função o que diferencia ele é a forma como ele é invocado.
// Métodos são funções associadas a objetos ou tipos de dados como string.
// Os métodos são criados nos objetos ou no tipo de dado em si.

//usamos anotação de ponto para invocar um método
name.toUpperCase()

//em ambos os casos usamos os parentes "()" para fazer a invocação e esses parentes podem
// receber argumentos. A única diferença é que na parte de traz da invocação do método,
//estamos referenciando um valor e colocando um ponto. ex. 'name.'toUpperCase()


// Se quiser armazenar esse valor em uma variável.
const nameInUpperCase = name.toUpperCase()
console.log(nameInUpperCase)


