const secretPhrases = ["never", "you", "bullet", "break"];

let underScore = document.querySelector("#clue p");
randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
console.log(randomItem);
let rightChoice = [];
let mistakes = 0;

function setUnderScores() {
  let splitted = randomItem.split("");
  let result = splitted.map((letter) =>
    rightChoice.indexOf(letter) == -1 ? "_" : letter
  );
  result = result.join("");
  underScore.innerHTML = result;
  if (result == randomItem) {
    document.querySelector("#image img").src = "assets/winner.png";
    document.querySelector("#gameover p").style.display = "block";
  }
}

function click(event) {
  check(event.target.id);
}

function check(letter) {
  document.getElementById(letter.toUpperCase()).className = "used";
  if (randomItem.indexOf(letter) == -1) {
    mistakes++;
    if (mistakes < 6) {
      document.querySelector(
        "#image img"
      ).src = `assets/hangman${mistakes}.png`;
    } else {
      document.querySelector("#image img").src = "assets/hangman6.png";
      document.querySelector("#gameover p").style.display = "block";
      underScore.innerHTML = randomItem;
    }
  } else {
    rightChoice.push(letter);
    setUnderScores();
  }
}

function keyboard(event) {
  check(event.key);
}

document.getElementById("letters").addEventListener("click", click);
window.addEventListener("keydown", keyboard);
setUnderScores();
