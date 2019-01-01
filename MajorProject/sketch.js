// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

var gamestate;
var titleScreen, gameScreen, endScreen;

var batImage;
var batSprite;
var batStamina = 10;
var batX;
var batY;

var GRAVITY = 2;
var FLAP = -15;
var counter = 0;

var grassImage;
var grassSprite;
var LeftWallSprite;
var RightWallSprite;
var finishImage;
var finishSprite;

var cloudSprite1;
var cloudSprite2;
var cloudSprite3;

var bombSprite;
var bombImage;

var rechargers;
var bombs;

var clouds;

var newEnemy;
var newBoost;

var jumpSound;

var myheight = 7000;

function preload() {
	batImage = loadImage("bat_00.png");
	grassImage = loadImage("grass.png");
	bomb = loadImage("bomb_0.png");
	gas = loadImage("gas_0.png");
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

	// 🎶 SONG 🎶 //
	song.setVolume(0.05);
	song.play();
	song.loop();

	createCanvas(500, 500);
	background(205, 232, 239);

	gamestate = 0;

	rechargers = new Group();
}
