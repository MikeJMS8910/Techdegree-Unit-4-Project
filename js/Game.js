/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

let hearts = 5

function loseHeart() {
    hearts -= 1;
    if(hearts == 0) {
        document.getElementById("overlay").style.display = "block"
        document.getElementById("overlay").className = "lose"
        document.getElementById("game-over-message").innerHTML = "Sorry, you lose!"
        document.getElementById("btn__reset").innerHTML = "Play Again"
    }

    document.querySelector("ol").querySelectorAll("li")[hearts].querySelector("img").src = "images/lostHeart.png"
}

function testKey(key) {
    good = false
    finished = true
    for(x = 0; x < keys.length; x++) {
        if(key.toLowerCase() == keys[x].toLowerCase()) {
            good = true
            document.getElementById("phrase").querySelectorAll("ul")[1].querySelectorAll("li")[x].className = "show"
        } else {
            if(document.getElementById("phrase").querySelectorAll("ul")[1].querySelectorAll("li")[x].className !== "show") {
                finished = false
            }
        }
    }

    if(good == false) {
        loseHeart()
    } else {
        if(finished == true) {
            document.getElementById("overlay").style.display = "block"
            document.getElementById("overlay").className = "win"
            document.getElementById("game-over-message").innerHTML = "Congrats, you win!"
            document.getElementById("btn__reset").innerHTML = "Play Again"
        }
    }

    return good
}

document.getElementById("btn__reset").addEventListener("click", (e) => {
    if(document.getElementById("btn__reset").innerHTML == "Play Again") {
        location.reload()
    } else {
        e.target.parentNode.style.display = "none"
    }
});

for(x = 0; x < 3; x++) {
    document.getElementById("qwerty").querySelectorAll(".keyrow")[x].querySelectorAll(".key").forEach(item => {
        item.addEventListener("click", (e) => {
            e.target.disabled = true
            if(testKey(e.target.innerHTML)) {
                e.target.className = "chosen"
            } else {
                e.target.className = "wrong"
            }
        })
    });
}