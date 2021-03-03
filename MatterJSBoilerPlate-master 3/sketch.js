
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground, wall1, base2, wall3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	wall1= createSprite(250, 610, 20, 100 )
	wall1.shapeColor = color (245, 27,0)
	wall3= createSprite(450, 610, 20, 100 )
	wall3.shapeColor = color (245, 27,0)
	base2= createSprite(350, 650, 200, 20)
	base2.shapeColor = color (245, 27,0)
  

	
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	wallbase = Bodies.rectangle(350, 630, 200, 20, {isStatic:true})
	World.add(world, wallbase)

	wallleft = Bodies.rectangle(450, 610, 20, 100, {isStatic:true})
	World.add(world, wallleft)

	wallright = Bodies.rectangle(250, 610, 20, 100, {isStatic:true})
	World.add(world, wallright)

paper= new Paper (10,50,50,50)

	

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();

  wall1.x=wall1.position.x
  wall1.y=wall1.position.y

  wall3.x=wall3.position.x
  wall3.y=wall3.position.y

  base2.x=base2.position.x
  base2.y=base2.position.y

  drawSprites();

  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   //Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:85})
   
	 }
   }

