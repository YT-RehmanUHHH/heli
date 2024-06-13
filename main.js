// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables (once)
let heliImg = document.createElement("img");
heliImg.src = "img/heliGreenTransparent.png";

let mouseIsPressed = false;

let explosion = document.createElement("audio");
explosion.src = "sound/explosion.wav";

let propeller = document.createElement("audio");
propeller.src = "sound/propeller.wav";

//global variables (reset)
let state;
let heli;
let wall1, wall2, wall3;
let distance;
let best = 0;
reset();

// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start"){
    drawStart();
  } else if (state === "gameon") {
     runGame()
  } else if ( state === "gameover") {
    drawGameOver();
  }
 
  // Request Animation Frame
  requestAnimationFrame(draw);
}

//event stuff
document.addEventListener("mousedown",mousedownHandler);
document.addEventListener("mouseup",mouseupHandler);

function mousedownHandler() {
  mouseIsPressed = true; 

  //play propeller
  propeller.currentTime = 0;
  propeller.play();
  
  //start game on mouse down
  if (state === "start") {
    state = "gameon"
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
  propeller.pause()
}






// // FUNCTIONS

// // Draw Start Screen
// function drawStart() {
//   // Background
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, cnv.width, cnv.height);

//   // Green Bars
//   ctx.fillStyle = "green";
//   ctx.fillRect(0, 0, cnv.width, 50);
//   ctx.fillRect(0, cnv.height - 50, cnv.width, 50);

//   // Green Bar Text
//   ctx.font = "30px Consolas";
//   ctx.fillStyle = "black";
//   ctx.fillText("HELICOPTER GAME", 25, 35);
//   ctx.fillText("DISTANCE: 0", 25, cnv.height - 15);
//   ctx.fillText("BEST: 0", cnv.width - 250, cnv.height - 15);

//   // Helicopter
//   ctx.drawImage(heliImg, 200, 250);

//   // Start Text
//   ctx.font = "40px Consolas";
//   ctx.fillStyle = "lightblue";
//   ctx.fillText("CLICK TO START", 350, 285)

//   ctx.font = "25px Consolas";
//   ctx.fillText("CLICK AND HOLD LEFT MOUSE BUTTON TO GO UP", 100, 450);
//   ctx.fillText("RELEASE TO GO DOWN", 415, 480);
// }

// // Draw Game Elements
// function drawGame() {
//   // Background
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, cnv.width, cnv.height);

//   // Green Bars
//   ctx.fillStyle = "green";
//   ctx.fillRect(0, 0, cnv.width, 50);
//   ctx.fillRect(0, cnv.height - 50, cnv.width, 50);

//   // Green Bar Text
//   ctx.font = "30px Consolas";
//   ctx.fillStyle = "black";
//   ctx.fillText("HELICOPTER GAME", 25, 35);
//   ctx.fillText("DISTANCE: 0", 25, cnv.height - 15);
//   ctx.fillText("BEST: 0", cnv.width - 250, cnv.height - 15);

//   // Helicopter
//   ctx.drawImage(heliImg, 200, 250);

//   // Draw Wall 1
//   ctx.fillStyle = "green";
//   ctx.fillRect(700, 200, 50, 100);
// }

// // Draw Game Over Screen
// function drawGameOver() {
//   // Background
//   ctx.fillStyle = "black";
//   ctx.fillRect(0, 0, cnv.width, cnv.height);

//   // Green Bars
//   ctx.fillStyle = "green";
//   ctx.fillRect(0, 0, cnv.width, 50);
//   ctx.fillRect(0, cnv.height - 50, cnv.width, 50);

//   // Green Bar Text
//   ctx.font = "30px Consolas";
//   ctx.fillStyle = "black";
//   ctx.fillText("HELICOPTER GAME", 25, 35);
//   ctx.fillText("DISTANCE: 0", 25, cnv.height - 15);
//   ctx.fillText("BEST: 0", cnv.width - 250, cnv.height - 15);

//   // Helicopter
//   ctx.drawImage(heliImg, 200, 250);

//   // Draw Wall 1
//   ctx.fillStyle = "green";
//   ctx.fillRect(700, 200, 50, 100);

//   // Circle around Helicopter
//   ctx.strokeStyle = "red";
//   ctx.lineWidth = 5;
//   ctx.beginPath();
//   ctx.arc(240, 270, 60, 0, 2 * Math.PI);
//   ctx.stroke();

//   // Game Over Text
//   ctx.font = "40px Consolas";
//   ctx.fillStyle = "lightblue";
//   ctx.fillText("GAME OVER", 350, 285);
// }