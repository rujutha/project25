
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  dustbinImage=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,570,800,20)
paper= new Paper(100,30,48,48);
//Body.setCollider(paper.body,"rectangle",0,0,35,35);
box1= new Dustbin(650,557,100,10);
box2= new Dustbin(598,510,10,100);
box3= new Dustbin(702,510,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(255);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  imageMode(CENTER);
        image(dustbinImage,650,505,100,100);
        //Body.setCollider(paper.body,"circle",0,0,35);
       // Body.setMass(paper.body,100);
       // image.scale=0.5;
       //Body.scale(paper.body, 70, 70, );
      // console.log(paper.body.x);
      //paper.body.inertia(0);
     // paper.collide(ground);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Body.applyForce(paper.body,paper.body.position,{x:272,y:-272});
   console.log(force);
	}
}

