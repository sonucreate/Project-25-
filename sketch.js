
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,670,70);
	dustbin=new Dustbin(600,570,80,100,options);
	ground=new Ground(400,673,1000,10)
	box1=new Box(640,670,80,10,options);
	box2=new Box(680,620,10,110,options);
	box3=new Box(600,620,10,110,options);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  dustbin.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:3})
	console.log(paper)
	}
	

