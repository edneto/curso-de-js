// Obter um elemento através do ID
const title = document.getElementById('title')
console.log(title)

// Obter um elemento através do nome da classe
const errors = document.getElementsByClassName('error')
console.log(errors)

// consultando por anotação de colchete o conteúdo do HTMLCollection
console.log(errors[0])

// Da erro pois não existe esse método no HTMLCollection
errors.forEach(error => {
    console.log(error)
});

// Obter um elemento através do nome da tag
const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)