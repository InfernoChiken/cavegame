var bg, bgImg;
var player, playerJump, playerDie, playerStand;
var platform1, platform2, platform3, platform4;
var platformImg, coinImg;

var platformGroup;

function preload(){
  bgImg = loadImage("Assets/cavebg.png");
  playerJump = loadAnimation("Assets/player1.png","Assets/player2.png");
  playerStand = loadAnimation("Assets/player1.png");
  platformImg = loadImage("Assets/platform.png");
  coinImg = loadImage("Assets/coin.png");
  platformGroup = new Group();
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player = createSprite(370, 200, 50, 50);
  player.addAnimation("stand", playerStand);
  player.scale = 2;
  //player.debug = true;
  player.setCollider("circle", 0,0, 20);

  
  // platform11 = new Platform(width*2+250, height/2+50, 100, 10);
  // platform12 = new Platform(width*2+500, height/2, 100, 10);
  // platform13 = new Platform(width*2+750, height/2+50, 100, 10);
  // platform14 = new Platform(width*3-350, height/2-20, 100, 10);

  platforms(width/4, height/2);
  platforms(width/2, height/2+50);
  platforms(width/2+200, height/3);
  platforms(width/2+400, height/2);
  platforms(width, height/2+100);
  platforms(width+250, height/2);
  platforms(width+500, height/2+50);
  platforms(width+750, height/2-20);
  platforms(width*2-350, height/3);
  platforms(width*2, height/2+100);
}

function draw() {
  background(255,255,255);  
  camera.x = player.x;
  camera.y = width/4;
  image(bgImg, 0, 0, width*3, height);
  //platform1.display();
  player.velocityY += 0.5;

  player.collide(platformGroup);

  if(keyDown("right")){
    player.x += 5;
  }

  if(keyDown("left")){
    player.x -= 5;
  }
  
  if(keyDown("up")){
    player.velocityY = -5;
  }

  drawSprites();
}

function platforms(x,y){
  var platform = createSprite(x,y);
  platform.addImage(platformImg);
  platformGroup.add(platform);

  var coin = createSprite(platform.x,platform.y-100,50, 50);
  coin.addImage(coinImg);
  coin.scale = 0.1;
}