const game = new Game();

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent('p5');
  noSmooth();
  game.setup();
}

function draw() {
 
  background(220);
  game.draw();
  stroke('chartreuse');
  strokeWeight(5);
  rect(0, 0, 500, 500);
  noFill();
  
}

function preload() {
  game.preLoad();
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      game.player.moveLeft('left');
      break;
    case RIGHT_ARROW:
      game.player.moveRight('right');
      break;
    case UP_ARROW:
      game.player.moveUp('up');
      break;
    case DOWN_ARROW:
      game.player.moveDown('down');
      break;
  }
}