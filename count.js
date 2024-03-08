function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () { 
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function initializeTimer(durationInMinutes, displayElementId) {
    var display = document.getElementById(displayElementId);
    startTimer(durationInMinutes * 60, display);
}
