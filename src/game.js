class Game {
    constructor() {
        this.levels = new Levels();
        
    }
    setup() {
        this.shouldDrawText = false; 
        this.currentLevel = this.levels.levelList[this.levels.currentLevelIndex];
        this.player = new Player();
        this.boxes = new Box();
        this.boxes.setup();
        this.ghosts = [];
        this.demonSpawn = new DemonSpawn();
        this.ghostAdder(this.currentLevel, 'gr');
        this.ghostAdder(this.currentLevel, 'gc');
        this.ghostAdder(this.currentLevel, 'sr');
        this.ghostAdder(this.currentLevel, 'sc');
        this.ghostAdder(this.currentLevel, 'ds');
        this.door = new Door();
        this.vase = new Vase();
        this.plant = new Plant();
        
    }
    preLoad() {
        soundFormats('ogg');
        this.music = loadSound('assets/GHM-music.ogg');
        this.doorSFX = loadSound('assets/sfx/door.ogg')
        this.deathSFX = loadSound('assets/sfx/death.ogg');
        this.vaseText = loadImage('assets/individual-images/myVaseText.png');
        this.vaseSFX = loadSound('assets/sfx/vase.ogg');
        this.demonicGhostSFX = loadSound('assets/sfx/demented-ghost.ogg');
        this.backgroundImage = loadImage('assets/individual-images/floor.png');
        this.boxImage = loadImage('assets/individual-images/box.png');
        this.doorImageBottom = loadImage('assets/individual-images/doorBottom.png');
        this.doorImageTop = loadImage('assets/individual-images/doorTop.png');
        this.doorImageRight = loadImage('assets/individual-images/doorRight.png');
        this.doorImageLeft = loadImage('assets/individual-images/doorLeft.png');
        this.vaseImage = loadImage('assets/individual-images/vase.png');
        this.plantImage = loadImage('assets/individual-images/plant.png');
        this.demonSpawnImage = loadImage('assets/individual-images/pentagram.png');
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
        this.superGhostDownAnim = [
            loadImage('assets/individual-images/s-ghost/S-ghost1.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost2.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost3.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost4.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost5.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost6.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost7.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost8.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost9.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost10.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost11.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost12.png')

        ];
        this.superGhostUpAnim = [
            loadImage('assets/individual-images/s-ghost/S-ghost13.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost14.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost15.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost16.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost17.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost18.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost19.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost20.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost21.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost22.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost23.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost24.png')
        ];
        this.superGhostLeftAnim = [
            loadImage('assets/individual-images/s-ghost/S-ghost37.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost38.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost39.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost40.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost41.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost42.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost43.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost44.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost45.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost46.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost47.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost48.png')
        ];
        this.superGhostRightAnim = [
            loadImage('assets/individual-images/s-ghost/S-ghost25.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost26.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost27.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost28.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost29.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost30.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost31.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost32.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost33.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost34.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost35.png'),
            loadImage('assets/individual-images/s-ghost/S-ghost36.png')
        ];
        this.demonicGhostAnim = [
            loadImage('assets/individual-images/demonic-ghost/demonic-ghost1.png'),
            loadImage('assets/individual-images/demonic-ghost/demonic-ghost2.png'),
            loadImage('assets/individual-images/demonic-ghost/demonic-ghost3.png'),
            loadImage('assets/individual-images/demonic-ghost/demonic-ghost4.png')
        ];
        this.titleScreenAnim = [
            loadImage('assets/individual-images/title-screen/title-screen1.png'),
            loadImage('assets/individual-images/title-screen/title-screen2.png'),
            loadImage('assets/individual-images/title-screen/title-screen3.png'),
            loadImage('assets/individual-images/title-screen/title-screen4.png'),
            loadImage('assets/individual-images/title-screen/title-screen5.png'),
            loadImage('assets/individual-images/title-screen/title-screen6.png'),
            loadImage('assets/individual-images/title-screen/title-screen7.png'),
            loadImage('assets/individual-images/title-screen/title-screen8.png'),
            loadImage('assets/individual-images/title-screen/title-screen9.png'),
            loadImage('assets/individual-images/title-screen/title-screen10.png'),
            loadImage('assets/individual-images/title-screen/title-screen11.png'),
            loadImage('assets/individual-images/title-screen/title-screen12.png')
        ];
    }
    draw() {
        clear();
        image(this.backgroundImage, 0, 0, width, height)
        this.door.draw();
        this.demonSpawn.draw();
        this.player.draw();
        this.boxes.draw();
        this.vase.draw();
        this.ghosts.forEach(function (ghost) {
            ghost.draw();
        })
        this.plant.draw();
        if(this.shouldDrawText === true){
            image(this.vaseText, 0,0,100,50);
        }
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
            switch (typeOfGhost) {
                case 'gr':
                    this.ghosts.push(new Ghost(indexes[i][0] * 50, indexes[i][1] * 50, 'left'));
                    break;
                case 'gc':
                    this.ghosts.push(new Ghost(indexes[i][0] * 50, indexes[i][1] * 50, 'down'));
                    break;
                case 'sr':
                    this.ghosts.push(new Ghost(indexes[i][0] * 50, indexes[i][1] * 50, 'left', true));
                    break;
                case 'sc':
                    this.ghosts.push(new Ghost(indexes[i][0] * 50, indexes[i][1] * 50, 'down', true));
                    break;
                case 'ds':
                    this.ghosts.push(new DemonicGhost());
                    break;
            }
        }
    }

    reloadLevel() {
        this.setup();
    }

    loadNextLevel() {
        if (this.levels.currentLevelIndex < this.levels.levelList.length - 1) {
            game.doorSFX.play();
            this.levels.currentLevelIndex++;
        } else {
            game.doorSFX.play();
            this.levels.currentLevelIndex = 0;
        }
        this.shouldDrawText = false; 
        this.setup();
    }
}