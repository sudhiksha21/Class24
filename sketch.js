const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2,box3,box4,box5;
var pig1,pig2,log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,500,50,50);
    box2 = new Box(1000,500,50,50)
    box3 = new Box(800,400,50,50);
    box4 = new Box(1000,400,50,50)
    box5 = new Box(900,300,50,50)
    ground = new Ground(600,590,1200,5);
    pig1 = new Pig(900,500,40,40); 
    pig2 = new Pig(900,400,40,40); 
   log1 = new Log(900,450,300,PI/2);
   log2 = new Log(900,350,300,PI/2);
   log3 = new Log(850,250,120,PI/6);
   log4 = new Log(950,250,120,PI/-6);
   bird = new Bird(200,100,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display();
   pig1.display();
   log1.display();
   box3.display();
    box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird.display();
}
