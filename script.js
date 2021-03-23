var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;
var clueHoldTime = 1000; 
var numOfMistakes = 0;

var timeLeft = 25000;
var timer;


const cluePauseTime = 1000; 
const nextClueWaitTime = 1000; 

function startGame(){
    //initialize game variables
    createRandomPattern();
    progress = 0;
    numOfMistakes = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    
}

function createRandomPattern(){
  clueHoldTime -= 50;
  for(let i=0;i<=4;i++){
    pattern.push(Math.floor(Math.random() * 6 + 1));
  }
}


function stopGame(){
  gamePlaying = false;
  stopCount();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congratulations! You won!");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  timedCount();
}

function timedCount() {
  document.getElementById("timer").innerHTML = timeLeft/1000;
  timeLeft = timeLeft - 1000;
  timer = setTimeout(timedCount, 1000);
    if (timeLeft == -1000) {
  	stopCount();
    loseGame();
  }
}


function stopCount() {
  clearTimeout(timer);
  timeLeft = 25000;
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        stopCount();
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    stopCount();
    if(numOfMistakes==2){
      loseGame();
      stopCount();
    }
    else{
      numOfMistakes++;
    }
    //Guess was incorrect
    //GAME OVER: LOSE!
    
  }
}    



// Sound Synthesis Functions
/*
const freqMap = {
  1: "Audio1",
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 200.5,
  6: 341.5
}
*/
const freqMap = {
  1: "Audio1",
  2: "Audio2",
  3: "Audio3",
  4: "Audio4",
  5: "Audio5",
  6: "Audio6"
}

function playTone(btn,len){ 
  document.getElementById(freqMap[btn]).play();
  
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    document.getElementById(freqMap[btn]).play();    
    tonePlaying = true
  }
}

/*
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
*/
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)