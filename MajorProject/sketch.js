// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let menuNum;
let levelBackground,lives,randomImg;


function setup() {
  createCanvas(800, 600);
  levelBackground = loadImage("assets/lvlbckgrnd.png");
  lives = loadImage("assets/Heart.png");
  randomImg = loadImage("assets/marioGif.gif");
  menuNum = 0;
  Animation(label,animation);
}

function draw() {
  mainMenu();
}



function mainMenu(){
  if (menuNum === 0){
    background(0);
    fill("yellow");
    textSize(25);
    textAlign(CENTER, CENTER);
    text("Play",width/2,400);
    image(randomImg,200,300,200,200);
    textAlign(CENTER);
  }
  else if (menuNum === 1){
    drawLives();
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
