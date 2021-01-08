
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, leftside, middle, rightside, dustbin2;

function preload() {
	dustbin2 = loadImage("bin.png");
}

function setup() {
	createCanvas(1200,400);

    
	engine = Engine.create();
	world = engine.world;

    
	ball = new Paper(300,200,50);
	leftside = new Dustbin(770,270,20,100);
	rightside = new Dustbin(890,270,20,100);
	middle = new Dustbin(830,330,100,20);
	ground = new Ground(600,350,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground.display();
  leftside.display();
  rightside.display();
  middle.display();
  drawSprites(); 
  image (dustbin2, 755,220,150,120);
  ball.display();
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball.body,middle.body.position,{x:400,y:-400});
		Text("Yay, you did it!",200,100);
	}
}


