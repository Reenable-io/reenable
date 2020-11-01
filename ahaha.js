identite = prompt("t'es nico?", "oui / non")
if (identite = "oui") {
    var newDiv = document.createElement('div')
    var textHere = document.createTextNode('ok')
    newDiv.appendChild(textHere)
    var addHere = document.getElementById('addHere')
    addHere.appendChild(newDiv)
}