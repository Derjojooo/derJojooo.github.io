var time = 0
var count = 0
var output = 0


function start() {

  counterRepeat() 
  function counterRepeat() {
    window.setInterval(counter(), 100);
  }

  function counter() {
    time++
    console.log(time)
    document.getElementById('output').innerHTML = time;
  }

}



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}
