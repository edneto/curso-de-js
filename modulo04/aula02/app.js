//A palavra chave this

let user = {
    name: 'Jhonn',
    age: 31,
    email: 'jhonn@gmail.com',
    city: 'San José',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login() {
        console.log('Usuário logado')
    },
    logout() {
        console.log('Usuário deslogado')
    },
    logBlogPost() {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })
    }
}

user.blogPosts.push('Feijão de coco')
user.blogPosts.push('Arroz frito')
user.logBlogPost()