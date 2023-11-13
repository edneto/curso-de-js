const button = document.querySelector('button')
let myClass = button.classList
console.log(myClass.value)

button.addEventListener('click', () => {
    (myClass.value !== 'myRed') ? colorBlue() : colorRed()
})

const colorBlue = () => {
    button.classList.toggle('myRed')
    button.classList.toggle('myBlue')
}

const colorRed = () => {
    button.classList.toggle('myBlue')
    button.classList.toggle('myRed')
}