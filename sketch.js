var car;
var wall
var speed,weight;
function setup() {
  createCanvas(800,400);
  car=createSprite(100,200,30,30);
  wall=createSprite(600,200.30,10);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}


function draw() {
  background("black");  
  deformation=0.5*weight*speed*speed/22500;

  if(car.isTouching(wall) ){
    car.velocityX=0;
  if(deformation<100){car.shapeColor="green"}
  if(deformation<180){car.shapeColor="yellow"}
  
  else if(deformation>180){car.shapeColor="red"}


  }
  
  drawSprites();
  
}