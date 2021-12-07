const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4;
var pig, pig2;
var tronco, tronco2;
var troncoLigado;
var ligacao;

var bird;

var fundo_img;

function preload(){
    fundo_img = loadImage("spritesangrybirds/bg.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,10,50,50);
    box2 = new Box(730,10,50,50);
    box3 = new Box(600,-20,50,50);
    box4 = new Box(730,-20,50,50);
    pig = new Pig(670,10);
    pig2 = new Pig(670,-20);
    ground = new Ground(width/2,height,width,20);
    //PI = 180 , PI/2 = 90 , PI/4 = 180
    tronco = new Tronco(665,-10,200,PI/2);
    tronco2 = new Tronco(665,-30,200,PI/2);

    bird = new Bird(100,100);

    troncoLigado = new Tronco(230,180,80,PI/2);

    ligacao = new Chain(bird.body,troncoLigado.body);

}

function draw(){
    background(fundo_img);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig.display();
    pig2.display();
    ground.display();
    tronco.display();
    tronco2.display();

    bird.display();

    troncoLigado.display();
    ligacao.display();

   
}