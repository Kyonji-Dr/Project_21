
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world; 
	ground = new Ground (400,790,800,20);
	leftSide = new Ground (550,750,20,200);
	rightSide = new Ground(750,750,20,200);

var ball_options = {
	isStatic:false,
	restitution:0.0001,
	friction:1,
	density:1.2

}


	//Create the Bodies Here
	ball = Matter.Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);


	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,20);
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:60,y:-60});
	}
}

