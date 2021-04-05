class Game {
    constructor() {
        //game objects
        this.player;
        this.boxes;
        this.levels;
        this.currentLevel;
        //images
        this.backgroundImage;
        this.playerDown;
        this.playerUp;
        this.playerRight;
        this.playerLeft;
        this.boxImage;

    }
    setup() {
        this.levels = new Levels();
        this.currentLevel = this.levels.levelOne;
        this.player = new Player();
        this.boxes = new Box();

        this.player.setup(0, 0);
        this.boxes.setup();
        console.log(this.boxes.indexes);
    }
    preLoad() {
        this.backgroundImage = loadImage('assets/individual-images/floor.png');
        this.playerDown = loadImage('assets/individual-images/player/playerDown1.png');
        this.playerUp = loadImage('assets/individual-images/player/playerUp1.png');
        this.playerRight = loadImage('assets/individual-images/player/playerRight1.png');
        this.playerLeft = loadImage('assets/individual-images/player/playerLeft1.png');
        this.boxImage = loadImage('assets/individual-images/box.png');
    }
    draw() {
        image(this.backgroundImage, 0, 0, width, height)
        this.player.draw();
        this.boxes.draw();
    }
    levelParser(level, gameObjectString) {
        let indexes = [];
        for (let i = 0; i < level.length; i++) {
          for (let n = 0; n < level[i].length; n++) {
            if (level[i][n] === gameObjectString) {
              indexes.push([i, n]);
            }
          }
        }
        return indexes;
      }
}