function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

//level1

box1 = new Block(330,235,30,40); 
box2 = new Block(360,235,30,40);
box3 = new Block(390,235,30,40);
box4 = new Block(420,235,30,40);
box5 = new Block(450,235,30,40);

//level2
box6 = new Block(360,195,30,40);
box7 = new Block(390,195,30,40);
box8 = new Block(420,195,30,40);

//top
box9 = new Block(390,155,30,40);
}

function draw() {
  background(255,255,255);  

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);



  slingShot = new Slingshot(this.polygon,{x:100,y:200});

  imageMode(CENTER)

  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
polygon.display()
slingShot.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}



function keyPressed(){

  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}
