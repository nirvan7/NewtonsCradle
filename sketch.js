
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  var bobdiameter=100;
		bob1=new Bob(200,550,bobdiameter);
		bob2=new Bob(300,550,bobdiameter);
		bob3=new Bob(400,550,bobdiameter);
		bob4=new Bob(500,550,bobdiameter);
    bob5=new Bob(600,550,bobdiameter);
    
    roof = new Roof(400,105,600,40);
   
    rope1= new Rope(bob1.body,roof.body,-bobdiameter*2,0);
    rope2= new Rope(bob2.body,roof.body,-bobdiameter*1,0);
    rope3= new Rope(bob3.body,roof.body,-bobdiameter*0,0);
    rope4= new Rope(bob4.body,roof.body,bobdiameter*1,0);
    rope5= new Rope(bob5.body,roof.body,bobdiameter*2,0);

   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
  //  Matter.Body.setStatic(bob1.body,false);
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1500,y:150});
   // bob1.velocityY=-2;
 
  }	
}


