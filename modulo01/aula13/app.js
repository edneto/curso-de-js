
const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
const postMessage = 'O post '' + postTitle + '', do ' + postAuthor + ', tem ' + postComments + ' comentários.'
console.log(postMessage)

// usando template strings
//const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`



//criando templates HTML
const html = `
<h2>${postTitle}</h2>
<p>${postAuthor}</p>
<span>Este post tem ${postComments} cpmentários</span>
`



