/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 200;
const PLAYER_HEIGHT = 25;
const PLAYER_WIDTH = 25;


const OBSTACLE_HEIGHT = PLAYER_HEIGHT;
const OBSTACLE_WIDTH = PLAYER_WIDTH;

var obstacles;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  bluebox = new Sprite(200, 300, 150, 50, 'd');
  bluebox.color = 'blue';
  bluebox.rotationSpeed = 10;
wallLH  = new Sprite(0, 400, 8, 800, 'k');
wallLH.color = 'black';

wallRH  = new Sprite(1500, 400, 10, 800, 'k');
wallTop = new Sprite(750, 0, 1500, 10, 'k');
wallBot = new Sprite(750, 800, 1500, 10, 'k');
world.gravity.y = 5;
}

document.addEventListener("keydown", 
        function(event) {
            console.log("Key pressed!"+player.y);

            if(player.y > 184 ){// 184 - found from testing - floor level
                console.log("Key pressed!");
                player.vel.y = -20;
            }
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
   background('purple');
}

/*******************************************************/
//  END OF APP
/*******************************************************/
