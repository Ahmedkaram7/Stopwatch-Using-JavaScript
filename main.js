let [seconds, minutes, hours] = [0, 0, 0];
let times = document.querySelector(".time-parg");
let startIcon = document.querySelector(".start-icon");
let stopIcon = document.querySelector(".stop-icon");
let resetIcon = document.querySelector(".reset-icon");
let timer = null;
function StopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  times.innerHTML = `${hours < 10 ? "0" + hours : hours} : ${
    minutes < 10 ? "0" + minutes : minutes
  } : ${seconds < 10 ? "0" + seconds : seconds}`;
}
function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(StopWatch, 1000);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  times.innerHTML = "00 : 00 : 00";
  watchStop();
}
startIcon.addEventListener("click", watchStart);
stopIcon.addEventListener("click", watchStop);
resetIcon.addEventListener("click", watchReset);
