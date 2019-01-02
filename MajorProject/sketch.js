// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gamestate;
let titleScreen, gameScreen, endScreen;

let peepImage;
let peepSprite;
let peepStamina = 10;
let peepX;
let peepY;

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
let bomb;
let gas;
let cloud1;
let cloud2;
let cloud3;
let song;

let jumpSound;

let myheight = 7000;

function preload() {
	peepImage = loadImage("assets/bat2.png");
	grassImage = loadImage("assets/grass.png");
  bomb = loadImage("assets/repellent.png");
	gas = loadImage("assets/bug1.png");
	jumpSound = loadSound("assets/Bat Squeak.mp3");
	song = loadSound("assets/song.mp3");
	finishImage = loadImage("assets/cave.png");
	titleScreen = loadImage("assets/startscreen.png");
	endScreen = loadImage("assets/endscreen.png");
	cloud1 = loadImage("assets/cloud.png");
	cloud2 = loadImage("assets/cloud.png");
	cloud3 = loadImage("assets/cloud.png");

}

function setup() {

	// 🎶 SONG 🎶 //
	song.setVolume(0.05);
	song.play();
	song.loop();

	createCanvas(800, 600);
	background(205, 232, 239);

	gamestate = 0;

	rechargers = new Group();
	bombs = new Group();

	peepX = width / 2
	peepY = myheight - 50

	// ☁ ☁	START OF CLOUDS ☁ ☁ //

	cloudSprite1 = createSprite(100, myheight - 100);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(550, myheight - 600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 1000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(550, myheight - 1300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(400, myheight - 1600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(100, myheight - 1800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 2000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 2300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 2600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 2800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 3000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 3300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 3600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 3800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 4000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 4300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 4600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 4800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 5000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 5300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 5600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 5800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite1 = createSprite(100, myheight - 6000);
	cloudSprite1.addImage(cloud1);
	cloudSprite1.scale = 2;

	cloudSprite2 = createSprite(400, myheight - 6300);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	cloudSprite3 = createSprite(730, myheight - 6600);
	cloudSprite3.addImage(cloud3);
	cloudSprite3.scale = 2;

	cloudSprite2 = createSprite(420, myheight - 6800);
	cloudSprite2.addImage(cloud2);
	cloudSprite2.scale = 2;

	// ☁ ☁	END OF CLOUDS ☁ ☁ //



	// SPRITES //
	peepSprite = createSprite(peepX, peepY);
	// peepSprite.addImage(peepImage);
	peepSprite.position.x = peepX;
	peepSprite.position.y = peepY;
	//peepSprite.velocity.y = 1;

	grassSprite = createSprite(width / 2, myheight);
	// grassSprite.addImage(grassImage);

	finishSprite = createSprite(width / 2, 16);
	finishSprite.addImage(finishImage);

	LeftWallSprite = createSprite(1, 0, 2, myheight * 2);
	LeftWallSprite.shapeColor = color(0);
	RightWallSprite = createSprite(width - 1, 0, 2, myheight * 2);
	RightWallSprite.shapeColor = color(0);

	while (bombs.length < 15) {
		newEnemy = createSprite(random(10, width - 50), myheight - 100);
		newEnemy.setCollider("rectangle", 0, 0, 32, 32);
		newEnemy.addImage(bomb);
		bombs.add(newEnemy);
	}

	while (rechargers.length < 15) {
		newBoost = createSprite(random(10, width - 50), myheight - 150);
		newBoost.setCollider("rectangle", 0, 0, 32, 32);
		newBoost.addAnimation("flashing", "assets/bug1.png", "assets/bug2.png", "assets/bug3.png");
		rechargers.add(newBoost);
	}


	//ANIMATIONS//
	peepSprite.addAnimation("flapping", "assets/bat1.png", "assets/bat2.png","assets/bat3.png","assets/bat4.png","assets/bat5.png","assets/bat6.png","assets/bat7.png");
	peepSprite.addAnimation("flying","assets/bat1.png", "assets/bat2.png","assets/bat3.png","assets/bat4.png","assets/bat5.png","assets/bat6.png","assets/bat7.png");
  // peepSprite.addImage("still","assets/bat2.png");
}
