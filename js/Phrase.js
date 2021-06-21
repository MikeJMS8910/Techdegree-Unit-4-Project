/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


const possiblePhrases = ["This is Phrase Hunter", "Programming is Fun", "You Win", "Congratulations"]

let selectedPhrase = possiblePhrases[Math.floor(Math.random() * 4)]

let keys = selectedPhrase.split("")

let createdKeyRow = document.createElement("ul")
document.getElementById("phrase").appendChild(createdKeyRow)

for(x = 0; x < keys.length; x++) {
    let newKey = document.createElement("li")
    newKey.innerHTML = keys[x]
    newKey.className = "hide letter"
    if(newKey.innerHTML == " ") {
        newKey.className = "space"
        newKey.style.opacity = 0
    }
    createdKeyRow.appendChild(newKey)
}
