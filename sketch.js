const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	Engine.run(engine);
	world = engine.world;
	
	//Create the Bodies Here.


ball1 = new Ball(300,height-100,50)
ball2 = new Ball(350,height-100,50)
ball3 = new Ball(400,height-100,50)
ball4 = new Ball(450,height-100,50)
ball5 = new Ball(500,height-100,50)

  groundSprite = new Bar(300,height-500,2000,50)
   World.add(world, groundSprite);
  
   groundSprite1 = new Bar(350,height-500,2000,50)
   World.add(world, groundSprite1);
  
   groundSprite2 = new Bar(400,height-500,2000,50)
   World.add(world, groundSprite2);
  
   groundSprite3 = new Bar(450,height-500,2000,50)
   World.add(world, groundSprite3);
   
   groundSprite4 = new Bar(500,height-500,2000,50)
	 World.add(world, groundSprite4);
   
   chain = new Rope(ball1.body, groundSprite.body,0,0)
   chain1 = new Rope(ball2.body, groundSprite1.body,0,0)
   chain2 = new Rope(ball3.body, groundSprite2.body,0,0)
   chain3 = new Rope(ball4.body, groundSprite3.body,0,0)
   chain4 = new Rope(ball5.body, groundSprite4.body,0,0)
  
}


function draw() {
  rectMode(CENTER);
  background("white") 
  Engine.update(engine); 
 
  ball1.display();
  chain.display();
  groundSprite.display()
  ball2.display();
  chain1.display();
  ball3.display();
  chain2.display();
  ball4.display();
  chain3.display();
  ball5.display();
  chain4.display();
  drawSprites();
  KeyPressed()
 
}



function KeyPressed(){
	if(keyWentDown("up")){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-200,y:-150})

	}

}