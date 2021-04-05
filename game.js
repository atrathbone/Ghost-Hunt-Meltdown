class Game {
    constructor() {
        //game objects
        //this.player;
        //this.boxes;
        //this.ghost;
        //this.ghosts;
        //this.ghostIndexes;
        //this.levels;
        //this.currentLevel;
        //images
        this.backgroundImage;
        this.playerDown;
        this.playerUp;
        this.playerRight;
        this.playerLeft;
        this.boxImage;
        this.ghostImage;

        this.playerDownAnim;
        this.playerUpAnim;
        this.playerLeftAnim;
        this.playerRightAnim;

    }
    setup() {
        this.levels = new Levels();
        this.currentLevel = this.levels.levelOne;
        this.player = new Player();
        this.boxes = new Box();
        this.animation = new Animation();
        //this.ghost = new Ghost();
        this.player.setup(0, 0);
        this.boxes.setup();
        this.ghosts = [];
        this.ghostAdder(this.currentLevel, 'gr');
        console.log('trying to add a ghost');
        this.ghostIndexes = game.levelParser(game.currentLevel, 'gr');
        console.log(this.ghostIndexes);


        //this.ghost.setup();
    }
    preLoad() {
        this.backgroundImage = loadImage('assets/individual-images/floor.png');
        this.playerDown = loadImage('assets/individual-images/player/playerDown1.png');
        this.playerUp = loadImage('assets/individual-images/player/playerUp1.png');
        this.playerRight = loadImage('assets/individual-images/player/playerRight1.png');
        this.playerLeft = loadImage('assets/individual-images/player/playerLeft1.png');
        this.boxImage = loadImage('assets/individual-images/box.png');
        this.ghostImage = loadImage('assets/individual-images/ghost/ghostLeft1.png');

        this.playerDownAnim = [
            loadImage('assets/individual-images/player/playerDown1.png'),
            loadImage('assets/individual-images/player/playerDown2.png'),
            loadImage('assets/individual-images/player/playerDown3.png'),
            loadImage('assets/individual-images/player/playerDown4.png'),
            loadImage('assets/individual-images/player/playerDown5.png'),
            loadImage('assets/individual-images/player/playerDown6.png')
        ];
        this.playerUpAnim = [
            loadImage('assets/individual-images/player/playerUp1.png'),
            loadImage('assets/individual-images/player/playerUp2.png'),
            loadImage('assets/individual-images/player/playerUp3.png'),
            loadImage('assets/individual-images/player/playerUp4.png'),
            loadImage('assets/individual-images/player/playerUp5.png'),
            loadImage('assets/individual-images/player/playerUp6.png')
        ];
        this.playerRightAnim = [
            loadImage('assets/individual-images/player/playerRight1.png'),
            loadImage('assets/individual-images/player/playerRight2.png'),
            loadImage('assets/individual-images/player/playerRight3.png'),
            loadImage('assets/individual-images/player/playerRight4.png'),
            loadImage('assets/individual-images/player/playerRight5.png'),
            loadImage('assets/individual-images/player/playerRight6.png')
        ];
        this.playerLeftAnim = [
            loadImage('assets/individual-images/player/playerLeft1.png'),
            loadImage('assets/individual-images/player/playerLeft2.png'),
            loadImage('assets/individual-images/player/playerLeft3.png'),
            loadImage('assets/individual-images/player/playerLeft4.png'),
            loadImage('assets/individual-images/player/playerLeft5.png'),
            loadImage('assets/individual-images/player/playerLeft6.png')
        ];
    }
    draw() {
        image(this.backgroundImage, 0, 0, width, height)
        this.player.draw();
        this.boxes.draw();
        //this.ghost.draw();
        this.ghosts.forEach(function (ghost) {
            ghost.draw();
        })

        // for (ghost of this.ghosts) {
        //     console.log(ghost);
        //     ghost.draw();
        // }
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
    ghostAdder(level, typeOfGhost) {
        let indexes = this.levelParser(level, typeOfGhost);
        for (let i = 0; i < indexes.length; i++) {
            console.log('ghost added');
            this.ghosts.push(new Ghost(indexes[i][0] * 50, indexes[i][1] * 50));
            //image(game.ghostImage, indexes[i][0] * 50, this.indexes[i][1] * 50, 50, 50);
            // this.indexes = game.levelParser(game.currentLevel, 'b');
        }
    }
}