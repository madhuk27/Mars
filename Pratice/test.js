let randomNumber = Math.floor(Math.random() * 10) + 1

let result = document.querySelector(".result")
let attempt = document.querySelector(".attempt")
let button = document.getElementById("button")
let guess = document.getElementById("guess")


button.addEventListener("click", checkGuess)

let attemptCount = 1 // Renamed this from attempt and moved to global scope

function checkGuess() {
    let guessValue = document.getElementById("guess").value
    attempt.innerHTML = "Attempt n: " + attemptCount
    if (guessValue < randomNumber) {
        result.innerHTML = "Your guess is too low";
    } else if (guessValue > randomNumber) {
        result.innerHTML = "Your guess is too high";
    } else {
        result.innerHTML = "You guessed correctly";
    }
    attemptCount++;
}


