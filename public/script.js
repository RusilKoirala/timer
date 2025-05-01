
//Constants
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timeInput = document.getElementById("timeInput");

// Variables
let time = 10;
let savtime = time;
let countdownRunning = false;
let pause = true;

//Formating time for 00:00:00
function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600); 
    var minutes = Math.floor((seconds % 3600) / 60);
    var seconds = seconds % 60; 

    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return hours + ":" + minutes + ":" + seconds;
}


timeInput.onchange = function () {
    time = parseInt(timeInput.value);
    savtime = time;
    timerDisplay.textContent = formatTime(time);
};

// Start
startBtn.onclick = function () {
    if (countdownRunning && !pause) return; 

    pause = false;
    countdownRunning = true;

    countdown = setInterval(() => {
        time--;
        timerDisplay.textContent = formatTime(time);

        if (time === 0) {
            clearInterval(countdown);
            countdown = null;
            time = savtime;
            countdownRunning = false;
            pause = true;
        }
    }, 1000);
};

// Pause
pauseBtn.onclick = function () {
    clearInterval(countdown);
    countdown = null;
    pause = true; 
};


// Reset
resetBtn.onclick = function () {
    clearInterval(countdown);
    countdown = null;
    time = savtime;
    timerDisplay.textContent = formatTime(time);
    countdownRunning = false; 
    pause = true; 
};
