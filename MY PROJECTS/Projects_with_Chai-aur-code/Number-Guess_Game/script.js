let result = document.querySelector(".message");
let Btn = document.querySelector(".guess-btn");
let greater = document.querySelector(".guess");
let previous = document.querySelector(".previous");
let attemptsText = document.querySelector(".attempts");
let resetBtn = document.querySelector(".reset-btn");

let guessNumber = Math.floor(Math.random() * 10) + 1;
let previousGuesses = [];
let attempts = 10;

Btn.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess-input").value);

  if (!guess || guess < 1 || guess > 10) {
    result.innerHTML = "Enter number between 1 and 10";
    return;
  }

  attempts--;
  attemptsText.innerHTML = "Attempts: " + attempts;

  previousGuesses.push(guess);
  previous.innerHTML = "Previous Guesses: " + previousGuesses.join(", ");

  if (guess === guessNumber) {
    result.innerHTML = "🎉 Correct Guess!";
    greater.innerHTML = "";
    Btn.disabled = true;
  } else if (guess > guessNumber) {
    result.innerHTML = "Wrong Guess";
    greater.innerHTML = "Your guess is Greater";
  } else {
    result.innerHTML = "Wrong Guess";
    greater.innerHTML = "Your guess is Smaller";
  }

  if (attempts === 0 && guess !== guessNumber) {
    result.innerHTML = "Game Over! Number was " + guessNumber;
    Btn.disabled = true;
  }
  if (attempts === 0) {
    Btn.disabled = true; // disable button
    Btn.style.backgroundColor = "black"; // change color to black
  }
});

resetBtn.addEventListener("click", () => {
  guessNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 10;
  previousGuesses = [];

  result.innerHTML = "Result will appear here";
  greater.innerHTML = "";
  previous.innerHTML = "";
  attemptsText.innerHTML = "Attempts: 10";
  document.querySelector(".guess-input").value = "";
  Btn.disabled = false;
  Btn.style.backgroundColor = "#ff9800";
});
