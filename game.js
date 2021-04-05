class Game {
    constructor() {
        //game objects
        this.player;
        this.boxes = [];
        //images
        this.backgroundImage;
        this.playerDown;
        this.playerUp;
        this.playerRight;
        this.playerLeft;
        this.boxImage;

    }
    setup() {
        this.player = new Player();
        this.boxes.push(new Box(5, 5));
        this.boxes.push(new Box(6, 5));
        this.boxes.push(new Box(7, 6));

        this.player.setup(0, 0);
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
        for (box of this.boxes) {
            box.draw();
        }

    }
}