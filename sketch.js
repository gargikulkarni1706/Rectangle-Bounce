  var movingRect, fixedRect


function setup() {
  createCanvas(800,1200);
  //createSprite(400, 200, 50, 50);

  movingRect = createSprite(600, 600, 50, 90);
  movingRect.shapeColor = "white";
  movingRect.velocityX = -5;
  fixedRect = createSprite(100, 600, 90, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityX = 5;
}

function draw() {
  background(0); 
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/ 2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/ 2)

  {
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
  }

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/ 2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/ 2)

  {
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  drawSprites();
}