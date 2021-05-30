
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey =createSprite(80,315,20,20);
  monkey.addAnimation("moving",_monkey_running);
  monkey.scale =0.1
  
  ground =createSprite(400,350,900,10)
  ground.velocityX =-4
  ground.x=ground.width/2
  console.log(ground.x)
  

  
}


function draw() {
if(keyDown("space")){
  monkeyJump();
  
  monkey.collide(ground)
}
  var surivalTime =0;
  store("white")
  textSize(20)
  fill("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  surivalTime =Math.ceil(frameCount/frameRate())
  text("surivalTime: "+ surivalTime, 100 ,50);

  drawSprites();
}

function food(){
  if(World.frameCount % 80 === 0){
    banana =createSprite(400,200,20,20)
    banana.y =Math.round(random(1,2))
    banana.velocityX =-(8+(score/10));
    banana.setLifeTime=50;
    bananaGroup.add(banana)
  }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
   obstacles.addImage("obstacles.png")
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}






