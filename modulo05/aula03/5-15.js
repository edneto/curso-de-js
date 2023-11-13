//usando nas aulas 5-15, 5-16

/***************
// aula 5-15
// const button = document.querySelector("button")

// button.addEventListener('click', () => {
//     console.log("clicou no botão")
// })
***************/

const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target

        clickedElement.remove()
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo item'
    // ul.append(li)
    ul.prepend(li)

})

