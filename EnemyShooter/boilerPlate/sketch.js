var enemy, enemyimg;
var flame, flameimg;
var shooter, shooterimg;
var backgroundImg;
var shooterflyimg;
var score;
var enemyGroup;
var gamestate;
var PLAY;
var END;
//var retry, retryimg;
function preload(){
enemyimg= loadImage("images/enemy.png");
flameimg= loadImage("images/flame.png");
shooterimg= loadImage("images/shooter.png");
backgroundImg= loadImage("images/bg1.png");
shooterflyimg= loadImage("images/shooterfly.png");
retryimg= loadImage("images/retry.png")

}
function setup() {
  createCanvas(1300,600);
  shooter= createSprite(900,400,10,10);
  shooter.addImage(shooterimg);
  shooter.scale=0.15;
  enemyGroup=createGroup();
  score= 150;
  PLAY =1;
  END=0;
  gamestate=1;
  
}

function draw() {
  textSize(35);
  fill("black");
 // playSound("sounds/bgmusic_files");
  background(backgroundImg); 
  if(gamestate===1){
    if(keyWentDown(UP_ARROW)){
      shooter.velocityX= 4;
      shooter.velocityY= 5;
      shooter.addImage(shooterflyimg);
      if(shooter.x<0 && shooter.y<0 || shooter.x>1300 && shooter.y>1300 || shooter.x>0 && shooter.y>1300 || shooter.x>1300 && shooter.y>0 ){
        shooter.x=100;
        shooter.y=100;
      }
    }
    if(keyWentDown(RIGHT_ARROW)){
      shooter.velocityX= -4;
      shooter.velocityY=-6;
      shooter.addImage(shooterflyimg);
      if(shooter.x<0 && shooter.y<0 || shooter.x>1300 && shooter.y>1300 || shooter.x>0 && shooter.y>1300 || shooter.x>1300 && shooter.y>0  ){
        shooter.x=100;
        shooter.y=100;
      }
    }
    if(keyWentUp(UP_ARROW)){
      shooter.velocityX=0;
      shooter.velocityY=0;
      shooter.addImage(shooterimg);
    }
    if(keyWentUp(RIGHT_ARROW)){
      shooter.velocityX=0;
      shooter.velocityY=0;
      shooter.addImage(shooterimg);
    }
  
    if(enemyGroup.isTouching(shooter)){
      score=score-1;
      }
  
      if(score<0 || score === 0){
        gamestate=0;
      }
      spawnEnemy(); 
  }
      if(gamestate===0){
      enemyGroup.setVelocityXEach(0);
      enemyGroup.setVelocityYEach(0);
      enemyGroup.setLifetimeEach(-100);
      //enemyGroup.setVisibilityEach(false);
      text("Good Try! Refresh the page to play again!", 400,200);
    }
    
   

    text(score , 1200,50);
    
 
  drawSprites();
}
function spawnEnemy(){
  if(frameCount % 10 === 0){
    var enemy= createSprite ();
    enemy.addImage(enemyimg);
    var rand= Math.round(random(3,8));
    var Rand= Math.round(random(-100,1200));
    enemy.x= Rand;
    //enemy.y= Rand;
    enemy.velocityX= rand;
    enemy.velocityY= rand;
    enemy.scale= 0.1;
    enemy.lifetime= displayWidth/2;
    enemyGroup.add(enemy);
  }
}
