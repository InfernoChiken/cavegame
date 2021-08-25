var bg, bgImg;
var player, playerJump, playerDie, playerStand;
var platform1, platform2, platform3, platform4;
var platformImg, coinImg;
var coinArray = [];
var coinSound, endSound;
var coinsLeft = 2;

var platformGroup;

function preload(){
  bgImg = loadImage("Assets/cavebg.png");
  playerJump = loadAnimation("Assets/player1.png","Assets/player2.png");
  playerStand = loadAnimation("Assets/player1.png");
  platformImg = loadImage("Assets/platform.png");
  coinImg = loadImage("Assets/coin.png");
  platformGroup = new Group();
  coinSound = loadSound("Assets/coin.wav");
  endSound = loadSound("Assets/Success.wav");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player = createSprite(370, 200, 50, 50);
  player.addAnimation("stand", playerStand);
  player.scale = 2;
  //player.debug = true;
  player.setCollider("circle", 0,0, 20);

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
  platforms(width*2+250, height/2+50);
  platforms(width*2+500, height/2);
  platforms(width*2+750, height/2+50);
  platforms(width*3-350, height/2-20);
}

function draw() {
  background(255,255,255);  
  camera.x = player.x;
  camera.y = width/4;
  image(bgImg, 0, 0, width*3, height);
  //platform1.display();
  player.velocityY += 0.5;

  player.collide(platformGroup);

  //console.log(player.y);

  if(keyDown("right")){
    player.x += 5;
  }

  if(keyDown("left")){
    player.x -= 5;
  }
  
  if(keyDown("up")){
    player.velocityY = -5;
  }

  for(var i=0; i<coinArray.length; i++){
    collide(player, i);
  }


  drawSprites();

  fill("white");
  textSize(30);  
  text("Coins left: "+ coinsLeft, player.x, 50);

  if(player.y > 600){
    gameOver(2);
  }

  if(coinsLeft === 0){
    gameOver(1);
  }
}

function platforms(x,y){
  var platform = createSprite(x,y);
  platform.addImage(platformImg);
  platformGroup.add(platform);

  var coin = createSprite(platform.x,platform.y-100,50, 50);
  coin.addImage(coinImg);
  coin.scale = 0.1;
  coinArray.push(coin);
}

function collide(player, index){
  var distance = dist(player.x,player.y,coinArray[index].x,coinArray[index].y);
  //console.log(distance);
  if(distance < 70){
    coinArray[index].destroy();
    coinArray.splice(index,1);
    coinSound.play();
    coinsLeft--;
  }
}

function gameOver(num){
  background("black");
  if(num === 1){
  fill("white");
  textSize(100);
  text("Congratulations, You Won!", player.x-600, height/2);
  //endSound.play();
  }else{
    fill("red");
    textSize(100);
    text("You Died", player.x-100, height/2);
  }
  
}