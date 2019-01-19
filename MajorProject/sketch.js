// Major Project
// Muhammad Saad Shiekh
// December.9,2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Resources - https://answers.unity.com/questions/239614/roll-a-ball-towards-the-player.html for the
// ball being spit towards the player ai against


// all the variables and states and coordinates
let backgroundMusic;
let victorySound,gameOverSound;
let menuScreen, menuScreenSound;
let lose;

let bg1, bg2, bg3, bg4, bg5, bg6;
let insideOfLevel;
let outsideOfLevel;
let link;
let linkRight;
let linkLeft;
let linkX;
let linkY;
let linkFacing;
let linkRed;
let linkHit;
let linkHitRed;
let linkHP;
let by,bx;
let velocityY;
let gravity;
let velocityX;

let sprintTimer;
let sprintCooldown;
let bird;

let smashRight;
let smashLeft;
let smashTimer;
let easyButtonY=250,easyButtonX=200;
let smashCooldown;
let smash;

let slimeBoss;
let slimeBossCharge;
let slimeBossPredict;
let slimeBossSpit;
let slimeBossBall;
let slimeBossSpikes;
let slimeBossRed;

let startGame;
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
let enemygoRed;
let enemyHP;

let gameOver;
let victory;

let enemyHealths;
let heart;

let difficulty;

let ganondorfLeft;
let ganondorfRight;


//state -1 = victoryscreen
//state -2 = game OVER
//state -3 = ???
//state 1 = game

