const article = document.querySelector('article')

//Adicionamos uma class em todos os filhos do article
Array.from(article.children).forEach(element => {
    element.classList.add('article-element')
})

const title = document.querySelector('h2')

//Descobrindo quem é o pai da Tag H2
console.log(title.parentElement)

//Descobrindo o pai do elemento pai do H2
console.log(title.parentElement.parentElement)

//Descobrindo o próximo irmão do elemento H2 de cima para baixo
console.log(title.nextElementSibling)

//Descobrindo o próximo irmão do elemento H2 de baixo para cima
console.log(title.previousElementSibling)