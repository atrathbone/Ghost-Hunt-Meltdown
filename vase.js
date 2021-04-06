class Vase {
    constructor() {
        this.indexes = game.levelParser(game.currentLevel, 'v');
        this.isCollected = false;
        this.xPos;
        this.yPos;
    }
    draw() {
// let myI = [this.xPos,this.yPos];
// let myIString = myI.toString();

        if (this.isCollected === false) {
            for (let i = 0; i < this.indexes.length; i++) {
                image(game.vaseImage, this.indexes[i][0] * 50, this.indexes[i][1] * 50, 50, 50);
                this.xPos = this.indexes[i][0]*50;
                this.yPos = this.indexes[i][1]*50;
            }
        }
    }

    collect(){
        this.isCollected = true; 
    }
}