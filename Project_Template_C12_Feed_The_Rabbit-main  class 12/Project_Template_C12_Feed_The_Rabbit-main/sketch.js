var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var redImageImg
var orangeLeafImg
var leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  redImageImg = loadImage("redImage.png")
  orangeLeafImg = loadImage("orangeLeaf.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
 
//creating apple 
apple=createSprite(200,100,10,10);
apple.addImage(appleImg)
apple.scale=0.09;
apple.velocityY=4 

//creating redImage 
redImage=createSprite(250,100,10,10)
redImage.addImage(redImageImg)
redImage.scale=0.09
redImage.velocityY=4

//creating orangeLeafImg
orangeLeaf=createSprite(100,100,10,10)
orangeLeaf.addImage(orangeLeafImg)
orangeLeaf.scale=0.09
orangeLeaf.velocityY=4

//creating leafImg  
leaf=createSprite(10,100,10,10)
leaf.addImage(leafImg)
leaf.scale=0.09
leaf.velocityY=4
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX

createApples();
createLeafs();
createorangeLeafs();
createredImage();
  drawSprites();
}

function createApples() {
  if(frameCount%80===0){
    apple=createSprite(random(50,350),40,10,10)
    apple.addImage(appleImg);
    apple.scale=0.08;
    apple.velocityY=5;
    apple.lifetime=150;
  }
 
  }
  function createLeafs() {
    if(frameCount%80===0){
      leaf=createSprite(random(50,350),40,10,10)
      leaf.addImage(leafImg);
      leaf.scale=0.1;
      leaf.velocityY=5;
      leaf.lifetime=150;
    }
    
  }    

  function createorangeLeafs() {
    if(frameCount%80===0){
    orangeLeaf=createSprite(random(50,350),40,10,10)
      orangeLeaf.addImage(orangeLeafImg);
      orangeLeaf.scale=0.1;
      orangeLeaf.velocityY=5;
      orangeLeaf.lifetime=150;
    }
    
  }    

  function createredImage() {
    if(frameCount%80===0){
    redImage=createSprite(random(50,350),40,10,10)
      redImage.addImage(redImageImg);
      redImage.scale=0.1;
      redImage.velocityY=5;
      redImage.lifetime=150;
    }
    
  }    
