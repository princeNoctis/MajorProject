// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let menuNum;


function setup() {
  createCanvas(800, 600);
  menuNum = 0;
}

function draw() {
  mainMenu();
}



function mainMenu(){
  if (menuNum === 0){
    background(0);
    fill("yellow");
    text("Main Menu",width/2,height/2);
    textSize(50);
    textAlign(CENTER, CENTER);
  }
  else{
    background("green");
    text("Game",width/2,height/2);
  }
}

function loadBackground(){
  
}
