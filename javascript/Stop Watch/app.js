var min = 0
var sec = 0
var millisec = 0
var getmin = document.getElementById('minutes')
var getsec = document.getElementById('seconds')
var getmsec = document.getElementById('mseconds')
var interval;

function start() {
    interval = setInterval(function () {

        millisec++
        getmsec.innerHTML = millisec
        if (millisec >= 100) {
            millisec = 0
            sec++
            getsec.innerHTML = sec
        }
        else if (sec >= 60) {
            sec = 0
            min++
            getmin.innerHTML = min
        }
    }, 10);
    document.getElementById('sss').disabled = true
}

function stop() {
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}

function reset() {
    min = 0
    sec = 0
    millisec = 0
    getmin.innerHTML = min
    getsec.innerHTML = sec
    getmsec.innerHTML = millisec
}