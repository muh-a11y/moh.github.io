const hoursEI=document.getElementById("hours");
const minutesEI=document.getElementById("minutes");
const secondsEI=document.getElementById("seconds");
const ampmEI=document.getElementById("ampm");

function updateClock(){
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ampm ="AM";




hoursEI.innerText=h;
minutesEI.innerText=m;
secondsEI.innerText=s;
ampmEI.innerText=ampm;

setTimeout( ()=>{
    updateClock();
}, 1000)
}
updateClock();

