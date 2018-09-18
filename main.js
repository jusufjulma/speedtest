"use strict";

document.getElementById('startbutton').onclick = start;
// document.getElementsByClassName('stop')[0].onclick = stop;
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

const blankCircles = document.getElementsByClassName('cBlank');
let targetArray = [];
let score = 0;
let loop;
let delay = 1000;


function start() {
  console.log("LOOPATAAN " + delay);
  delay *= 0.99;
  loop = setTimeout(start, delay);
  targetFlash();
}

function stop() {
  clearTimeout(loop);
  endScreen();
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

c1.addEventListener("mouseup", () => userPress(0))
c2.addEventListener("mouseup", () => userPress(1))
c3.addEventListener("mouseup", () => userPress(2))
c4.addEventListener("mouseup", () => userPress(3))

function userPress(x) {
  if (x !== targetArray[0]) {
    stop();
  }else {
  targetArray.shift();
  score++;
  document.getElementById("scorevalue").innerHTML = score;
  }
}

function endScreen() {
  let message;
  document.getElementsByTagName('body')[0].style.overflow = "hidden";
  if (score < 6) {
    message = `Your final score was ${score}.
    Are you proud of yourself now?`;
    console.log(`Well, you scored ${score}. Congratulations.`);
  }else if (score >= 6 && score < 20){
    message = `You got ${score} clicks right... Well, it is not
      exactly something to brag about.`
  }else if (score >= 20 && score < 30){
    message = `${score}, huh? Pretty good...`
  }else if (score >= 30 && score < 50){
    message = `${score}??? Wow. Maybe you should go and do something more
    productive. Seriously.`
  }else if (score >=50){
    message = `GET OUT! With this amount of dedication I expect you to be
    able to open console which might answer your question.`;
    console.log(`Well, you scored ${score}. Congratulations.`);
  }
  document.getElementsByClassName("aftermath")[0].style.visibility = "visible";
  document.getElementById("finalscore").innerHTML = message;
}
