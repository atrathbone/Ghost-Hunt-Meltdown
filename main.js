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