// initialize all variable
let milli_seconds = 0;
let second = 0;
let minutes = 0;
let h2 = document.getElementById("time");

let start = document.getElementById("button-start");
let stop = document.getElementById("button-stop");
let clear = document.getElementById("button-reset");

let interval = 1;

//membuat fungsi count
function count() {
  interval = 1;
  milli_seconds += interval;

  //conditional milli_seconds
  if (milli_seconds >= 100) {
    milli_seconds = 0;
    seconds += interval;
  }

  //conditional seconds
  if (seconds >= 60) {
    seconds = 0;
    minutes += interval;
  }

  h2.textContent =
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    " : " +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    " : " +
    (milli_seconds > 9 ? milli_seconds : "0" + milli_seconds);

  timer();
}

// membuat fungsi Timer
function timer() {
  t = setTimeout(count, 10);
}

//start button
start.onclick = count;

//stop button
stop.onclick = function () {
  clearTimeout(t);
};

//reset button
clear.onclick = function () {
  h2.textContent = "00 : 00 : 00";
  seconds = 0;
  minutes = 0;
  milli_seconds = 0;
  interval = 0;
};
