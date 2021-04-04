class Game {
    constructor() {
        this.player;
        this.backgroundImage;
        this.playerImage;
    }
    setup() {
        this.player = new Player();
        this.player.setup(0,0);
    }
    preLoad() {
        this.backgroundImage = loadImage('assets/individual-images/floor.png');
        this.playerImage = loadImage('assets/individual-images/player/playerDown1.png');
    }
    draw() {
        image(this.backgroundImage, 0, 0, width, height)
        this.player.draw();
    }
}