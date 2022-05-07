
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
    
  myInterval=setInterval( conteggioFunc , 1000);
  let domNumeri_lst=document.querySelectorAll('.digit')
  let domNumeri_arr= Array.from( domNumeri_lst ) 
  for ( let i=0 ; i< domNumeri_arr.length ; i++ ) {
    domNumeri_arr[i].style.backgroundColor="blue"
  }
  //domBar.style.width="10px";

}

function stopCounter(){

  if (typeof(myInterval) == "undefined") { return ; }
  
  clearInterval(myInterval);
  myInterval=undefined;

  let domNumeri_lst=document.querySelectorAll('.digit')
  let domNumeri_arr= Array.from( domNumeri_lst ) 
  for ( let i=0 ; i< domNumeri_arr.length ; i++ ) {
    domNumeri_arr[i].style.backgroundColor="gray"
  }
}

function conteggioFunc(){
  second++
  if (second >= 60) {
    second=0
    minute++
  }
  if (minute >= 60) {
    minute=0
    hour++
  }

  barLength++;
  domSecond.innerText=second
  domMinute.innerText=minute
  domHour.innerText=hour
  domBar.style.width=barLength+"px";
  console.log("tic")
}

 
// --- MAIN
domBtnStart.addEventListener( 'click' , startCounter)
domBtnStop.addEventListener(  'click' , stopCounter)
