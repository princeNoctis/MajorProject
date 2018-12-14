// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let menuNum;
let playButtonX = 200 ,playButtonY = 200;
let levelBackground,lives,randomImg;


function preload(){
  randomImg = loadAnimation("assets/frame_0_delay-0.05s.png","assets/frame_1_delay-0.05s.png");
}


function setup() {
  createCanvas(800, 600);
  levelBackground = loadImage("assets/lvlbckgrnd.png");
  lives = loadImage("assets/Heart.png");
  menuNum = 0;
}

function draw() {
  mainMenu();
}



function mainMenu(){
  if (menuNum === 0){
    background("white");
    fill("black");
    textSize(25);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    animation(randomImg,200,300);
    text("Play",width/2,400);
    textAlign(CENTER);
    drawLives();

    stroke("black");
    fill("green");
    rect(playButtonX,playButtonY);
  }
  else if (menuNum === 1){
    loadBackground();
  }

}

function loadBackground(){
  background(levelBackground);
}

function drawLives(){
  imageMode(CORNER);
  image(lives,50,50,25,25);
  image(lives,75,50,25,25);
  image(lives,100,50,25,25);
}
