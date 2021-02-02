
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var bin;
var binL;
var binR;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
	//falseGround = new FalGround(400,678,800,30);

	paper = new Paper(100,450,35);

	bin = new Bin(600, 660, 150, 20);
	//binL = new Bin(525,620,20,100);
	//binR = new Bin(675, 620, 20, 100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
  //Engine.update(engine);

  ground.display();
  //falseGround.display();
  paper.display();
  bin.display();
  //binL.display();
  //binR.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-65});
	}

}