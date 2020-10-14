var score=0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground1 = new ground(200,200,200,15);
  
  //bottom row
  block1 = new block(300,355,30,40);
  block2 = new block(330,355,30,40);
  block3 = new block(360,355,30,40);
  block4 = new block(390,355,30,40);
  block5 = new block(420,355,30,40);
  block6 = new block(450,355,30,40);
  block7 = new block(480,355,30,40);
//level-1
block8 = new block(330,235,30,40);
block9 = new block(360,235,30,40);
block10 = new block(390,235,30,40);
block11 = new block(420,235,30,40);
block12 = new block(450,235,30,40);
//level-2
block13 = new block(360,195,30,40);
block14 = new block(390,195,30,40);
block15 = new block(420,195,30,40);
//top row
block16 = new block(390,155,30,40);

slingshot1 = new slingshot(200,100);

polygon1 = new slingshot(250,150);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

text("Score :" + Score, 750,48);
}

function mouseDragged(){
  Matter.Body.setPosition(slingshot1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(this.polygon1);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
      bg = "images/bg1.png";
  }
  else{
      bg = "images/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}