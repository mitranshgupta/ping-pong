var ball;
var paddle1;
var paddle2;
var dot;
function setup(){
  createCanvas(400,400,200,200)
ball = createSprite(200,200,20,20)
ball.shapeColor="yellow"
paddle1 = createSprite(10,200,10,70)
paddle2 = createSprite(390,200,10,70)
paddle2.shapeColor="red"
paddle1.shapeColor="white"

}
function draw(){
  background("black")
  drawSprites()
  
}
