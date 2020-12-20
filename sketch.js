
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var b1,b2,b3,b4,b5
var roof1,r1,r2,r3,r4,r5,world,engine
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;
	roof1=new roof(800,175,800,20)
	bobd=40
	bobx=800
	boby=675
	b3=new bob(bobx,boby,bobd)
    r3=new rope(b3.body,roof1.body,0,0)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   roof1.display();
   b3.display();
   r3=display();





  drawSprites();
 
}



