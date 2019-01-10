// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Resources - https://answers.unity.com/questions/239614/roll-a-ball-towards-the-player.html for the
// ball being spit towardst the player

let backgroundMusic;
let background;

let linkRight;
let linkLeft;
let linkX;
let linkY;
let linkFacing;
let linkRed;
let linkHit;
let linkIFrames;
let linkHP;

let velocityY;
let gravity;
let velocityX;

let sprintTimer;
let sprintCooldown;

let smashRight;
let smashLeft;
let smashTimer;
let smashCooldown;
let smash;

let slimeBoss;
let slimeBossCharge;
let slimeBossTell;
let slimeBossSpit;
let slimeBossBall;
let slimeBossSpikes;
let slimeBossRed;

let state;

let tutorialstate;
let tutorialTimer;

let enemystate;
let enemyTimer;
let enemyX;
let enemyY;
let enemyState;
let enemyVelocityY;
let enemySide;
let enemyBallX;
let enemyBallY;
let enemyBallVelocityX;
let enemyBallVelocityY;
let enemyHit;
let enemyIFrames;
let enemyHP;

let gameOver;
let victory;

let balloon;
let heart;

let difficulty;

let ganondorfLeft;
let ganondorfRight;
let spearLeft;
let spearRight;
let spearThrowLeft;
let spearThrowRight;


function setup() {
  createCanvas(1280, 640);
  frameRate(60);

  linkRight = loadImage("linkRight.png");
  linkLeft = loadImage("linkLeft.png");

  background = loadImage("background.png");

  smashRight = loadImage("smashRight.png");
  smashLeft = loadImage("smashLeft.png");

  slimeBoss = loadImage("slimeBoss.png");
  slimeBossCharge = loadImage("slimeBossCharge.png");
  slimeBossTell = loadImage("slimeBossTell.png");
  slimeBossSpit = loadImage("slimeBossSpit.png");
  slimeBossBall = loadImage("slimeBossBall.png");
  slimeBossSpikes = loadImage("slimeBossSpikes.png");
  slimeBossRed = loadImage("slimeBossRed.png");

  linkRed = loadImage("linkRed.png");

  gameOver = loadImage("gameOver.png");
  victory = loadImage("victory.png");

  balloon = loadImage("balloon.png");
  heart = loadImage("heart.png");

  linkX = 150;
  linkY = 300;
  linkFacing = "right";

  velocityY = 0;
  gravity = 1;
  velocityX = 0;

  sprintTimer = 0;
  sprintCooldown = 0;

  smashTimer = 0;
  smashCooldown = 0;
  smash = 0;

  state = 0;
  tutorialstate = 0;
  tutorialTimer = 0;

  enemystate = 0;
  enemyTimer = 0;
  enemyX = 700;
  enemyY = -250;
  enemyState = "slimeBoss";
  enemyVelocityY = 0;
  enemySide = "right";
  enemyBallX = 0;
  enemyBallY = 0;
  enemyBallVelocityX = 0;
  enemyBallVelocityY = 0;

  linkHit = 0;
  linkIFrames = 0;
  linkHP = 3;

  enemyHit = 0;
  enemyIFrames = 0;
  enemyHP = 10;

  difficulty = 0;
}


function draw() {
  image(background, 0, 0, 1280, 640);

  if (linkHP < 1) {
    state = -2;
  }

  if (linkHit === 1) {
    if (linkIFrames === 0) {
      linkHP--;
      linkIFrames = 60;
    }
    else if (linkIFrames > 1) {
      linkIFrames--;
    }
    else {
      linkHit = 0;
      linkIFrames--;
    }
  }

  if (sprintTimer === 0) {
    gravity = 1;
    if (keyIsDown(65)) {
      if (keyIsDown(68)) {
        velocityX = 0;
      }
      else {
        linkFacing = "left";
        velocityX = -8;
      }
    }
    else if (keyIsDown(68)) {
      linkFacing = "right";
      velocityX = 8;
    }
    else {
      velocityX = 0;
    }

    if (keyIsDown(32) && linkY === 400) {
      velocityY =  -24;
    }
    if (keyIsDown(16) && sprintCooldown === 0 && smashTimer === 0) {
      sprintTimer = 9;
      sprintCooldown = 30;
      velocityY = 0;
      gravity = 0;
      if (linkFacing === "right") {
        velocityX = 32;
      }
      else {
        velocityX = -32;
      }
    }
    if (keyIsDown(13) && smashCooldown === 0) {
      smash = 1;
      smashTimer = 6;
      smashCooldown = 30;
    }

  }
  else {
    sprintTimer = sprintTimer - 1;
  }

  if (linkY + velocityY <= 400) {
    linkY = linkY + velocityY;
  }
  else {
    linkY = 400;
  }

  if (linkX + velocityX < 0) {
    linkX = 0;
  }
  else if (linkX + velocityX > 1200) {
    linkX = 1200;
  }
  else {
    linkX = linkX + velocityX;
  }

  if (sprintCooldown > 0){
    sprintCooldown = sprintCooldown - 1;
  }
  if (smashTimer > 0) {
    smashTimer = smashTimer - 1;
    if (linkFacing === "right") {
      image(smashRight, linkX + 80, linkY, 80, 160);
    }
    else {
      image(smashLeft, linkX - 80, linkY, 80, 160);
    }
  }
  else {
    smash = 0;
  }
  if (smashCooldown > 0) {
    smashCooldown = smashCooldown - 1;
  }
  velocityY = velocityY + gravity;

  if (linkHit === 0 || linkIFrames % 10 < 5) {
    if (linkFacing === "right") {
      image(linkRight, linkX, linkY, 80, 160);
    }
    else {
      image(linkLeft, linkX, linkY, 80, 160);
    }
  }
  else {
    image(linkRed, linkX, linkY, 80, 160);
  }

  if (state === -2) {
    drawGameOver();
  }
  if (state === -1) {
    drawVictory();
  }
  if (state === 0) {
    drawTutorial();
  }
  if (state === 1) {
    drawSlime();
  }
  if (state === 2) {
    drawGuardian();
  }
  drawHealth();
}


function drawTutorial(){

}


function drawSlime() {

}

function drawGameOver() {

}

function drawHealth() {

}


function drawganondorf() {

}
