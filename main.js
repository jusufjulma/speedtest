"use strict"

document.getElementById('startbutton').onclick = start;

let blankCircles = document.getElementsByClassName('cBlank');
let targetArray = [];
let userArray = [];


let delay = 1000;

function start() {
  console.log("LOOPATAAN " + delay);
  delay *= 0.98;
  setTimeout(start, delay);
  targetFlash();
}

function targetFlash() {
  let flashMe = (Math.floor(Math.random()*4));      // this is just to clarify
  targetArray.push(flashMe);                        // how it works; could be shorter
  console.log(targetArray);
  blankCircles[flashMe].classList.add("cActive");
 if (delay < 300){
   setTimeout(removeFlash, delay-20, flashMe);
 }else{
    setTimeout(removeFlash, 300, flashMe);          // I hate these wait functions
 }
}

function removeFlash(x) {
  blankCircles[x].classList.remove("cActive");
  console.log(delay);
}





function userPress(x) {
  if (x !== 1) {

  }
}
