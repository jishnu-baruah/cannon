const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var cannon;


function setup() {
    var canvas = createCanvas(windowWidth - 100, windowHeight - 100);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0, 700, 7200, 30);
    cannon = new Cannon(300, 635, 200);

}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    cannon.display();
    // console.log(ground);
}
