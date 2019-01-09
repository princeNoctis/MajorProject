// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundMusic;
let background;
let linkRight;
let linkLeft;
let linkX;
let linkY;
let linkFacing;
let velocityY;
let gravity;
let velocityX;
let dashTimer;
let dashCooldown;
let smashRight;
let smashLeft;
let smashTimer;
let smashCooldown;
let slimeBoss;
let slimeBossCharge;
let slimeBossTell;
let slimeBossSpit;
let slimeBossBall;
let slimeBossSpikes;
let slimeBossRed;
let linkRed;
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
let linkHit;
let linkIFrames;
let linkHP;
let enemyHit;
let enemyIFrames;
let enemyHP;
let smash;
let gameOver;
let victory;
let balloon;
let heart;
let difficulty;
let guardianLeft;
let guardianRight;
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
	dashTimer = 0;
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
