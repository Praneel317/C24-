
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject, groundObject;
var world; 


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj = new dustbinObj(1200,650);
	paperObject = new paperObject(200,450,40);
	groundObject = new groundObject(width/2,670,width,20);
	//Create a Ground
	
	
	var render = Render.create({
		element: document.body,
		engine:engine,
		options: {
			width: 1200,
			height: 700,
			wireframes : false
		}
	});

	Engine.run(engine);
	//Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  
  drawSprites();
 var options = {
	 isStatic:false,
	 restitution:0.3,
	 friction:0.5,
	 density:1.2, 
 }
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


