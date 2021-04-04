class Game {
    constructor() {
        this.player;
        this.backgroundImage;
        this.playerDown;
        this.playerUp;
        this.playerRight;
        this.playerLeft;
        this.playerImage;
        this.playerImages;
    }
    setup() {
        this.playerImages = {
            up : 'this.playerUp',
            down: 'this.playerUp',
            left : 'this.playerLeft',
            right : 'this.playerRight'
        };
        this.player = new Player();
        this.player.setup(0,0);
        this.playerImage = 'down';
        console.log('current player image '+ this.playerImage);
    }
    preLoad() {
        this.backgroundImage = loadImage('assets/individual-images/floor.png');
        this.playerDown = loadImage('assets/individual-images/player/playerDown1.png');
        this.playerUp = loadImage('assets/individual-images/player/playerUp1.png');
        this.playerRight = loadImage('assets/individual-images/player/playerRight1.png');
        this.playerLeft = loadImage('assets/individual-images/player/playerLeft1.png');

    }
    draw() {
        image(this.backgroundImage, 0, 0, width, height)
        this.player.draw();
    }
    changePlayerImage(face){
        this.playerImage = this.playerImages[this.player.facing];
    }
}