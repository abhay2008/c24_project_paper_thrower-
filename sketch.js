const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;

var paper;

var ground;

var j = 0;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, height - 35, width, 20);
	World.add(world, ground);

	box1 = new Box(800, 610, 15, 100);
	World.add(world, box1);

	box2 = new Box(892, 660, 200, 15);
	World.add(world, box2);

	box3 = new Box(985, 610, 15, 100);
	World.add(world, box3);

	paper = new Paper(200, 200, 40);
	World.add(world, paper);

	Engine.run(engine);

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 250,
			y: -400
		});
	}
}

function draw() {
	background(0);

	ground.display();

	paper.display();

	box1.display();
	box2.display();
	box3.display();

	textStart();

	success();

	failure();

	drawSprites();

	//Engine.update(engine);

}

function textStart() {
	if (paper.body.position.x < 300 && paper.body.position.x < 850 && paper.body.position.y < 700) {
		fill("lime");
		textSize(40);
		text("click on up arrow to throw the ball", 200, 200);
		j = 1;
	}
}

function success() {
	if (j == 1 && paper.body.position.x >= 800 && paper.body.position.y >= 600 && paper.body.position.x < 1000) {
		fill("cyan");
		textSize(100);
		text("GOOD THROW!", 100, 200);
	}
}

function failure() {
	if (paper.body.position.x > 300 && paper.body.position.x < 800 && paper.body.position.y > 600 || paper.body.position.x > 1000) {
		fill("red");
		textSize(100);
		text("BAD THROW!", 100, 200);
	}
}