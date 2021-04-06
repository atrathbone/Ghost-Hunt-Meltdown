class Door {
    constructor() {
        this.indexesTop = game.levelParser(game.currentLevel, 'dt');
        this.indexesBottom = game.levelParser(game.currentLevel, 'db');
        this.indexesRight = game.levelParser(game.currentLevel, 'dr');
        this.indexesLeft = game.levelParser(game.currentLevel, 'dl');
        this.xPos;
        this.yPos;
    }
    draw() {
        for (let i = 0; i < this.indexesTop.length; i++) {
            if (this.indexesTop)
                image(game.doorImageTop, this.indexesTop[i][0] * 50, this.indexesTop[i][1] * 50, 50, 50);
        }
        for (let i = 0; i < this.indexesBottom.length; i++) {
            if (this.indexesBottom)
                image(game.doorImageBottom, this.indexesBottom[i][0] * 50, this.indexesBottom[i][1] * 50, 50, 50);
        }
        for (let i = 0; i < this.indexesRight.length; i++) {
            if (this.indexesRight)
                image(game.doorImageRight, this.indexesRight[i][0] * 50, this.indexesRight[i][1] * 50, 50, 50);
        }
        for (let i = 0; i < this.indexesLeft.length; i++) {
            if (this.indexesLeft)
                image(game.doorImageLeftindexesLeft, this.indexesLeft[i][0] * 50, this.indexesLeft[i][1] * 50, 50, 50);
        }
    }
}