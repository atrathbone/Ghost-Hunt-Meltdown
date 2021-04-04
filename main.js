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
}

function preload() {
  game.preLoad();
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      //player.moveLeft();
      //currentFacing = 'left';
      break;
    case RIGHT_ARROW:
     //player.moveRight();
      //currentFacing = 'right';
      break;
    case UP_ARROW:
      //player.moveUp();
      //currentFacing = 'up';
      break;
    case DOWN_ARROW:
      //player.moveDown();
      //
      currentFacing = 'down';
      break;
  }
}