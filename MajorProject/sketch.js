// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let menuNum;
let playButtonX = 400 ,playButtonY = 400,px=0,py=0;
let levelBackground,lives,randomImg;
let menuMusic,gameMusic;
let tiles,levelToLoad,lines,tilesWidth,tilesHeight,changeRes;
let character,coins,platform,koomba,bricks;


function preload(){
  randomImg = loadAnimation("assets/frame_0_delay-0.05s.png","assets/frame_1_delay-0.05s.png");
  levelToLoad = "assets/Lvl.1.txt";
  lines = loadStrings(levelToLoad);
  platform = loadImage("assets/platform.png");
  // coins = loadImage("images/coin.png");
  // koomba = loadImage("images/koomba.png");
  levelBackground = loadImage("assets/lvlbckgrnd.png");
}


function setup() {
  createCanvas(900, 600);
  lives = loadImage("assets/Heart.png")
  character = createSprite(px,py,100,100);
  character.addAnimation("standing","assets/frame_0_delay-0.05s.png","assets/frame_1_delay-0.05s.png");
  menuNum = 0;
  tilesHeight = lines.length;
  tilesWidth = lines[0].length;
  tiles = createEmpty2dArray(tilesWidth, tilesHeight);
  for (let y = 0; y < tilesHeight; y++) {
    for (let x = 0; x < tilesWidth; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
  }
}

function draw() {
  mainMenu();
  if (keyIsDown(LEFT_ARROW)) { // "a"
    px += 10;
  }
  if (keyIsDown(RIGHT_ARROW)) { // "d"
    px -= 10;
  }
  if (keyIsDown(UP_ARROW)) { // "w"
    py += 10;
  }
  if (keyIsDown(DOWN_ARROW)) { // "s"
    py -= 10;
  }
}

function display() {
  image(levelBackground, 0, 0, width, height);
  for (let y = 0; y < tilesHeight; y++) {
    for (let x = 0; x < tilesWidth; x++) {
      showTile(tiles[x][y], x, y);
    }
  }
}



function mainMenu(){
  if (menuNum === 0){

    strokeWeight(10);
    rect(0, 0, width, height);
    let hitbox = collidePointRect(mouseX, mouseY, playButtonX, playButtonY, 150, 50);
    if (hitbox) {
      fill("lightgreen");
    }
    else {
      fill("green");
    }
    push();
    rect(playButtonX, playButtonY, 150, 50);
    textSize(25);
    fill("black");
    text("play",455,435);
    //text on the home screen...
    textSize(15);
    text("A Major Computer Programing Project by Muhammad .S", 50, 550);
    textSize(40);
    text("Platformer!", 130, 150);
    pop();
    animation(randomImg,300,400);
  }
  else if (menuNum === 1){
    display();
    drawLives();
    drawSprites();
    character.collide(bricks);
  }
}

function showTile(location, x, y) {
  if (location === "p") {
    bricks = createSprite(x * tilesWidth, y * tilesHeight, tilesWidth, tilesHeight);
    bricks.addImage(loadImage("assets/platform.png"));
  }
}

function drawLives(){
  imageMode(CORNER);
  image(lives,50,50,25,25);
  image(lives,75,50,25,25);
  image(lives,100,50,25,25);
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

function mousePressed() {
  let startGame = collidePointRect(mouseX, mouseY, playButtonX, playButtonY, 150, 50);
  if (startGame === true && menuNum === 0){
    menuNum = 1;
  }
}

function movePlayer() {

}
