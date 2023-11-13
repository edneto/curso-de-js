const h1 = document.querySelector("h1")

h1.addEventListener("click", () => {
    h1.classList.toggle("title")
    if (h1.textContent.includes("toggle")) {
        h1.textContent = `Obtendo, adicionando, removendo e alterando classes CSS`
    } else {
        h1.textContent = `Esse titulo foi alterado com toggle`
    }
})

const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(paragraph => {

    if (paragraph.textContent.includes("error")) {
        paragraph.classList.add("error")
    }

    if (paragraph.textContent.includes("success")) {
        paragraph.classList.add("success")
    }

});
