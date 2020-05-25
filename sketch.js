var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";

  gameObject2.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //bounceOff(fixedRect, gameObject2);
  
  if (isTouching(movingRect, gameObject1)) {
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  drawSprites();
}
