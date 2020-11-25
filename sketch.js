var bullet, wall, thickness;
var speed, weight, weight;
function setup() {
  createCanvas(1600,400);
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(225);

  bullet = createSprite(10, 200, 50, 50);
  bullet.shapeColor = color(225);

  speed = random(50,90);
  
  weight = random(30,52);
  
  thickness = random(22, 83);
}

function draw() {
  background(0);
  bullet.velocityX = speed;
  drawSprites();
}

function hasCollided(rbullet, lwall){
  bulletRightEdge = rbullet.x + rbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
     return true;
     
    }
     
  if (hasCollided(bullet, wall)){
      bullet.velocityX = 0;
      var damage = 0.5* weight* speed* speed/(thickness *thickness *thickness)
  
      if (damage > 10){
        wall.shapeColor = color(255, 0, 0);
      }
  
      if (damage < 10){
        wall.shapeColor = color(0, 255, 0);
      }
    }
  return false;
}
