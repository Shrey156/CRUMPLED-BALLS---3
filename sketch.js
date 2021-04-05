
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin1,dustbin2,dustbin3,ground,paperOb;
var dustbinSprite,lAuncher;


function setup() {
	createCanvas(1360,621);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground = new Ground();
    dustbin1 = new Dustbin(900,480,150,30);
	dustbin2 = new Dustbin(830,418,30,155);
	dustbin3 = new Dustbin(970,418,30,155);
	paperOb = new Paper();
	dustbinSprite = new Dustbinimage();
	lAuncher = new Launcher(paperOb.body,{x:200,y:100});
	
}
function mouseDragged(){
Matter.Body.setPosition(paperOb.body,{x:mouseX,y:mouseY})
	
	}

function mouseReleased(){
		lAuncher.fly();
			}

function draw() {
	background(786,89,854);
	Engine.update(engine); 
  
  ground.display();
  paperOb.display();
  dustbinSprite.display();
  lAuncher.display();
  fill(129, 0, 134)
textSize(40)
text("Drag the paper and put it in dustbin with the help of launcher ",200,50)

 
}





