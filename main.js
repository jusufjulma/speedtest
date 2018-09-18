"use strict"

document.getElementById('startbutton').onclick = start;
document.getElementsByClassName('stop')[0].onclick = stop;
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');


const blankCircles = document.getElementsByClassName('cBlank');
let targetArray = [];
let userArray = [];
let loop;


let delay = 1000;

function start() {
  console.log("LOOPATAAN " + delay);
  delay *= 0.98;
  loop = setTimeout(start, delay);
  targetFlash();
}

function stop() {
  console.log("Stopping...");
  clearTimeout(loop)
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
}

function logger(x) {
  console.log(x);
}

c1.addEventListener("mouseup", () => userPress(1))
c2.addEventListener("mouseup", () => userPress(2))
c3.addEventListener("mouseup", () => userPress(3))
c4.addEventListener("mouseup", () => userPress(4))

function userPress(x) {
  console.log(x);
}