// preload function loading images and sounds
function preload(){
  bg1 = loadImage("assets/PNG/Hills Layer 01.png");
  bg2 = loadImage("assets/PNG/Hills Layer 02.png");
  bg3 = loadImage("assets/PNG/Hills Layer 03.png");
  bg4 = loadImage("assets/PNG/Hills Layer 04.png");
  bg5 = loadImage("assets/PNG/Hills Layer 05.png");
  bg6 = loadImage("assets/PNG/Hills Layer 06.png");
  linkRight = loadImage("assets/a/linkRight.png");
  linkLeft = loadImage("assets/linkLeft/linkLeft.png");
  smashRight = loadImage("assets/smashRight.png");
  smashLeft = loadImage("assets/smashLeft.png");
  slimeBoss = loadImage("assets/slimeBoss.png");
  slimeBossCharge = loadImage("assets/slimeBossCharge.png");
  slimeBossPredict = loadImage("assets/slimeBosstell.png");
  slimeBossSpit = loadImage("assets/slimeBossSpit.png");
  slimeBossBall = loadImage("assets/slimeBossBall.png");
  slimeBossSpikes = loadImage("assets/slimeBossSpikes.png");
  slimeBossRed = loadImage("assets/slimeBossRed.png");
  linkRed = loadImage("assets/linkRed.png");
  gameOver = loadImage("assets/gameOver.png");
  gameOverSound = loadSound("assets/gameOverSound.mp3");
  victory = loadImage("assets/winScren.png");
  menuScreenSound = loadSound("assets/menu.mp3");
  backgroundMusic = loadSound("assets/backgroundMusic.mp3");
  enemyHealths = loadImage("assets/enemyHealths.png");
  heart = loadImage("assets/heart.png");
  ganondorfLeft = loadImage("assets/ganondorfleft.png");
  ganondorfRight = loadImage("assets/ganondorfright.png");
  menuScreen = loadAnimation("assets/backgorun/frame_0_delay-0.1s.png","assets/backgorun/frame_1_delay-0.1s.png","assets/backgorun/frame_2_delay-0.1s.png","assets/backgorun/frame_3_delay-0.1s.png","assets/backgorun/frame_4_delay-0.1s.png","assets/backgorun/frame_5_delay-0.1s.png");
}
// setup function
function setup() {
  createCanvas(1320, 640);
  lose = false;
  bx = width;
  by = 50;
  menuScreenSound.loop();
  menuScreenSound.setVolume(0.8);
  bird = createSprite(bx,by, 24, 24);
  bird.addAnimation("assets/bird/frame_0_delay-0.1s.png","assets/bird/frame_1_delay-0.1s.png","assets/bird/frame_2_delay-0.1s.png","assets/bird/frame_3_delay-0.1s.png","assets/bird/frame_4_delay-0.1s.png","assets/bird/frame_5_delay-0.1s.png");
  linkX = 150;
  linkY = 300;
  linkFacing = "right";
// physics stuff
  velocityY = 0;
  gravity = 1;
  velocityX = 0;
  sprintTimer = 0;
  sprintCooldown = 0;
// ATTACK COOLDOWN AND STUFF
  smashTimer = 0;
  smashCooldown = 0;
  smash = 0;

  state = -3;
  tutorialstate = 0;
  tutorialTimer = 0;
// ENEMY VAULES
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
  linkHitRed = 0;
  linkHP = 3;

  enemyHit = 0;
  enemygoRed = 0;
  enemyHP = 10;

  difficulty = 0;
}
// DRAW FUNCTION
function draw() {
  parallaxEffect();
  player();
  randomBird();
  drawSprites();
  ////////states///////////////////////////////

  if (state === -3) {
    Menu();
  }
  if (state === -2) {
    drawGameOver();
    // gameOverSound.setVolume(0.2);
    // gameOverSound.play();
    // menuScreenSound.stop();
  }
  if (state === -1) {
    drawVictory();
  }
  if (state === 0) {
    frameRate(60);
    randomBird();
    drawTutorial();
  }
  if (state === 1) {
    drawPlayersHealth();
    drawEnemyHealth();
    drawSlime();
  }
  if (state === 2) {
    drawSecondBoss();
  }
}
//////////// parallaxEffect //////////////////////////
function parallaxEffect(){
  background(bg1);

  image(bg2,0 -1*linkX%1320, 5, 1320, 640);// the first image is before the parallax effect happens
  image(bg2,0 -1*linkX%1320+ 1320,5, 1320, 640); // The second picture is used to have the illusion of an infinite background

  image(bg3,0- 1.25*linkX%1320,0, 1320, 640);
  image(bg3,0- 1.25*linkX%1320+1320, 0, 1320, 640);

  image(bg4,0- 1.50*linkX%1320, 0, 1320, 640);
  image(bg4,0- 1.50*linkX%1320+1320, 0, 1320, 640);

  image(bg5,0- 1.75*linkX%1320, 0, 1320, 640);
  image(bg5,0- 1.75*linkX%1320+1320, 0, 1320, 640);

}
/////////// the tutorial //////////////////////////////////
function drawTutorial(){
  if (keyIsDown(51) && tutorialTimer === 0) {
    state = 2;
  }
  if (keyIsDown(49) && tutorialTimer === 0) {
    tutorialstate = tutorialstate + 1;
    tutorialTimer = 30;
  }
  if (tutorialTimer > 0) {
    tutorialTimer = tutorialTimer - 1;
  }
  textSize(25);
  fill("white");
  if (tutorialstate === 0) {
    text("Welcome to the tutorial. Press 1 to proceed. Press 2 to skip.", 50, 600);
    if (keyIsDown(50)) {
      tutorialTimer = 30;
      tutorialstate = 9;
    }
  }
  else if (tutorialstate === 1) {
    text("Press A or Arrow key left to move left, and D or Arrow key right to move right. Press 1 to proceed.", 50, 600);
  }
  else if (tutorialstate === 2) {
    text("Press space to jump. You can move while in the air.", 50, 600);
  }
  else if (tutorialstate === 3) {
    text("Press shift to roll. You can roll while in the air.", 50, 600);
  }
  else if (tutorialstate === 4) {
    text("Press enter to attack. Attacks and sprintes have a 0.5 second cooldown.", 50, 600);
  }
  else if (tutorialstate === 5) {
    text("Hit enemies with your attack to defeat them. Avoid touching them and their attacks.", 50, 600);
  }
  else if (tutorialstate === 6) {
    text("Your health is shown on the top left corner of your screen.", 50, 600);
    drawPlayersHealth();
  }
  else if (tutorialstate === 7) {
    text("The enemies' health is shown on the top right corner.", 50, 600);
    drawEnemyHealth();
  }
  else if (tutorialstate === 8) {
    text("Time to face your first foe, the Slime boss!", 50, 600);
  }
  else if (tutorialstate === 9) {
    text("Press 1 to for casual mode, and 2 for normal mode.", 50, 600);
    if (keyIsDown(50) && tutorialTimer === 0) {
      tutorialstate++;
      difficulty = 1;
    }
  }
  else if (tutorialstate === 10) {
    state = 1;
    /////////// START GAME/////////////////////////////
  }
}
//////////////////////////// GAME OVER SCREEN ///////////////////////////////////////////
function drawGameOver() {
  textSize(25);
  fill("white");
  image(gameOver, 320, 80, 640, 320);
  text("Press 1 to restart on casual mode. Press 2 to restart on normal mode.", 50, 600);
  if (keyIsDown(49) || keyIsDown(50) || keyIsDown(51)) {
    enemygoRed = 0;
    enemyTimer = 0;
    linkHit = 0;
    linkHitRed = 0;
    linkHP = 3;
    enemyHit = 0;
    enemygoRed = 0;
    enemyHP = 10;
    smash = 0;
    sprintTimer = 0;
    sprintCooldown = 0;
    smashTimer = 0;
    smashCooldown = 0;
    enemyState = "slime";
    enemyVelocityY = 0;
    enemySide = "right";
    enemyX = 800;
    enemyY = -241;
  }
////////////////// CHANGE GAMEMODE/////////////////////////
  if (keyIsDown(49)) {
    state = 1;
    difficulty = 0;
  }
  if (keyIsDown(50)) {
    state = 1;
    difficulty = 1;
  }
}
//////////////////// SHOW THE HEARTS//////////////////////
function drawPlayersHealth() {
  if (linkHP > 0) {
    image(heart, 35, 20, 40, 40);
  }
  if (linkHP > 1) {
    image(heart, 70, 20, 40, 40);
  }
  if (linkHP > 2) {
    image(heart, 105, 20, 40, 40);
  }
}
////////////////// SHOW ENEMY HEARTS /////////////////////////////////
function drawEnemyHealth(){
  if (enemyHP > 0) {
    image(enemyHealths, 1220, 20, 40, 40);
  }
  if (enemyHP > 1) {
    image(enemyHealths, 1160, 20, 40, 40);
  }
  if (enemyHP > 2) {
    image(enemyHealths, 1100, 20, 40, 40);
  }
  if (enemyHP > 3) {
    image(enemyHealths, 1040, 20, 40, 40);
  }
  if (enemyHP > 4) {
    image(enemyHealths, 980, 20, 40, 40);
  }
  if (enemyHP > 5) {
    image(enemyHealths, 920, 20, 40, 40);
  }
  if (enemyHP > 6) {
    image(enemyHealths, 860, 20, 40, 40);
  }
  if (enemyHP > 7) {
    image(enemyHealths, 800, 20, 40, 40);
  }
  if (enemyHP > 8) {
    image(enemyHealths, 740, 20, 40, 40);
  }
  if (enemyHP > 9) {
    image(enemyHealths, 680, 20, 40, 40);
  }if (enemyHP > 0) {
    image(enemyHealths, 1220, 20, 40, 40);
  }
  if (enemyHP > 1) {
    image(enemyHealths, 1160, 20, 40, 40);
  }
  if (enemyHP > 2) {
    image(enemyHealths, 1100, 20, 40, 40);
  }
  if (enemyHP > 3) {
    image(enemyHealths, 1040, 20, 40, 40);
  }
  if (enemyHP > 4) {
    image(enemyHealths, 980, 20, 40, 40);
  }
  if (enemyHP > 5) {
    image(enemyHealths, 920, 20, 40, 40);
  }
  if (enemyHP > 6) {
    image(enemyHealths, 860, 20, 40, 40);
  }
  if (enemyHP > 7) {
    image(enemyHealths, 800, 20, 40, 40);
  }
  if (enemyHP > 8) {
    image(enemyHealths, 740, 20, 40, 40);
  }
  if (enemyHP > 9) {
    image(enemyHealths, 680, 20, 40, 40);
  }
}
///////////////////////  DRAW SLIME IMAGES AND SLIME AI /////////////////////////////////////////////
function drawSlime() {
  if (enemyHP < 1) {
    state = -1;
  }
/////////////// IF PLAYER HITS ENEMY ///////////////////////////////////////////
	if (smash === 1) {
		if (linkFacing === "right") {
			if ( abs( linkX - enemyX - 40 ) < 200 && abs( linkY - enemyY - 40 ) < 200 ) {
				enemyHit = 1;
			}
		}
    else {
			if ( abs( linkX - enemyX - 200 ) < 200 && abs( linkY - enemyY - 40 ) < 200 ) {
					enemyHit = 1;
			}
		}
	}
/////////////////// SHOW THE RED IMAGE OF SLIME //////////////////////////
  if (enemyHit === 1) {
		if (enemygoRed === 0) {
			enemyHP--;
			enemygoRed = 20;
		}
    else if (enemygoRed > 1) {
			enemygoRed--;
		}
    else {
      enemyHit = 0;
      enemygoRed--;
    }
  }
  ///////////// CALLING THE DIFFERENT PHASES OF THE SLIME //////////////////////////////
	if (enemyHit === 0 || enemygoRed % 10 < 5) {
		if (enemyState === "slime") {
			image(slimeBoss, enemyX, enemyY, 320, 240);
		}
		if (enemyState === "tell") {
			image(slimeBossPredict, enemyX, enemyY, 320, 240);
		}
		if (enemyState === "spit") {
			image(slimeBossSpit, enemyX, enemyY, 320, 240);
		}
		if (enemyState === "charge") {
			image(slimeBossCharge, enemyX, enemyY, 320, 240);
		}
	} else {
		image(slimeBossRed, enemyX, enemyY, 320, 240);
	}
//////////////////////////// IF ENEMY HITS PLAYER //////////////////////////////
	if ( abs( linkX - enemyX - 120 ) < 200 && abs( linkY - enemyY - 40) < 200 ) {
		linkHit = 1;
	}
///////////////////////// PHASE ONE FOR SLIME ////////////////////////////////////////////////////////
 	if (enemystate === 0) {
		if (enemyTimer < 1) {
      linkX = 160;
		  linkY = 400;
      enemyTimer++;
		}
    else if (enemyTimer < 34) {
			enemyVelocityY++;
			enemyY = enemyY + enemyVelocityY;
			enemyTimer++;
		}
    else if (enemyTimer < 64) {
			image(slimeBossSpikes, enemyX - 160, enemyY + 80, 160, 160);
			image(slimeBossSpikes, enemyX + 320, enemyY + 80, 160, 160);
			if ( abs(linkX - enemyX - 120) < 360 && abs(linkY - enemyY - 120) < 160) {
				linkHit = 1;
			}
			enemyTimer++;
		}
    else {
	  	enemyTimer = 0;
			enemystate = 1;
		}
	}
  //////////////////// SECOND PHASE ////////////////////////////////////////
	if (enemystate === 1) {
		if (enemyTimer < 50 && difficulty === 0) {
			enemyTimer++;
			enemyState = "slime";
		}
    else {
      enemyTimer = 0;
			enemystate = 2 + floor( random() * 3 );
		}
	}
  ////////////////// THRID PHASE //////////////////////////////////////
	if (enemystate === 2) {
		if (enemyTimer < 50) {
			enemyState = "charge";
			enemyTimer++;
		}
    else if (enemyTimer < 100 - 25 * difficulty ) {
			enemyTimer++;
			if (enemySide === "right") {
				enemyX = enemyX - (16 + 16 * difficulty);
			}
      else {
				enemyX = enemyX + (16 + 16 * difficulty);
			}
		}
    else if (enemyTimer < 115 - 25 * difficulty) {
			enemyTimer++;
		}
    else if (enemyTimer < 135 - 25 * difficulty ) {
			enemyTimer++;
			enemyState = "slime";
			if (enemySide === "right") {
				enemyX = enemyX + 8;
			}
      else {
				enemyX = enemyX - 8;
			}
		}
    else if (enemyTimer < 155 - 25 * difficulty ) {
			enemyTimer++;
		}
    else {
			if (enemySide === "right") {
				enemySide = "left";
			}
      else {
				enemySide = "right";
			}
			enemyTimer = 0;
			enemystate = 1;
		}
	}
 ///////////// FOURTH PHASE /////////////////////////////////////
	if (enemystate === 3) {
		if (enemyTimer < 1) {
			enemyState = "slime";
			enemyVelocityY = -34;
			enemyTimer++;
		}
    else if (enemyTimer < 68) {
			enemyVelocityY++;
			enemyY = enemyY + enemyVelocityY;
			enemyTimer++;
		}
    else if (enemyTimer < 98) {
			image(slimeBossSpikes, enemyX - 160, enemyY + 80, 160, 160);
			image(slimeBossSpikes, enemyX + 320, enemyY + 80, 160, 160);
			enemyTimer++;
			if ( abs(linkX - enemyX - 120) < 360 && abs(linkY - enemyY - 120) < 160) {
				linkHit = 1;
			}
		}
    else {
	  	enemyTimer = 0;
			enemystate = 1;
		}
	}
	if (enemystate === 4) {
		if (enemyTimer < 49) {
			enemyState = "tell";
			enemyTimer++;
		}
    else if (enemyTimer < 50) {
  ///////////////////////// WHEN THE SLIME SPITS THE BALL GO TOWARDS WERE EVER THE PLAYER IS /////////////////////////////////////////////
      enemyBallX = enemyX + 80;
      enemyBallY = enemyY + 40;
      enemyBallVelocityX = (linkX - enemyX - 120) / ( sqrt( pow( linkX - enemyX - 120 , 2 ) + pow( linkY - enemyY - 40 , 2) ) / (12 + 12 * difficulty) );
      enemyBallVelocityY = (linkY - enemyY - 40) / ( sqrt( pow( linkX - enemyX - 120 , 2) + pow( linkY - enemyY - 40, 2) ) / (12 + 12 * difficulty) );
      enemyTimer++;
    }
    else if (enemyTimer < 150 - 50 * difficulty ) {
      enemyState = "spit";
      enemyBallX = enemyBallX + enemyBallVelocityX;
      enemyBallY = enemyBallY + enemyBallVelocityY;
      image(slimeBossBall, enemyBallX, enemyBallY, 160, 160);
      enemyTimer++;
      if ( abs( linkX - enemyBallX - 40 ) < 120 && abs( linkY - enemyBallY) < 160 ) {
        linkHit = 1;
      }
    }
    else {
      enemyTimer = 0;
      enemystate = 1;
    }
  }
}
///////////////////////// WIN SCREEN ///////////////////////////////////////
function drawVictory() {
  image(victory, 0, 0, 1320,640);
  textSize(25);
  fill("white");
  text("Press 1 to restart on casual mode. Press 2 to restart on normal mode. Press 3 to challenge the Final boss.", 50, 600);
  if (keyIsDown(49) || keyIsDown(50) || keyIsDown(51)) {
    enemygoRed = 0;
    enemyTimer = 0;
    linkHit = 0;
    linkHitRed = 0;
    linkHP = 3;

    enemyHit = 0;
    enemystate = 0;
    enemyHP = 10;

    smash = 0;
    sprintTimer = 0;
    sprintCooldown = 0;
    smashTimer = 0;
    smashCooldown = 0;

    enemyState = "slime";
    enemyVelocityY = 0;
    enemySide = "right";
    enemyX = 800;
    enemyY = -241;
  }

  if (keyIsDown(49)) {
    state = 1;
    difficulty = 0;
  }
  if (keyIsDown(50)) {
    state = 1;
    difficulty = 1;
  }
  if (keyIsDown(51)) {
    state = 2;
    difficulty = 1;
  }
}
///////////////////// ALL THE PLAYER VALUES /////////////////////////
function player(){
  if (linkHP < 1) {
    state = -2;
  }
  else {
    gameOverSound.stop();
  }

  if (linkHit === 1) {
    if (linkHitRed === 0) {
      linkHP--;
      linkHitRed = 60;
    }
    else if (linkHitRed > 1) {
      linkHitRed--;
    }
    else {
      linkHit = 0;
      linkHitRed--;
    }
  }
  ///////move left or right////////////////////////////////
  if (sprintTimer === 0) {
    gravity = 1;
    if (keyIsDown(65)||keyIsDown(LEFT_ARROW)) {
      if (keyIsDown(68)||keyIsDown(RIGHT_ARROW)) {
        velocityX = 0;
      }
      else {
        linkFacing = "left";
        velocityX = -5;
      }
    }
    else if (keyIsDown(68)||keyIsDown(RIGHT_ARROW)) {
      linkFacing = "right";
      velocityX = 5;
    }
    else {
      velocityX = 0;
    }
    /////////////JUMPING////////////////////////////
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
  /////////boundeirs/////////////////////////////
  if (linkY + velocityY <= 400) {
    linkY = linkY + velocityY;
  }
  else {
    linkY = 400;
  }

  if (linkX + velocityX < 0) {
    linkX = 0;
  }
  ///////// if i increase this variable the parallax will contuinue unril he hits this value and stop
  else if (linkX + velocityX > 1200) {
    linkX = 1200;
  }
  else {
    linkX = linkX + velocityX;
  }
  ////////////////sprint cooldown and smash////////////////
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
  ////////////link turns red when hit nad changing image left or right///////////////
  if (linkHit === 0 || linkHitRed % 10 < 3) {
    if (linkFacing === "right") {
      image(linkRight, linkX, linkY, 120, 160);
    }
    else {
      image(linkLeft, linkX, linkY, 120, 160);
    }
  }
  else {
    image(linkRed, linkX, linkY, 120, 160);
  }
}
//////////////////// THE SECOND BOSS //////////////////////////////////////
function drawSecondBoss() {
//////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////////////////////////////////
///////////////////////////////////
  fill("green");
  textSize(50);
  text("To Be Continued",500,320,400,400);
  image(ganondorfLeft,790,200,520,490);
/////////////////////////
//////////////////
/////////////
///////////
///////
/////
////
//
}
// THE RANDOM BIRD ON THE TOP RIGHT CORNER OF SCREEN DOESNT WORK!!! //
function randomBird() {
  // Moving up at a constant speed
  bird.position.bx = bird.position.bx - 0.5;

  // Reset to the bottom
  if (bird.position.bx < 0) {
    bird.position.bx = width;
  }
}
////////////////////// AND THE MAIN MENU /////////////////////////////////////////////
function Menu(){
  frameRate(60);
  animation(menuScreen, 660, 320);
  if (keyIsDown(13)) {
    state = 0;
  }
}
