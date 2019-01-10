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
let dashCooldown;

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
	dashCooldown = 0;
	smashTimer = 0;
  smashCooldown = 0;
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

	smash = 0;
  difficulty = 0;
}


function draw() {
	image(background, 0, 0, 1280, 640);

	if (linkHP < 1) {
		state = -2;
	}

	if (linkHit == 1) {
		if (linkIFrames == 0) {
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

	if (sprintTimer == 0) {
		gravity = 1;
		if (keyIsDown(65)) {
								if (keyIsDown(68)) {
									velocityX = 0;
								} else {
									guyFacing = "left"
									velocityX = -8;
								}
							} else if (keyIsDown(68)) {
								guyFacing = "right";
								velocityX = 8;
							} else {
								velocityX = 0;
							}

	if (keyIsDown(32) && guyY == 400) {
		velocityY =  -24;
	}
		if (keyIsDown(16) && dashCooldown == 0 && slashTimer == 0) {
			dashTimer = 9;
			dashCooldown = 30;
			velocityY = 0;
			gravity = 0;
			if (guyFacing == "right") {
				velocityX = 32;
			}
			else {
				velocityX = -32;
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
