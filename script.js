'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0;


const setMessage = (message) => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        setMessage("No Number! 🙀")
    }

    else if (guess === secretNumber) {
        setMessage("That's the right Number 🙋🏻‍♂️")
        highScore < score && (highScore = score)
        document.querySelector('body').style.backgroundColor = "green"
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.label-highscore').textContent = `🥇 Highscore: ${highScore}`

    }
    else if (guess !== secretNumber) {
        score--
        setMessage(guess > secretNumber ? "Too high 📈" : "Too low 📉")
    }

    if (score === 0) {
        setMessage("Sorry 😢 you lost the game 🔥")
    }

    document.querySelector('.label-score').textContent = `💯 Score: ${score}`
})


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.guess').value = ""
    secretNumber = Math.trunc(Math.random() * 20) + 1
    setMessage("Start guessing...")
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`
    document.querySelector('.number').textContent = '?'

})