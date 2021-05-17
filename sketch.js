// declaring the variables
var tom, tom_walking, tom_sit,tom_sprite,jerry_sprite;
var jerry, jerry_cheese, jerry_tease, jerry_look;
var bg, bgImage;


function preload() {
  // loading the images & animations
  tom = loadAnimation("cat1.png");
  tom_walking = loadAnimation("cat2.png", "cat3.png");
  tom_sit = loadAnimation("cat4.png");

  jerry = loadAnimation("mouse1.png");
  jerry_tease = loadAnimation("mouse2.png", "mouse3.png");
  jerry_look = loadAnimation("mouse4.png");

  bg = loadImage("garden.png");

}

function setup() {
  //loading the backgroung image

  createCanvas(1000, 800);

  tom_sprite = createSprite(700, 600, 40, 40);
  tom_sprite.addAnimation("cat",tom);
  tom_sprite.addAnimation("walking", tom_walking);
  tom_sprite.addAnimation("sitting", tom_sit);

  tom_sprite.scale = 0.2;
  

  jerry_sprite = createSprite(190, 600, 20, 20);
  jerry_sprite.addAnimation("mouse",jerry);
  jerry_sprite.addAnimation("teasing", jerry_tease);
  jerry_sprite.addAnimation("looking", jerry_look);

  jerry_sprite.scale = 0.2;

}

function draw() {
  // garden image of the backgroun
  // setting the background
  background(bg);

  //colliding tom and jerry
  if (tom_sprite.x - jerry_sprite.x < (tom_sprite.width - jerry_sprite.width)/2) {

      tom_sprite.changeAnimation("sitting", tom_sit);
      tom_sprite.velocityX = 0;

      jerry_sprite.changeAnimation("looking", jerry_look);

  }
 
  if(keyDown(LEFT_ARROW)){
    tom_sprite.velocityX = -4;
    tom_sprite.changeAnimation("walking", tom_walking);
    jerry_sprite.changeAnimation("teasing", jerry_tease);


  
    
    
  }

  drawSprites();
}





function keyPressed() {

  //make the cat move towards the mouse

  if (keyCode === LEFT_ARROW) {
    tom_sprite.velocityX = -5;

    tom_sprite.changeAnimtaion("walking", tom_walking);
    jerry_sprite.changeAnimation("teasing", jerry_tease);
    

  }




}
