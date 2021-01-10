
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function preload()
{
bg = loadImage("galaxy.png");
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

 ground = new Division(240,400,480,10);

division1 = new Division(50,600,10,500);
division2 = new Division(100,600,10,500);
division3 = new Division(150,600,10,500);
division4 = new Division(200,600,10,500);
division5 = new Division(250,600,10,500);
division6 = new Division(300,600,10,500);
division7 = new Division(350,600,10,500);
division8 = new Division(400,600,10,500);
division9 = new Division(450,600,10,500);
division10 = new Division(500,600,10,500);
division11 = new Division(550,600,10,500);
division12 = new Division(600,600,10,500);


 particle1 = new Particle(100,10);
 particle2 = new Particle(100,10);
 particle4 = new Particle(100,10);
 particle3 = new Particle(100,10);
 particle5 = new Particle(100,10);
 particle6 = new Particle(100,10);
 particle7 = new Particle(100,10);
 particle8 = new Particle(100,10);
 particle9 = new Particle(100,10);
 particle10 = new Particle(100,10);
 particle11 = new Particle(100,10);
 particle12 = new Particle(100,10);
 particle13 = new Particle(100,10);
 particle14 = new Particle(100,10);
 particle15 = new Particle(100,10);
 particle16 = new Particle(100,10);
 particle17 = new Particle(100,10);
 particle18 = new Particle(100,10);
 particle19 = new Particle(100,10);
 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  

  

 
 //ground.display();
particle1.display();
particle2.display();
particle3.display();
particle4.display();
particle5.display();
particle6.display();
particle7.display();
particle8.display();
particle9.display();
particle10.display();
particle11.display();
particle12.display();
particle13.display();
particle14.display();
particle15.display();
particle16.display();
particle17.display();
particle18.display();




division1.display();
division2.display();
division3.display();
division4.display();
division5.display();
division6.display();
division7.display();
division8.display();
division9.display();
division10.display();
division11.display();
division12.display();


  drawSprites();

  
  
  
 
}

