var autoStart = false;

var currentTimer = "study"

var count = 0;

var studyTime = 25;
var shortTime = 5;
var longTime = 15;

const timerText = document.querySelector('#timer')
var totalTime = timerText.innerText.split(":")
var totalTimeObj = {
    "h": totalTime[0],
    "m": totalTime[1],
    "s": totalTime[2]
}

var totalSeconds = (timeToSeconds(totalTimeObj))

function study(mins){
    currentTimer = "study"
    
    stop()
    document.querySelector('#pomobtn').style.backgroundColor = "white"
    document.querySelector('#shortbtn').style.backgroundColor = "rgb(255, 0, 255)"
    document.querySelector('#longbtn').style.backgroundColor = "rgb(255, 0, 255)"
    document.querySelector('#progress').style.width = "0%"
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
    if(autoStart){
        start()
    }
}

function short(mins){
    currentTimer = "short"
    stop()
    document.querySelector('#pomobtn').style.backgroundColor = "rgb(255, 0, 255)"
    document.querySelector('#shortbtn').style.backgroundColor = "white"
    document.querySelector('#longbtn').style.backgroundColor = "rgb(255, 0, 255)"
    document.querySelector('#progress').style.width = "0%"
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
    if(autoStart){
        start()
    }

}

function long(mins){
    currentTimer = "long"
    stop()
    document.querySelector('#pomobtn').style.backgroundColor = "rgb(255, 0, 255)"
    document.querySelector('#shortbtn').style.backgroundColor = "rgb(255, 0, 255)"
    document.querySelector('#longbtn').style.backgroundColor = "white"
    document.querySelector('#progress').style.width = "0%"
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
    if(autoStart){
        start()
    }

}
var progress
var timer
var mixBut = document.getElementById("mixBut");
mixBut.addEventListener("click", start);
function start(){
    if(currentTimer == "study"){
        document.querySelector('#pomobtn').style.backgroundColor = "white"
    }
    else if(currentTimer == "short"){
        document.querySelector('#shortbtn').style.backgroundColor = "white"
    }
    else if(currentTimer == "long"){
        document.querySelector('#longbtn').style.backgroundColor = "white"
    }
    mixBut.removeEventListener("click", start);
    mixBut.addEventListener("click", stop);
    mixBut.value = "stop";
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
        timerText.innerText = "˗ˏˋdone´ˎ˗"
        document.querySelector('#progress').style.width = "100%"
        //play sound
        var audio = new Audio('wood.mp3')
        audio.play();
        stop()
        document.querySelector('#pomobtn').style.backgroundColor = "rgb(255, 0, 255)"
        document.querySelector('#shortbtn').style.backgroundColor = "rgb(255, 0, 255)"
        document.querySelector('#longbtn').style.backgroundColor = "rgb(255, 0, 255)"
        if(autoStart){
            if(currentTimer === "study"){
                if(count%4&&count!=0){
                    count+=1
                    long(longTime)
                }
                else{
                    short(shortTime)
                    count++
                }    
            }
            else if(currentTimer === "short"){
                study(studyTime)
            }
            else if(currentTimer === "long"){
                study(studyTime)
            }
        }
    }
    
}, 1000);
}

function stop(){
    mixBut.removeEventListener("click", stop);
    mixBut.addEventListener("click", start);
    mixBut.value = "start";
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

const toggleButton = document.querySelector('#toggle-button')
toggleButton.addEventListener('change', () => {
    if(toggleButton.checked){
        autoStart = true  
    }
    else{
        autoStart = false
    }
}
)

function displaySettings(){
    document.querySelector('#modal').style.display = "block"
}

function closeSettings(){
    studyTime = document.querySelector('#study').value
    shortTime = document.querySelector('#short').value 
    longTime = document.querySelector('#long').value 
    document.querySelector('#modal').style.display = "none"

}