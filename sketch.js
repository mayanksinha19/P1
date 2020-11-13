const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var engine, world;
var ground,box1,box2;
var ball,divisionHeight=300;
var d1,d2,d3,d4,d5,d6,d7,ground;
var obj;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    /*if(frameCount % 60===0){
        particles.push(new Particle(random (width/2-10,width/2+10,10,10)))
    }*/
  
   ground=new Ground(240,700,500,10);
    d1=new Divisions(80,550,10,300);
    d2=new Divisions(160,550,10,300);
    d3=new Divisions(240,550,10,300);
    d4=new Divisions(320,550,10,300);
    d5=new Divisions(400,550,10,300);
    d6=new Divisions(0,550,10,300);
    d7=new Divisions(480,550,10,300);  
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    d1.display(); 
    d2.display();
    d3.display();
    d4.display();
    d5.display();
    d6.display();
    d7.display();
}