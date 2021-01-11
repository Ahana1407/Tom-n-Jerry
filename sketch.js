
var cat, cat1,cat2,cat3
var mouse, mouse1,mouse2,mouse3
var back, backI

function preload() {
    //load the images here

backI = loadImage("garden.png")

cat1 = loadImage("tomOne.png")
cat2 = loadAnimation("tomTwo.png","tomThree.png")
cat3 = loadImage("tomFour.png")

mouse1 = loadImage("jerryOne.png")
mouse2 = loadAnimation("jerryTwo.png","jerryThree.png")
mouse3 = loadImage("jerryFour.png")

}

function setup(){
createCanvas(600,400);
//create tom and jerry sprites here

back = createSprite(300,200)
back.addImage(backI)
back.scale = 0.6

cat = createSprite(465,310)
cat.addImage("cat_still",cat1)
cat.scale = 0.15

mouse = createSprite(80,310)
mouse.addImage("mouse_still",mouse1)
mouse.scale = 0.12


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

if(mousePressedOver(cat)){
  keyPressed();
}

if(cat.x - mouse.x < (cat.width - mouse.width)/2){
   cat.velocityX = 0
   cat.addAnimation("cat_last",cat3)
   cat.changeAnimation("cat_last")

   mouse.addAnimation("mouse_last",mouse3)
   mouse.changeAnimation("mouse_last")
   mouse.x = 50
   
}

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
   cat.velocityX = -5
   cat.addAnimation("cat_running",cat2)
   cat.changeAnimation("cat_running")
}

mouse.addAnimation("mouse_tease",mouse2)
mouse.changeAnimation("mouse_tease")

}
