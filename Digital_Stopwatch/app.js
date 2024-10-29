// shortWords used t - currenttime , T - timer , SW-stopwatch
let Hour = document.querySelector(".hour");
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");
let Stopwatchhour = document.querySelector(".Stopwatch-hour")
let Stopwatchmin = document.querySelector(".Stopwatch-min")
let Stopwatchsec = document.querySelector(".Stopwatch-sec")
let Stopwatchmilisec = document.querySelector(".Stopwatch-milisec")
let timerhour=document.querySelector(".timer-hour")
let timermin=document.querySelector(".timer-min")
let timersec=document.querySelector(".timer-sec")
let timermilisec=document.querySelector(".timer-milisec")
let mode = document.querySelector(".toggle-mode")
let ampm = document.querySelector(".ampm")
let currentTimebox = document.querySelector(".currenttime")
let stopwatchbox = document.querySelector(".stopwatch")
let timerbox = document.querySelector(".timer")
let controlbtns = document.querySelector(".btn-controls")
// buttons-start
let currTimeSW = document.querySelector("#currTime-stopwatch")
let currTimeT  = document.querySelector("#currTime-timer")
let currTimet  = document.querySelector("#currTime-time")
let stopwatchSW = document.querySelector("#stopwatch-stopwatch")
let stopwatchT  = document.querySelector("#stopwatch-timer")
let stopwatcht  = document.querySelector("#stopwatch-time")
let timerSW = document.querySelector("#timer-stopwatch")
let timerT  = document.querySelector("#timer-timer")
let timert  = document.querySelector("#timer-time")
let SWstartbtn =document.querySelector(".stopwatch-start")
let SWstopbtn =document.querySelector(".stopwatch-stop")
let SWrestartbtn =document.querySelector(".stopwatch-restart")
let Tstartbtn =document.querySelector(".timer-start")
let Trestartbtn =document.querySelector(".timer-restart")
let msgbox = document.querySelector(".msg")
// buttons-end


function clearstopwatch(){
    Stopwatchhour.value="00";
    Stopwatchmin.value="00";
    Stopwatchsec.value="00";
    Stopwatchmilisec.value="00";
}

function cleartimer(){
    timerhour.value="00";
    timermin.value="00";
    timersec.value="00";
    timermilisec.value="00";
}

if(Hour.value>=12){
    ampm.innerHTML="PM"
}

function updateTime(){ 
        let Time = new Date();
        let hourTime = Time.getHours();
        let minuteTime = Time.getMinutes();
        let secondTime = Time.getSeconds();
        if(hourTime<10){
            Hour.value = "0"+hourTime
        }
        else{
            Hour.value = hourTime
        }
        if(minuteTime<10){
            minute.value = "0"+minuteTime
        }
        else{
            minute.value = minuteTime
        }
        if(secondTime<10){
            second.value = "0"+secondTime
        }
        else{
            second.value = secondTime
        }
   
}
updateTime()
let interval = setInterval(updateTime,1000)

currTimeSW.addEventListener("click",()=>{
    timerbox.classList.add("hidden")
    currentTimebox.classList.add("hidden")
    stopwatchbox.classList.remove("hidden")
}) 

currTimeT.addEventListener("click",()=>{
    timerbox.classList.remove("hidden")
    currentTimebox.classList.add("hidden")
    stopwatchbox.classList.add("hidden")
}) 


// stopwatch
function stopwatch(){
    let milisec= Stopwatchmilisec.value ;
let sec = Stopwatchsec.value;
let min = Stopwatchmin.value;
let hour = Stopwatchhour.value;
    if(hour>=0 && min>=0 && sec>=0) {
             milisec++
             if(milisec>=100){
                 sec++
                 milisec = 0
             }
             if(sec>=60){
                 min++
                 sec = 0
             }
             if(min>=60){
                 hour++
                 min = 0
             }
             Stopwatchmilisec.value = milisec
             Stopwatchsec.value = sec
             Stopwatchmin.value = min
             Stopwatchhour.value= hour    
    }
}

SWstartbtn.addEventListener("click",()=>{
    SWstartbtn.disabled=true
     Stopwatchinterval = setInterval(stopwatch,10)
})

SWstopbtn.addEventListener("click",()=>{
    clearInterval(Stopwatchinterval)
    SWstartbtn.disabled=false
 })

SWrestartbtn.addEventListener("click",()=>{
        SWstartbtn.disabled=false
        clearInterval(Stopwatchinterval)
       clearstopwatch()
       
})

stopwatcht.addEventListener("click",()=>{
        currentTimebox.classList.remove("hidden")
        stopwatchbox.classList.add("hidden")
        timerbox.classList.add("hidden")
        
}) 
stopwatchT.addEventListener("click",()=>{
        currentTimebox.classList.add("hidden")
        stopwatchbox.classList.add("hidden")
        timerbox.classList.remove("hidden")
        
}) 
  
    // timer
    
    function timer(){
        let milisec = timermilisec.value;
        let sec = timersec.value;
        let min = timermin.value;
        let hour = timerhour.value;
        // let timervalue = hour*60*60*1000 + min*60*1000 + sec*1000 + milisec;
        if(hour>=0 && min>=0 && sec>=0 && milisec>=0){
             milisec--
             if(milisec===-1){
                 sec--
                 milisec = "99"
             }
             if(sec===-1){
                 min--
                 sec = "59"
             }
             if(min===-1){
                 hour--
                 min = "59"
             }
             timermilisec.value = milisec
             timersec.value = sec
             timermin.value = min
             timerhour.value= hour
             }
        
        }
    

    Tstartbtn.addEventListener("click",()=>{
        Tstartbtn.disabled=true;
        return timerInterval = setInterval(timer,10)
    })

     Trestartbtn.addEventListener("click",()=>{
        clearInterval(timerInterval)
        cleartimer()
        Tstartbtn.disabled=false
      
    })

 timerSW.addEventListener("click",()=>{
            timerbox.classList.add("hidden")
            currentTimebox.classList.add("hidden")
            stopwatchbox.classList.remove("hidden")
        }) 

 timert.addEventListener("click",()=>{
            timerbox.classList.add("hidden")
            currentTimebox.classList.remove("hidden")
            stopwatchbox.classList.add("hidden")
        }) 
       
  