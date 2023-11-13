const paragraph = document.querySelector('p')

// console.log(paragraph.innerText)
// paragraph.innerHTML += " Texto inserido"

const paragraphs = document.querySelectorAll('p')
// console.log(paragraphs)

// paragraphs.forEach((paragraph, index) => {
//     paragraph.innerHTML += ` Novo texto ${index + 1}`
// })

const div = document.querySelector('.content')
// console.log(div.innerHTML)

// div.innerHTML += '<h2>Novo h2</h2>'

const people = ['Jonatan', 'Vinícius', 'Diego']

people.forEach(person => {
    div.innerHTML += ` <p>${person}</p>`
})