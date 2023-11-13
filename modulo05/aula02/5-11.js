const title = document.querySelector('h1')

// se observar o objeto style no console vai encontrar as propriedade do objeto
console.log(title.style)

//se fizer title.style.color vai encontrar o valor da propriedade color
console.log(title.style.color) //blue

// title.setAttribute('style', 'margin: 50px')

title.style.margin = '50px'
title.style.padding = "50px 25px"
title.style.color = "teal"
title.style.fontSize = "5rem"
title.style.background = "#0000002B"
title.style.borderRadius = "20px"
title.style.textAlign = "center"
title.style.margin = ''
