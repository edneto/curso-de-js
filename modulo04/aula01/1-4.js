//Adicionando métodos

//- Métodos são funções que são criadas dentro dos objetos

let user = {
    name: 'Jhonn',
    age: 31,
    email: 'jhonn@gmail.com',
    city: 'San José',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuário logado')
    },
    logout: function () {
        console.log('Usuário deslogado')
    }
}
//método login() - criando dentro do objeto user
user.login()
user.logout()

// - Funções criadas fora de objetos são chamadas de funções e
// funções criadas dentro de objetos são métodos

