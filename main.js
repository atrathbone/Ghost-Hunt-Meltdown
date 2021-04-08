const game = new Game();
const titleScreen = new StartScreen();
const fps = 12;
var isStarted = false;

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('p5');
  noSmooth();
  frameRate(fps);
  game.setup();
}

function draw() {
  if(isStarted === false){
    titleScreen.draw();
    stroke('chartreuse');
    strokeWeight(5);
    rect(0, 0, 500, 500);
    noFill();
  }
  else{
    background(220);
    game.draw();
    stroke('chartreuse');
    strokeWeight(5);
    rect(0, 0, 500, 500);
    noFill();
  }
}

function preload() {
  game.preLoad();
}

function keyPressed() {
  console.log(`key:${key} key code:${keyCode}`)
  if(isStarted=== false){
    if (keyCode === ENTER){
      game.music.loop();
      isStarted = true; 
    }
  }
  else{
    switch (keyCode) {
      case 65:
        game.player.moveLeft('left');
        break;
      case 68:
        game.player.moveRight('right');
        break;
      case 87:
        game.player.moveUp('up');
        break;
      case 83:
        game.player.moveDown('down');
        break;
    }
  }
}

