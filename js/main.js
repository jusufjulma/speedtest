"use strict";

// document.getElementsByClassName('stop')[0].onclick = stop;
const c1 = document.getElementById('c1');   // making html elements more
const c2 = document.getElementById('c2');   // accessible
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const startbutton = document.getElementById('startbutton');
document.getElementById('retrybutton').onclick = retry;

const blankCircles = document.getElementsByClassName('cBlank');
let targetArray = [];                   // logs flashed buttons sequence
let score = 0;
let highscore = 0;
let gamesPlayed = 0;
let loop;                               // stores setTimeout function call
let delay = 1000;                       // how long between flashes
let countdown = false;
let failcheck;                          // to fix if user is failing instantly

startbutton.onclick = () =>{
  if (countdown) {
    countdowner();
    failcheck = setTimeout( () => {
      start();
      stopSound();
      player(2);
    }, 1720); // end of setTimeout
  }else{
    start() ;
    hideStart();
    stopSound();
    player(2);
  }
}

function start() {
  delay *= 0.98;                        // after 50 clicks this is about 350ms
  loop = setTimeout(start, delay);      // recursion right there
  targetFlash();                        // call the flasher
}

function stop() {                       // stops game
  clearTimeout(loop);
  clearTimeout(failcheck);              // if user clicks before light has flashed
  stopSound();                          // stops music
  endScreen();                          // pops endscreen
  player(3);                            // ...and plays endscreen music
}

function targetFlash() {                // game engine
  let flashMe = (Math.floor(Math.random()*4));      // picks one button
  targetArray.push(flashMe);                        // adds it to array,
  // console.log(targetArray);                      // LAST POSITION
  blankCircles[flashMe].classList.add("cActive");   // adds actual flash with CSS
 if (delay < 300){                                  // for HC gamers
   setTimeout(removeFlash, delay-20, flashMe);
 }else{
    setTimeout(removeFlash, 300, flashMe);          // after 300ms removes flash
 }
}

function removeFlash(x) {                           // removes active class
  blankCircles[x].classList.remove("cActive");      // a.k.a flash
}

c1.addEventListener("mousedown", () => userPress(0))  // handlers for actual
c2.addEventListener("mousedown", () => userPress(1))  // user input
c3.addEventListener("mousedown", () => userPress(2))
c4.addEventListener("mousedown", () => userPress(3))

function userPress(x) {             // deals with user input
  if (x !== targetArray[0]) {       // first we see if player fails
    stop();                         // in which case game stops.
  }else {
  targetArray.shift();              // otherwise correct value, which is first
  score++;                          // on array due to PUSH gets removed and
  document.getElementById("scorevalue").innerHTML = score;  // score gets updated
  beep.play()
  }
}

function endScreen() {              // pops up end screen
  let message;                      // initializing for different messages
  document.getElementsByTagName('body')[0].style.overflow = "hidden";
  if (score === 0){
    message = `Were the instructions unclear?`
  }else if (score < 6) {            // which are progressively more cheerful
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
    productive. Seriously.`         // or not
  }else if (score >=50){
    message = `GET OUT!<br>With that amount of dedication I expect you to be
    able to open console which might answer your question.`;
    console.log(`Well, you scored ${score}. Congratulations.`);
  }
  document.getElementsByClassName("aftermath")[0].style.visibility = "visible";
  document.getElementById("finalscore").innerHTML = message; // CSS commands
  if (score > highscore){                                    // updates high score
    highscore = score;
    document.getElementById("high-score").innerHTML = highscore;
  }
  gamesPlayed++;
  document.getElementById("games-played").innerHTML = gamesPlayed;
}

// this game could have module to let user bind keys for buttons
// also retry button functionality could be better

function hideStart() {
  startbutton.style.display = "none";
}
function countdowner() {
  let i = 3;
  messager();
  function messager(){
    if (i === 0){
      startbutton.innerHTML = `GO!`;
      setTimeout(hideStart, 860)
    }else{
    startbutton.innerHTML = `${i}...`;
    i--;
    setTimeout(messager, 430)
    }
  }
}

function retry() {
  console.log("Retry!");
  document.getElementsByClassName("aftermath")[0].style.visibility = "hidden";
  stopSound();
  startbutton.style.display = "initial";
  targetArray = [];
  score = 0;
  document.getElementById("scorevalue").innerHTML = score;  // score gets updated
  stopcheck = 0;
  player(1);

}

// function stop() {                       // stops game
//   clearTimeout(loop);
//   clearTimeout(failcheck);              // if user clicks before light has flashed
//   stopSound();                          // stops music
//   endScreen();                          // pops endscreen
//   player(3);                            // ...and plays endscreen music
// }




// EOF
