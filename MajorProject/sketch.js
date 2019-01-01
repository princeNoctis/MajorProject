// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gamestate;
let titleScreen, gameScreen, endScreen;

let batImage;
let batSprite;
let batStamina = 10;
let batX;
let batY;

let GRAVITY = 2;
let FLAP = -15;
let counter = 0;

let grassImage;
let grassSprite;
let LeftWallSprite;
let RightWallSprite;
let finishImage;
let finishSprite;

let cloudSprite1;
let cloudSprite2;
let cloudSprite3;

let bombSprite;
let bombImage;

let rechargers;
let bombs;

let clouds;

let newEnemy;
let newBoost;

let jumpSound;

let myheight = 7000;

function preload() {
	batImage = loadImage("bat_00.png");
	grassImage = loadImage("grass.png");
	repellent = loadImage("bomb_0.png");
	moth = loadImage("gas_0.png");
	jumpSound = loadSound("jumpsound.wav");
	song = loadSound("Spring.mp3");
	finishImage = loadImage("finish.png");
	titleScreen = loadImage("titlescreen.png");
	endScreen = loadImage("endscreen.png");
	cloud1 = loadImage("cloud_0.png");
	cloud2 = loadImage("cloud_1.png");
	cloud3 = loadImage("cloud_2.png");

}

function setup() {


	song.setVolume(0.05);
	song.play();
	song.loop();

	createCanvas(500, 500);
	background(205, 232, 239);

	gamestate = 0;

	rechargers = new Group();
}
