
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1 = new Hammer(400, 400, 100, 50);
	plane = new Plane(350, 600, 700, 20);
	stone = new Stone(400, 350, 50, 50);
  rubber = new Rubber(200, 300, 50);
  sand1 = new Sand(200, 400, 10);
  sand2 = new Sand(200, 410, 10);
  sand3 = new Sand(200, 420, 10);
  sand4 = new Sand(200, 430, 10);
  sand5 = new Sand(200, 440, 10);
  sand6 = new Sand(200, 450, 10);
  sand7 = new Sand(200, 460, 10);
  sand8 = new Sand(200, 470, 10);
  sand9 = new Sand(200, 480, 10);
  sand10 = new Sand(200, 490, 10);
  iron1 = new Iron(200, 500, 50, 80);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  rubber.display();
  iron1.display();
  hammer1.display();
  plane.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
 
}



