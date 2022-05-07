
//--- GLOBAL VARs
const domHour=document.getElementById("hour");
const domMinute=document.getElementById("minute");
const domSecond=document.getElementById("second");
const domBar=document.getElementById("bar");


const domBtnStart=document.getElementById("btnStart");
const domBtnStop=document.getElementById("btnStop");
 
let second=0;
let minute=0;
let hour=0
let myInterval;
let barLength=1;

// --- FUNCTIONs
function startCounter(){

  if (typeof(myInterval) != "undefined") { return ; }
  // continua tu
}

function stopCounter(){

  if (typeof(myInterval) == "undefined") { return ; }
  // continua tu
}

function conteggioFunc(){
  second++
  if (second >= 60) {
    second=0
    minute++
  }
   // continua tu
   console.log("tic")
}

 
// --- MAIN
domBtnStart.addEventListener( 'click' , startCounter)
domBtnStop.addEventListener(  'click' , stopCounter)
