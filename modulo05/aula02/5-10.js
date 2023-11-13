const link = document.querySelector('a') // primeiro link do document

// console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://edsonllima.github.io')
link.innerText = 'Website do Edson Lima'

const paragraph = document.querySelector('.error')

//obtendo o valor do atributo da classe
console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'success')

paragraph.setAttribute('style', 'color: teal')
