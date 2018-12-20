// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let menuNum;
let playButtonX = 400 ,playButtonY = 400,playerX=50,playerY=50,platformX,platformY,velocity,speedX;
let levelBackground,lives,randomImg;
let menuMusic,gameMusic;
let tiles,levelToLoad,lines,tilesWidth,tilesHeight,changeRes;
let character,players,test,coins,koomba;


let platform;
let platforms; // Group for collisions
let playerSprite;

// Gravitational letant - applied to player velocity inside draw()
let gravityOfPlayer = 0.3;
let playerOnGround;

function preload(){
  players = loadAnimation("assets/frame_0_delay-0.05s.png","assets/frame_1_delay-0.05s.png");
  levelToLoad = "assets/Lvl.1.txt";
  lines = loadStrings(levelToLoad);
  platform = loadImage("assets/platform.png");
  // coins = loadImage("images/coin.png");
  // koomba = loadImage("images/koomba.png");
  levelBackground = loadImage("assets/lvlbckgrnd.png");
}


function setup() {
  players = createSprite(200,200,50,50);
  createCanvas(tiles*tilesWidth, tiles*tilesHeight);
  lives = loadImage("assets/Heart.png");
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
  playerOnGround = false;
  platform = new Group();
}

function draw(x,y) {
  mainMenu();
  move();
  drawSprites();
  physics();
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
    // animation(randomImg,300,400);
  }
  else if (menuNum === 1){
    display();
    drawLives();
    player();
    // collideWithPlayer();
    // test = rect(x * tilesWidth, y * tilesHeight, tilesWidth, tilesHeight);
  }
}

function showTile(location, x, y) {
  if (location === "p") {
    fill("green");
    test;
  }
}

function drawLives(){
  imageMode(CORNER);
  image(lives,50,50,25,25);
  image(lives,75,50,25,25);
  image(lives,100,50,25,25);
}
//
// function collideWithPlayer(){
//   if (playerY < platformY){
//     playerY = 50;
//   }
//   if (playerX < platformX){
//     playerX = 50;
//   }
//   players.collide(test);
// }

function player(){
  fill("green");
  // players = rect(playerX,playerY,50,100);
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


function move(){
  if (keyIsDown(87)) {
    playerY -= 10;
  }
  if (keyIsDown(65)) {
    playerX -= 10;
  }
  if (keyIsDown(83)) {
    playerY += 10;
  }
  if (keyIsDown(68)) {
    playerX += 10;
  }
  for (let i = 0; i < tiles.length; i++) {
    // If the value is 0, place nothing
    if (tiles[i] === 0) {
      // Do nothing
    } else if (tiles[i] === "p") {
      // If the value is 1, place the platform
      let x = i % tilesWidth * tiles + tiles/2;
      let y = floor(i / tilesWidth) * tiles + tiles/2;
      let platformSprite = createSprite(x, y);
      platformSprite.addImage(platform);
      platformSprite.setCollider( 0, 0, tiles, tiles - 8);
      platforms.add(platformSprite);
      //platformSprite.debug = true;
    }
  }
  playerSprite = createSprite(2*tiles + tiles/2, height/2);
  playerSprite.addAnimation(players);
}

function physics(){
  playerSprite.collide(platforms, stopplayer());
	// Apply gravityOfPlayer to player's velocity if the player is in the air
	if (!playerOnGround) {
		playerSprite.velocity.x += gravityOfPlayer;
	}

	// ---- PLAYER MOVEMENT ---- //
	// Left and Right player movement
	if (keyDown(LEFT_ARROW)) {
		playerSprite.position.x -= 1;
	}
	if (keyDown(RIGHT_ARROW)) {
		playerSprite.position.x += 1;
	}
	// Player Jump
	if (keyDown(UP_ARROW) && playerOnGround) {
		// We jump by immediately changing our y velocity to a negative number (since a negative y means "up" in p5.js)
		// This has the effect of adding a force to counteract gravityOfPlayer. This ONLY works because we are changing the
		// sprite's velocity by gravityOfPlayer above
    playerSprite.velocity.x = -7;
    playerOnGround = false;
  }
}
function stopplayer(players, platform) {
  playerSprite.setVelocity(0, 1);
  console.log("Alien collided with brick");
  // If the alien is moving up, don't stop it's movement
	// If I'm moving down and collide with brick, then stop movement
	if (players.velocity.x >= 0) {
		playerOnGround = true;
		players.velocity.x = 0;
	}
}
