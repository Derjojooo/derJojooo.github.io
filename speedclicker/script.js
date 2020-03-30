var time = 0
var count = 0
const btnStart = document.getElementById("button");
const timerText = document.getElementById("timerText");
const clickCounter = document.getElementById('clickCounter');
const highscore = document.getElementById('highscore');
var check = true;

console.log(localStorage.getItem("highscoreValue"));
highscore.innerHTML = localStorage.getItem("highscoreValue");

function checking() {
  if (check) {
    timer()
    check = false
  }
}


function timer() {
  if (time < 9.9) {
    time += 0.1
    var num = time;
    timerText.innerHTML = time.toFixed(2) + " von 10.00";
    setTimeout(() => { timer() }, 100);
  } else {
    btnStart.disabled = true;
      if (count > localStorage.getItem("highscoreValue")) {
        localStorage.setItem("highscoreValue", count.valueOf());
        alert("New Highscore of " + localStorage.getItem("highscoreValue"));
        highscore.innerHTML = localStorage.getItem("highscoreValue");
      }
  }
}



btnStart.addEventListener("click", function() {
  count++
  clickCounter.innerHTML = count;
  checking()
});

highscore.innerHTML = localStorage.getItem("highscoreValue");
