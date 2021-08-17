var bg, bgImg;
var player, playerJump, playerDie, playerStand;
var platform1, platform2, platform3, platform4;

function preload(){
  bgImg = loadImage("Assets/cavebg.png");
  playerJump = loadAnimation("Assets/player1.png","Assets/player2.png");
  playerStand = loadAnimation("Assets/player1.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player = createSprite(370, 200, 50, 50);
  player.addAnimation("stand", playerStand);
  player.scale = 2;

  platform1 = new Platform(width/4, height/2, 100, 10);
  platform2 = new Platform(width/2, height/2+50, 100, 10);
  platform3 = new Platform(width/2+200, height/3, 100, 10);
  platform4 = new Platform(width/2+400, height/2, 100, 10);
  platform5 = new Platform(width, height/2+100, 100, 10);
  platform6 = new Platform(width+250, height/2, 100, 10);
  platform7 = new Platform(width+500, height/2+50, 100, 10);
  platform8 = new Platform(width+750, height/2-20, 100, 10);
  platform9 = new Platform(width*2-350, height/3, 100, 10);
  platform10 = new Platform(width*2, height/2+100, 100, 10);
  platform11 = new Platform(width*2+250, height/2+50, 100, 10);
  platform12 = new Platform(width*2+500, height/2, 100, 10);
  platform13 = new Platform(width*2+750, height/2+50, 100, 10);
  platform14 = new Platform(width*3-350, height/2-20, 100, 10);

}

function draw() {
  background(255,255,255);  
  camera.x = player.x;
  camera.y = width/4;
  image(bgImg, 0, 0, width*3, height);
  platform1.display();
  //player.velocityY += 0.5;

  if(keyDown("right")){
    player.x += 5;
  }

  if(keyDown("left")){
    player.x -= 5;
  }
  
  drawSprites();
}

function keyPressed(){
  if(keyDown("up")){
    player.velocityY = -5;
  }

}