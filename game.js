class Game {
    constructor() {
        this.backgroundImage;
        this.boxImage;
        this.ghostImage;
        this.playerDownAnim;
        this.playerUpAnim;
        this.playerLeftAnim;
        this.playerRightAnim;
        this.ghostDownAnim;
        this.ghostUpAnim;
        this.playerLeftAnim;
        this.ghostRightAnim;
        this.doorImageTop;
        this.doorImageBottom;
        this.doorImageRight;
        this.doorImageLeft;
        this.vaseImage; 

    }
    setup() {
        this.levels = new Levels();
        this.currentLevel = this.levels.levelTwo;
        this.player = new Player();
        this.boxes = new Box();
        this.boxes.setup();
        this.ghosts = [];
        this.ghostAdder(this.currentLevel, 'gr');
        this.ghostAdder(this.currentLevel, 'gc');
        //this.ghostIndexes = game.levelParser(game.currentLevel, 'gr');
        this.door = new Door();
        this.vase = new Vase();
    }
    preLoad() {
        this.backgroundImage = loadImage('assets/individual-images/floor.png');
        this.boxImage = loadImage('assets/individual-images/box.png');
        this.ghostImage = loadImage('assets/individual-images/ghost/ghostLeft1.png');
        this.doorImageBottom = loadImage('assets/individual-images/doorBottom.png');
        this.doorImageTop = loadImage('assets/individual-images/doorTop.png');
        this.doorImageRight = loadImage('assets/individual-images/doorRight.png');
        this.doorImageLeft = loadImage('assets/individual-images/doorLeft.png');
        this.vaseImage = loadImage('assets/individual-images/vase.png');
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
        this.ghostDownAnim = [
            loadImage('assets/individual-images/ghost/ghostDown1.png'),
            loadImage('assets/individual-images/ghost/ghostDown2.png'),
            loadImage('assets/individual-images/ghost/ghostDown3.png'),
            loadImage('assets/individual-images/ghost/ghostDown4.png'),
            loadImage('assets/individual-images/ghost/ghostDown5.png'),
            loadImage('assets/individual-images/ghost/ghostDown6.png')
        ];
        this.ghostUpAnim = [
            loadImage('assets/individual-images/ghost/ghostUp1.png'),
            loadImage('assets/individual-images/ghost/ghostUp2.png'),
            loadImage('assets/individual-images/ghost/ghostUp3.png'),
            loadImage('assets/individual-images/ghost/ghostUp4.png'),
            loadImage('assets/individual-images/ghost/ghostUp5.png'),
            loadImage('assets/individual-images/ghost/ghostUp6.png')
        ];
        this.ghostRightAnim = [
            loadImage('assets/individual-images/ghost/ghostRight1.png'),
            loadImage('assets/individual-images/ghost/ghostRight2.png'),
            loadImage('assets/individual-images/ghost/ghostRight3.png'),
            loadImage('assets/individual-images/ghost/ghostRight4.png'),
            loadImage('assets/individual-images/ghost/ghostRight5.png'),
            loadImage('assets/individual-images/ghost/ghostRight6.png')
        ];
        this.ghostLeftAnim = [
            loadImage('assets/individual-images/ghost/ghostLeft1.png'),
            loadImage('assets/individual-images/ghost/ghostLeft2.png'),
            loadImage('assets/individual-images/ghost/ghostLeft3.png'),
            loadImage('assets/individual-images/ghost/ghostLeft4.png'),
            loadImage('assets/individual-images/ghost/ghostLeft5.png'),
            loadImage('assets/individual-images/ghost/ghostLeft6.png')
        ];

    }
    draw() {
        image(this.backgroundImage, 0, 0, width, height)
        this.player.draw();
        this.boxes.draw();
        this.door.draw();
        this.vase.draw();
        this.ghosts.forEach(function (ghost) {
            ghost.draw();
        })
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
            if(typeOfGhost==='gr'){this.ghosts.push(new Ghost(indexes[i][0] * 50, indexes[i][1] * 50,'left'));}
            if(typeOfGhost==='gc'){this.ghosts.push(new Ghost(indexes[i][0] * 50, indexes[i][1] * 50,'down'));}
        }
    }

    reloadLevel(){
        this.setup();
    }
}