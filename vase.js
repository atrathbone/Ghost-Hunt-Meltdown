class Vase {
    constructor() {
        this.indexes = game.levelParser(game.currentLevel, 'v');
        this.isCollected = false;
    }

    draw() {
        if (this.isCollected === false) {
            for (let i = 0; i < this.indexes.length; i++) {
                image(game.vaseImage, this.indexes[i][0] * 50, this.indexes[i][1] * 50, 50, 50);
            }
        }
    }

    collect() {
        this.isCollected = true;
    }
}