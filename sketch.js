var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var v1,v2,h1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	v1 = Bodies.rectangle(width-300 , 600 , 20 , 100 , {isStatic:true});
	World.add(world,v1);



	v1Sprite=createSprite(v1.position.x,v1.position.y,20,100);
	v1Sprite.shapeColor="red";


	v2 = Bodies.rectangle(width-500 , 600 , 20 , 100 , {isStatic:true});
	World.add(world,v2);
	



	v2Sprite=createSprite(v2.position.x,v2.position.y,20,100);
	v2Sprite.shapeColor="red";


	h1 = Bodies.rectangle(width-400 , 650 , 175 , 20 , {isStatic:true});
	World.add(world,h1);



	h1Sprite=createSprite(h1.position.x,h1.position.y,175,20);
    h1Sprite.shapeColor="red";
	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



