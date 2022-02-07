let ground;
let jet, earth;
let lazer;
let enemy1, enemy2, enemy3;
let villan;
var jet_img, earth_img, enemy1_img, enemy2_img, enemy3_img, villan_img, lazer_img;
var bg;
var score = 0;

function preload() {
  jet_img = loadImage("jet_img.png");
  earth_img = loadImage("earth.png");
  enemy1_img = loadImage("enemy_ship.png");
  enemy2_img = loadImage("enemy_ship.png");
  enemy3_img = loadImage("enemy_ship.png");
  villan_img = loadImage("villan_ship.png")
  bg = loadImage("bg.jpg");
  lazer_img = loadImage("10.png");
}

function setup() {
  createCanvas(1535.5, 717.9);
  frameRate(80);

  lazerGroup = new Group();

  jet = createSprite(490, 350, 40, 40);
  jet.addImage(jet_img);
  jet.scale = 0.09;

  jet.velocityX = 0;
  jet.velocityY = 0;

  enemy1 = createSprite(1100, 90, 40, 40);
  enemy1.addImage(enemy1_img);
  enemy1.scale = 0.21;

  enemy2 = createSprite(1420, 350, 40, 40);
  enemy2.addImage(enemy2_img);
  enemy2.scale = 0.21;

  enemy3 = createSprite(1100, 615, 40, 40);
  enemy3.addImage(enemy3_img);
  enemy3.scale = 0.21;

  villan = createSprite(1180, 350, 40, 40);
  villan.addImage(villan_img);
  villan.scale = 0.2;
  villan.debug = true;
  villan.velocityY = 5;
  villan.bounceOff("bottomEdge");
  //player.setCollider("rectangle", 0, 0, 300, 300);


  earth = createSprite(205, 350, 40, 40);
  earth.addImage(earth_img);
  earth.scale = 0.5;

  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background(bg);
  //image(bg_img,0,0);
  //push()
  //fill(255);
  //pop();
  jet.velocityX = 0;
  jet.velocityY = 0;


  if (keyDown("UP")) {
    jet.velocityX = 0;
    jet.velocityY = -5;
  }

  if (keyDown("DOWN")) {
    jet.velocityX = 0;
    jet.velocityY = 5;
  }

  if (keyDown("space")) {
    createlazer();

  }
 createEdgeSprites();
  drawSprites();
}

function createlazer() {
  lazer = createSprite(550, 100, 5, 5);
  lazer.addImage(lazer_img);
  lazer.scale = 0.3;
  lazer.velocityX = 6;
  lazer.lifetime = 60;
  lazer.y = jet.y
  lazerGroup.add(lazer)
}