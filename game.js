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

    }
    setup() {
        this.levels = new Levels();
        this.currentLevel = this.levels.levelOne;
        this.player = new Player();
        this.boxes = new Box();
        //this.ghost = new Ghost();
        this.player.setup(0, 0);
        this.boxes.setup();
        this.ghosts = [];
        this.ghostAdder(this.currentLevel, 'gr');
        console.log('trying to add a ghost');
        this.ghostIndexes = game.levelParser(game.currentLevel, 'gr');


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