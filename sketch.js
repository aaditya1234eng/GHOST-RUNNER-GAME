var ghostImage,towerImage,doorImage,climberImage
var PLAY=1;
var END=0;
var climberGroup,doorGroup,invisibleblockGroup;
var gameState=PLAY;

function preload(){
  ghostImage=loadImage("ghost-standing.png");
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png")
  
}
 function setup () {
   createCanvas(600,600);
   
  tower = createSprite(300,300,600,600);
   tower.addImage("tower",towerImage);
   tower.velocityY=1
   
 
 ghost= createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImage); 
   
   ghost.scale=0.5;
   
   climberGroup=new Group();
   doorGroup=new Group();
   invisibleblockGroup=new Group();
   
   
 }
function draw(){
  background(0);
  
if(gameState===PLAY) {
 if(tower.y>400){
    tower.y=300;
  }
  if(keyDown("space")){ 
     ghost. velocityY=-8
  }
      
  ghost.velocityY=ghost.velocityY+0.5;                     
   
  if(keyDown("left")){
   ghost.x=ghost.x-3; 
  }
     
  if(keyDown("Right")){
   ghost.x=ghost.x+3; 
}
  spawnDoors();
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
   }
  
   
  if(invisibleblockGroup.isTouching(ghost)){
   gameState=END;  
  }
  
  
  drawSprites();
  
  
} 
  
if(gameState===END)  {
  stroke("yellow")
  textSize(24)
  text("Game 0ver",300,300)
}
  console.log(tower.y)
  
  
}
function spawnDoors(){
    if(frameCount%280 ===0){
door=createSprite(200,-50);
  door.addImage(doorImage);
door.velocityY=1;  
door.x=Math.round(random(120,400));
      
  climber=createSprite(200,10) ;   
   climber.addImage( climberImage);
  climber.velocityY=1 ;
     climber.x=door.x 
      
       invisibleblock=createSprite(200,15);
      invisibleblock.width=climber. width;  
      invisibleblock.height=2 ;
      invisibleblock.x=door.x;
      invisibleblock.velocityY=1
      invisibleblock.debug=true;
      
      door.lifetime=400;
      climber.lifetime=400;
      invisibleblock.lifetime=400; 
      
      ghost.depth=door.depth;
      ghost.depth+=1;
      
     climberGroup.add(climber); 
      doorGroup.add(door);
      invisibleblockGroup.add(invisibleblock);
}
}
  
  




