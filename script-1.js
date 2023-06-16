// initialize all variables
let milli_seconds = 0; // declare and initialize variable for milliseconds
let seconds = 0; // declare and initialize variable for seconds
let minutes = 0; // declare and initialize variable for minutes
let h2 = document.getElementById("time"); // get the HTML element with the ID "time" and store it in the variable h2

// get the HTML elements with the IDs "button-start", "button-stop", and "button-reset" and store them in the variables start, stop, and clear
let start = document.getElementById("button-start");
let stop = document.getElementById("button-stop");
let clear = document.getElementById("button-reset");

let interval = 1; // set the initial interval to 1 second

// create a function called count
function count() {
  interval = 1; // set the interval to 1 second
  milli_seconds += interval; // add 1 second to the milliseconds variable

  // check if the milliseconds variable is greater than or equal to 100
  if (milli_seconds >= 100) {
    milli_seconds = 0; // reset the milliseconds variable to 0
    seconds += interval; // add 1 second to the seconds variable
  }

  // check if the seconds variable is greater than or equal to 60
  if (seconds >= 60) {
    seconds = 0; // reset the seconds variable to 0
    minutes += interval; // add 1 minute to the minutes variable
  }

  // update the text content of the HTML element with the ID "time" with the current time
  h2.textContent =
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    " : " +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    " : " +
    (milli_seconds > 9 ? milli_seconds : "0" + milli_seconds);

  timer(); // call the timer function
}

// create a function called timer
function timer() {
  t = setTimeout(count, 10); // call the count function every 10 milliseconds
}

// add an event listener to the HTML element with the ID "button-start" that calls the count function when clicked
start.onclick = count;

// add an event listener to the HTML element with the ID "button-stop" that clears the timeout when clicked
stop.onclick = function () {
  clearTimeout(t); // clear the timeout
};

// add an event listener to the HTML element with the ID "button-reset" that resets all variables when clicked
clear.onclick = function () {
  h2.textContent = "00 : 00 : 00"; // reset the time to 00 : 00 : 00
  seconds = 0; // reset the seconds variable to 0
  minutes = 0; // reset the minutes variable to 0
  milli_seconds = 0; // reset the milliseconds variable to 0
  interval = 0; // reset the interval to 0
};
