let speed=document.getElementById('speed')
let minutes=document.getElementById('minutesid')
let seconds=document.getElementById('secondid')
let startbutton=document.querySelector('.start')
let stopbutton=document.querySelector('.stop')
let currentspeed=document.getElementById('currentspeed1')
let currenttime=document.getElementById('currenttime1')
let  currentdistance=document.getElementById('currentdistance1')
var secondss = 00; 
var acc=0;
var currspeed=00;
var currdist=00;
var time=00;
  var tens = 00; 
  var tensss=0;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var Interval ;
  var check;
  var giventime=00;
  startbutton.onclick = function() {
    if(minutes.value<1)
    { check=parseInt(seconds.value);
        giventime=check;
     console.log(giventime)

    }
    else
    {
      check=(minutes.value)*60+parseInt(seconds.value);
     giventime=check;
     console.log(giventime)
    }
    check=(check*5)/18;
    console.log(check);
    acc=(speed.value)/check;
    console.log(speed.value)
    console.log(acc);
    clearInterval(Interval);
     
     Interval = setInterval(startTimer, 1000);
  }
  
    stopbutton.onclick = function() {
       clearInterval(Interval);
      Interval = setInterval(stoptimer, 1000);
  


  }
  function stoptimer(){
    if(currspeed==0)
    {
      clearInterval(Interval)
    }
    else{
    tens++; 
    tensss++;
    time++
    if(time==giventime)
    {
time=0;
currdist=((1/2)*acc*tensss*tensss)/1000;
currspeed=currspeed-parseInt(speed.value);
currentspeed.innerHTML=`CURRENT SPEED:${currspeed}`;
currentdistance.innerHTML=`current distance:${currdist} km`
console.log(currspeed)
    }
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 59) {
    
      secondss++;
      appendSeconds.innerHTML = "0" + secondss;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (secondss > 9){
      appendSeconds.innerHTML = secondss;
    }
  

  }}
  function startTimer () {
    tens++; 
    tensss++;
    time++
    if(time==giventime)
    {
time=0;
currdist=((1/2)*acc*tensss*tensss)/1000;
currspeed=currspeed+parseInt(speed.value);
currentspeed.innerHTML=`CURRENT SPEED:${currspeed}`;
currentdistance.innerHTML=`current distance:${currdist} km`
console.log(currspeed)
    }
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 59) {
    
      secondss++;
      appendSeconds.innerHTML = "0" + secondss;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (secondss > 9){
      appendSeconds.innerHTML = secondss;
    }
  
  }
  