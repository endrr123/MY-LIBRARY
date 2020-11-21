var movingRectangle;
var fixedRectangle;



function setup() {
  createCanvas(1200,800);
  movingRectangle = createSprite(100,600,20,40);
  movingRectangle.shapeColor = "blue"
  fixedRectangle = createSprite(700,600,20,40);
  fixedRectangle.shapeColor = "red"

  movingRectangle.debug = true;
  fixedRectangle.debug = true;
}

function draw() {
  background(255,255,255);
  movingRectangle.y = World.mouseY;
  movingRectangle.x  = World.mouseX;
  
  console.log(fixedRectangle.x - movingRectangle.x);

  if(fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && 
    movingRectangle.x - fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
    movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2 &&
    fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2){
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "yellow";
  
  }
  else{
    movingRectangle.shapeColor = "blue";
    fixedRectangle.shapeColor = "red";
  }
 
  drawSprites();
}