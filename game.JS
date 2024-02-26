/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(windowWidth, windowHeight);
  bluebox = new Sprite(200, 300, 150, 50, 'd');
  bluebox.color = 'blue';
  bluebox.rotationSpeed = 10;
wallLH  = new Sprite(0, 400, 8, 800, 'k');
wallLH.color = 'black';
wallRH  = new Sprite(1500, 400, 10, 800, 'k');
wallTop = new Sprite(750, 0, 1500, 10, 'k');
wallBot = new Sprite(750, 800, 1500, 10, 'k');
world.gravity.y = 10;
}

document.addEventListener("keydown", function(event) {

  if (event.code === 'ArrowLeft') {

    // Set sprite's velocity to the left
bluebox.vel.x = -3;
  }

  else if (event.code === 'ArrowRight')
bluebox.vel.x = 3;

});

document.addEventListener("keydown", function(event) {

  if (event.code === 'ArrowUp') {

    // Set sprite's velocity to the left
bluebox.vel.y = -3;
  }

  else if (event.code === 'ArrowDown')
bluebox.vel.y = 3;

});

document.addEventListener("keyup", function(event) {

  if (event.code === 'ArrowLeft') {

bluebox.vel.x = 0;

  }

  else if (event.code === 'ArrowRight')
bluebox.vel.x = 0;

});

document.addEventListener("keyup", function(event) {

  if (event.code === 'ArrowUp') {

bluebox.vel.y = 0;

  }

  else if (event.code === 'ArrowDown')
bluebox.vel.y = 0;

});

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
   background('purple');
}

/*******************************************************/
//  END OF APP
/*******************************************************/
