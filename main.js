const timerText = document.querySelector('#timer')
var totalTime = timerText.innerText.split(":")
var totalTimeObj = {
    "h": totalTime[0],
    "m": totalTime[1],
    "s": totalTime[2]
}

var totalSeconds = (timeToSeconds(totalTimeObj))

function study(mins){
    stop()
    if(mins>10){
        timerText.innerText = `00:${mins}:00`
    }
    else{
        timerText.innerText = `00:0${mins}:00`
    }
    var totalTime = timerText.innerText.split(":")
    var totalTimeObj = {
    "h": totalTime[0],
    "m": totalTime[1],
    "s": totalTime[2]
}

totalSeconds = (timeToSeconds(totalTimeObj))

}

function short(mins){
    stop()
    if(mins>10){
        timerText.innerText = `00:${mins}:00`
    }
    else{
        timerText.innerText = `00:0${mins}:00`
    }
    var totalTime = timerText.innerText.split(":")
    var totalTimeObj = {
    "h": totalTime[0],
    "m": totalTime[1],
    "s": totalTime[2]
}

totalSeconds = (timeToSeconds(totalTimeObj))

}

function long(mins){
    stop()
    if(mins>10){
        timerText.innerText = `00:${mins}:00`
    }
    else{
        timerText.innerText = `00:0${mins}:00`
    }
    var totalTime = timerText.innerText.split(":")
    var totalTimeObj = {
    "h": totalTime[0],
    "m": totalTime[1],
    "s": totalTime[2]
}

totalSeconds = (timeToSeconds(totalTimeObj))

}
var progress
var timer
function start(){
    clearInterval(timer)
    var time = timerText.innerText.split(":")
    //convert time to timeobject
    var timeObj = {
        h: parseInt(time[0]),
        m: parseInt(time[1]),
        s: parseInt(time[2])
    }
    var timeInSeconds = timeToSeconds(timeObj)
    timer = setInterval(() => {
    
    if(timeInSeconds>1){
        timeInSeconds-=1
        timerText.innerText = secondsToTime(timeInSeconds).h + ":" + secondsToTime(timeInSeconds).m + ":" + secondsToTime(timeInSeconds).s
        progress = (100-((timeInSeconds/(totalSeconds))*100))
        document.querySelector('#progress').style.width = progress + "%"
    }
    else{
        timerText.innerText = "done"
        document.querySelector('#progress').style.width = "100%"
    }
    
}, 1000);
}

function stop(){
    clearInterval(timer)
}

function timeToSeconds(time){
    var hours = parseInt(time.h * 60 * 60)
    var minutes = parseInt(time.m * 60)
    var seconds = parseInt(time.s)
    return hours + minutes + seconds
}

function secondsToTime(secs){
    var hours = Math.floor(secs / (60 * 60));
    
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    //add leading zero
    if(hours<10){
        hours = "0" + hours
    }
    if(minutes<10){
        minutes = "0" + minutes
    }
    if(seconds<10){
        seconds = "0" + seconds
    }
    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}